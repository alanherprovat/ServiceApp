import React, {useCallback, useEffect, useRef, useState} from 'react'
import { useTable, usePagination, useRowSelect, useSortBy, useGlobalFilter, useAsyncDebounce, useExpanded } from 'react-table'
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
import {
    AiFillCaretDown, AiFillCaretRight,
    AiOutlineClose,
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
} from "react-icons/ai";
import {IsNumber, JsonToXls} from "./FormHelper";
import DataNotFound from "../components/NotFound/DataNotFound";
import {Button, InputGroup, Offcanvas, OverlayTrigger} from "react-bootstrap";
import store from "../redux/store/store";
import {
    resetFilter,
    setFilterList,
} from "../redux/state-slice/settings/reactTable-slice";

import {FiFilter} from "react-icons/fi";
import {HiOutlineBars3} from "react-icons/hi2";
import {VscAdd} from "react-icons/vsc";
import moment from "moment";
import ValidateFilter from "./ReactTableFilterValidation";
import {deepCompare} from "./Config";
import {HiDownload} from "react-icons/hi";
import Cleave from "cleave.js/react";
import ReactToPrint from "react-to-print";
import {IoMdCheckboxOutline} from "react-icons/io";


const IndeterminateCheckbox = React.forwardRef(
    ({ multiSelect=true, disabled, indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <input disabled={!multiSelect || disabled} type="checkbox" ref={resolvedRef} {...rest} />
            </>
        )
    }
)

function GlobalFilter({globalSearchKeyword, setGlobalSearchKeyword, setGlobalFilter}) {

    const onChange = useAsyncDebounce(value => {
        if(value.includes(",")){
                setGlobalFilter(value.split(",") || undefined);
        } else setGlobalFilter(value || undefined);
        setGlobalSearchKeyword(value);
    }, 200)

    return (
            <div className="input-group h-100 max-width-200 ms-2">
                <input
                    value={globalSearchKeyword}
                    onChange={e => {
                        onChange(e.target.value);
                    }}
                    id="react-table-global-search"
                    type="search"
                    className="form-control form-control-sm animated zoomIn search-input-icon bg-white"
                    placeholder="Search.."
                />
            </div>
    )
}

function ReactTable({ pageNo =  30, excelShowAllRows, excelShowColumns, printBtn, showFooter, selectedListParam='', filter=false, excelBtn=false, disableSelectAllTick=false, excelDataSameAsTable, excelName, isExpanded=false, expandable=false, rowCheckedOnClick=false, globalSearch, ShowSelectAllBtn=true, disabled, tableLg, hideSL=false, columns, data, pagination = true, checkbox, multiSelect = true, sortable, selectedList=[], setSelectedList, className, handleOnClick, showPageNo=true }) {

    const stateReducer = useCallback((newState, action) => {
        if (!multiSelect) {
            if(action.type === "toggleRowSelected"){
                newState.selectedRowIds = {
                    [action.id]: action.value !== false
                }
            }
        }
        else {
            if((action.type !== "toggleRowSelected") && (selectedList.length > 0) && (Object.keys(newState?.selectedRowIds).length === 0)){
                console.log("Rendered");
                let arrData = [];

                if(selectedListParam.length > 0){
                    const isSameUser = (a, b) => a[selectedListParam] === b[selectedListParam];

                    const onlyInLeft = (left, right, compareFunction) => {
                        return left.filter((leftValue, LIdx) =>
                            right.some((rightValue) => {
                                if(compareFunction(leftValue, rightValue)) {
                                    arrData.push(LIdx);
                                }
                                return compareFunction(leftValue, rightValue);
                            })
                        );
                    }
                    onlyInLeft(data, selectedList, isSameUser);
                }
                else {
                    data?.forEach((row, idx) => {
                        selectedList.forEach((item) => {
                            let tempObj1 = Object.assign({}, item);
                            let tempObj2 = Object.assign({}, row);
                            delete tempObj1?.hoverContent;
                            delete tempObj2?.hoverContent;
                            if(selectedListParam?.length > 0){
                                if(tempObj1[selectedListParam] === tempObj2[selectedListParam]){
                                    console.log("Not deepCheck");
                                    arrData.push(idx);
                                }
                            }
                            else {
                                if(deepCompare(tempObj1, tempObj2)){
                                    console.log("deepCheck");
                                    arrData.push(idx);
                                }
                            }
                        })
                    })
                }

                newState.selectedRowIds = arrData.reduce((a, v) => ({ ...a, [v]: true}), {});
            }
        }
        return newState;
    }, [selectedList]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        prepareRow,
        page,
        rows,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        selectedFlatRows,
        state: {pageIndex, pageSize},
        toggleAllRowsExpanded,
        toggleRowSelected,
        toggleAllRowsSelected,
        setGlobalFilter
    } = useTable (
        {
            columns,
            data,
            hiddenColumns: () => {
                const hiddenColumnIds = [];
                columns.forEach(col => {
                    if (col.isVisible === false) hiddenColumnIds.push(col.id)
                });
                console.log(hiddenColumnIds);
                return hiddenColumnIds;
            },
            initialState: {
                pageIndex: 0,
                pageSize: pageNo,
                hiddenColumns: columns.map((col) => (col.isVisible === false) && col.accessor),
            },
            stateReducer,
            autoResetSortBy: false,
            autoResetPage: false,
        },
        useGlobalFilter,
        useSortBy, useExpanded, usePagination, useRowSelect, hooks => {
            !hideSL && hooks.visibleColumns.push(columns => [
                {
                    Header: 'SL',
                    id: 'SL',
                    Cell: ({ row }) => (
                        <div className="text-nowrap">
                            {row.index + 1}
                        </div>
                    ),
                    width: 10,
                    Footer: showFooter ? '-' : null,
                },
                ...columns,
            ]);
            checkbox && hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ toggleRowSelected, isAllPageRowsSelected, page }) => {
                        const modifiedOnChange = (event) => {
                            page.forEach((row) => {
                                //check each row if it is not disabled
                                if(!row.original.isDisabled){
                                    toggleRowSelected(row.id, event.currentTarget.checked);
                                }

                            });
                        };

                        //Count number of selectable and selected rows in the current page
                        //to determine the state of select all checkbox
                        let selectableRowsInCurrentPage = 0;
                        let selectedRowsInCurrentPage = 0;
                        page.forEach((row) => {
                            row.isSelected && selectedRowsInCurrentPage++;
                            !row.original.isDisabled && selectableRowsInCurrentPage++;
                        });

                        //If there are no selectable rows in the current page
                        //select all checkbox will be disabled -> see page 2
                        const rowDisabled = selectableRowsInCurrentPage === 0;
                        const checked =
                            (isAllPageRowsSelected ||
                                selectableRowsInCurrentPage === selectedRowsInCurrentPage) &&
                            !rowDisabled;

                        return (
                            <div>
                                <IndeterminateCheckbox
                                    onChange={modifiedOnChange}
                                    checked={checked}
                                    disabled={disabled || disableSelectAllTick || rowDisabled}
                                />
                            </div>
                        );
                    },
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox disabled={row?.original?.isDisabled || disabled} {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                    width: 10,
                    Footer: showFooter ? '-' : null,
                },
                ...columns,
            ]);
        })
    const [selectAll, setSelectAll] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [filterArr, setFilterArr] = useState([]);
    const [globalSearchKeyword, setGlobalSearchKeyword] = React.useState('')

    useEffect(() => {
        isExpanded && toggleAllRowsExpanded();
    }, [data]);

    const handleFilterClick = async() => {
        if(filterArr.length > 0) {
            let validation = await ValidateFilter(filterArr);
            if(validation){
                store.dispatch(setFilterList(filterArr));
            }
            return validation;
        }
        else handleResetFilter();
        return false;
    }

    const handleResetFilter = () => {
        store.dispatch(resetFilter());
        setFilterArr([{
            filterSearchKeyword: '',
            filterSearchMinVal: '',
            filterSearchMaxVal: '',
            filterSearchDate: null,
            filterType: 'Equals',
            filterParam: headerGroups[0]?.headers?.filter((col) => (col?.Header !== 'SL' && col?.Header !== 'Actions' && col?.id !== "selection"))[0].id
        }])
    }
    const handleAddToFilter = () => {
        let arr = JSON.parse(JSON.stringify(filterArr));
        arr.push({
            filterSearchKeyword: '',
            filterSearchMinVal: '',
            filterSearchMaxVal: '',
            filterSearchDate: null,
            filterType: 'Equals',
            filterParam: headerGroups[0]?.headers.filter((col) => (col?.Header !== 'SL' && col?.Header !== 'Actions' && col?.id !== "selection"))[0].id
        });
        setFilterArr(arr);
        (async () => {
            await setShowFilter(false);
            await setShowFilter(true);
        })()
    }
    const handleDeleteFilter = (id) => {
        let arr = JSON.parse(JSON.stringify(filterArr));
        arr.splice(id, 1);
        setFilterArr(arr);
        store.dispatch(setFilterList(arr));
        (async () => {
            await setShowFilter(false);
            await setShowFilter(true);
        })()
    }

    const onChangeSearchKeyword = async (e, index) => {
        let arr = JSON.parse(JSON.stringify(filterArr));
        arr[index].filterSearchKeyword = e.target.value;
        setFilterArr(arr);
        if(e.target.value.length === 0){
            await store.dispatch(setFilterList(arr));
            await setSuggestionList(suggestionSearchKeyword(arr[index].filterParam));
        }
        document.getElementById('filterSearchKeyword'+index)?.classList?.remove('validateFocus');
        await setShowFilter(false);
        await setShowFilter(true);
    }
    const onChangeSearchMinVal = (e, index) => {
        let arr = JSON.parse(JSON.stringify(filterArr));
        arr[index].filterSearchMinVal = e.target.value && (e.target.value)?.replace(/,/g, '');
        setFilterArr(arr);
        document.getElementById('filterSearchMinVal'+index)?.classList?.remove('validateFocus');
        (async () => {
            await setShowFilter(false);
            await setShowFilter(true);
        })()
    }
    const onChangeSearchMaxVal = (e, index) => {
        let arr = JSON.parse(JSON.stringify(filterArr));
        arr[index].filterSearchMaxVal = e.target.value && (e.target.value)?.replace(/,/g, '');
        setFilterArr(arr);
        document.getElementById('filterSearchMaxVal'+index)?.classList?.remove('validateFocus');
        (async () => {
            await setShowFilter(false);
            await setShowFilter(true);
        })()
    }
    const onChangeSearchDate = (e, index) => {
        let arr = JSON.parse(JSON.stringify(filterArr));
        arr[index].filterSearchDate = e.target.value;
        setFilterArr(arr);
        document.getElementById('filterSearchDate'+index)?.classList?.remove('validateFocus');
        (async () => {
            await setShowFilter(false);
            await setShowFilter(true);
        })()
    }

    const onChangeFilterType = (e, index) => {
        let arr = JSON.parse(JSON.stringify(filterArr));
        arr[index].filterType = e.target.value;
        setFilterArr(arr);
        (async () => {
            await setShowFilter(false);
            await setShowFilter(true);
        })()
    }
    const onChangeParam = (e, index) => {
        let arr = JSON.parse(JSON.stringify(filterArr));
        arr[index].filterParam = e.target.value;
        setFilterArr(arr);
        (async () => {
            await setShowFilter(false);
            await setShowFilter(true);
        })()
    }

    const [suggestionList, setSuggestionList] = useState([]);
    let suggestionSearchKeyword = (param) => {
        return [...new Set(rows.map((row) => row.values[param]))]
    }

    useEffect(() => {
        page && setSuggestionList(suggestionSearchKeyword(headerGroups[0]?.headers?.filter((col) => (col?.Header !== 'SL' && col?.Header !== 'Actions' && col?.id !== "selection"))[0]?.id));
    }, [page])

    const filterBody = <div className="mh-100 overflow-auto table-scrollable-thin p-2">
        {filterArr?.length > 0 && filterArr?.map((item, idx) =>
            <div
                key={idx.toString()}
                className = "w-100 d-flex flex-row align-items-center row g-1 mb-3 p-2 shadow"
            >
                <div className = "col-md-12 d-flex flex-row">
                    <select
                        value = {item.filterParam}
                        onChange = {(e) => {
                            onChangeParam(e, idx);
                            setSuggestionList(suggestionSearchKeyword(e.target.value));
                        }}
                        className = "form-select form-select-sm animated zoomIn border-radius-0"
                        id= {"filterParam" + idx}
                    >
                        {headerGroups[0]?.headers?.filter((col) => (col?.Header !== 'SL' && col?.Header !== 'Actions' && col?.id !== "selection"))?.map((column, id) =>
                            <option key={id.toString()} value = {column?.id}>{column?.Header}</option>)}
                    </select>
                    <button onClick={() => handleDeleteFilter(idx)} className = "btn btn-sm btn-link mb-0 p-0 ms-2">
                        <AiOutlineClose size = {16} color="red" />
                    </button>
                </div>
                <div className = "col-md-4">
                    <select
                        value = {item.filterType}
                        onChange = {(e) => onChangeFilterType(e, idx)}
                        className = "form-select form-select-sm animated zoomIn border-radius-0"
                        id = {"filterType" + idx}
                    >
                        <option value="Equals">Equals</option>
                        <option value="Range">Range</option>
                        <option value="Date">Date</option>
                        <option value="Contains">Contains</option>
                        {/*<option value="DateRange">Date Range</option>*/}
                    </select>
                </div>
                <div className = "col-md-8">
                    {
                        item.filterType === "Equals" ?
                            <>
                                <input
                                    value = {item.filterSearchKeyword}
                                    onChange = {(e) => onChangeSearchKeyword(e, idx)}
                                    onKeyDown={e => {
                                        if (e.key === 'Enter') (async() => await handleFilterClick())()
                                    }}
                                    onBlur={handleFilterClick}
                                    className = "form-control form-control-sm animated zoomIn border-radius-0"
                                    id = {"filterSearchKeyword" + idx}
                                    list="list-filterSearchKeyword"
                                    autoComplete="off"
                                />
                                <datalist id="list-filterSearchKeyword">
                                    {suggestionList?.length > 0 && suggestionList?.map((row, id) => <option key={id.toString()}>{row}</option>)}
                                </datalist>
                            </> :

                            item.filterType === "Contains" ?
                                <input
                                    value={item.filterSearchKeyword}
                                    onChange={(e) => onChangeSearchKeyword(e, idx)}
                                    onKeyDown={e => {
                                        if (e.key === 'Enter') (async () => await handleFilterClick())()
                                    }}
                                    onBlur={handleFilterClick}
                                    className="form-control form-control-sm animated zoomIn border-radius-0"
                                    id={"filterSearchKeyword" + idx}
                                /> :

                                item.filterType === "Range" ?
                                    <div className="d-flex flex-row">
                                        <Cleave options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                                                value={item.filterSearchMinVal}
                                                onChange={(e) => onChangeSearchMinVal(e, idx)}
                                                className="form-control form-control-sm animated zoomIn me-1 border-radius-0"
                                                placeholder="Min"
                                                id={"filterSearchMinVal" + idx}
                                        />
                                        <Cleave options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                                                value={item.filterSearchMaxVal}
                                                onChange={(e) => onChangeSearchMaxVal(e, idx)}
                                                onBlur={handleFilterClick}
                                                className="form-control form-control-sm animated zoomIn border-radius-0"
                                                placeholder="Max"
                                                id={"filterSearchMaxVal" + idx}
                                        />
                                    </div> :

                                item.filterType === "Date" && <input
                                    value={item.filterSearchDate}
                                    onChange={(e) => onChangeSearchDate(e, idx)}
                                    onBlur={handleFilterClick}
                                    className="form-control form-control-sm animated zoomIn border-radius-0"
                                    type="date"
                                    placeholder="DD-MM-YYYY"
                                    id={"filterSearchDate" + idx}
                                />
                    }
                </div>
            </div>)}
    </div>

    // Scroll To Top When Changing Page - Start //
    const ref = useRef();

    useEffect(() => {
        ref?.current?.scrollTo(0, 0);
    }, [pageIndex])

    useEffect(() => {
        setFilterArr([{
            filterSearchKeyword: '',
            filterSearchMinVal: '',
            filterSearchMaxVal: '',
            filterSearchDate: null,
            filterType: 'Equals',
            filterParam: headerGroups[0]?.headers.filter((col) => (col?.Header !== 'SL' && col?.Header !== 'Actions' && col?.id !== "selection"))[0]?.id
        }])
    }, [])

    useEffect(() => {
        checkbox && setSelectedList(selectedFlatRows.map((row) => row.original));
    }, [selectedFlatRows])

    const [tempVar, setTempVar] = useState(0);

    useEffect(() => {
        if(selectedList.length > 0 && tempVar < 2){
            toggleAllRowsSelected(false);
            setTempVar(tempVar + 1);
        }
    }, [selectedList])

    // Render the UI for your table
    return (
        <>
            <div>
                {(globalSearch?.titleRight ||globalSearch?.titleLeft || globalSearch?.search) && (<div className ={`d-flex m-0 justify-content-between align-items-center border-bottom-md p-2 ps-3`}>
                    {selectedFlatRows?.length > 0 ? <span className="text-primary text-bold text-lg m-0 p-0"><IoMdCheckboxOutline size={20} /> {selectedFlatRows?.length} selected </span> : <span className="m-0 p-0">{globalSearch?.titleLeft || ''}</span>}
                    <div className='d-flex align-items-center'>
                        {(globalSearch?.titleRight && <div className='h-100'>{globalSearch?.titleRight}</div>) || <div></div>}
                        {globalSearch?.search && <GlobalFilter globalSearchKeyword={globalSearchKeyword} setGlobalSearchKeyword={setGlobalSearchKeyword} setGlobalFilter = {setGlobalFilter} />}
                    </div>
                </div>)}
                {data?.length>0 ? <div ref = {ref} className = {"animated zoomIn p-2 py-0 mt-2 max-height-250 overflow-auto w-100 col-12 table-responsive table-scrollable-thin min-height-160 " + className}>
                    <table {...getTableProps()}
                           className ={`table table-sm table-hover table-bordered tableFixHead ${!expandable && "table-striped"} mb-0`}>
                        <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, idx) => {
                                    return (
                                            <th key={idx.toString()}
                                                className={`text-truncate align-middle p-2 py-1 ${tableLg ? "text-md text-primary" : "text-xs text-black font-weight-normal"} ${column?.align ? `text-${column?.align}` : 'text-start'} font-weight-bold`}
                                                {...column.getHeaderProps(!expandable && sortable && column.getSortByToggleProps())}
                                                title={column?.Header}
                                                {...{
                                                    key: column?.id,
                                                    colSpan: column?.colSpan,
                                                    style:{width: column?.width, minWidth: column?.minWidth, maxWidth: column?.maxWidth}
                                                }}
                                            >
                                                {column?.expandableBtn && expandable && <button
                                                    className='m-0 p-0 me-2 btn btn-sm p-0 m-0 btn-link'
                                                    onClick={() => {
                                                        toggleAllRowsExpanded()
                                                    }}
                                                >
                                                    <HiOutlineBars3 size={13}/>
                                                </button>}
                                                {column.render('Header')}
                                                <span>
                                                    {column.isSorted
                                                        ? column.isSortedDesc
                                                            ? ' ▼'
                                                            : ' ▲'
                                                        : ''
                                                    }
                                                </span>
                                            </th>
                                        )
                                    }
                                )}
                            </tr>
                        ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                        {
                            (pagination ? page : rows).map((row, i) => {
                                prepareRow(row);
                                return <>
                                    <tr
                                        key={i.toString()}
                                        onClick = {
                                            (rowCheckedOnClick ? ((e) => {
                                                !handleOnClick && !row?.original?.isDisabled && !disabled && checkbox && row.toggleRowSelected();
                                                handleOnClick && handleOnClick(e, row.original, row);
                                            }) : (e) => {
                                                handleOnClick && handleOnClick(e, row.original, row);
                                            })
                                        }
                                        className = {`${row?.isSelected ? "bg-light-green" : ""} ${row.depth !== 0 ? (row.depth%2 === 0 ? "bg-white" : "bg-lightgray") : ""} ${(handleOnClick || checkbox) ? "cursor-pointer" : ""} align-middle`}>
                                        {row.cells.map((cell,id) => {
                                            return (cell?.row?.original.hoverContent) ?
                                                <OverlayTrigger
                                                    placement = {id === (row.cells.length-1) ? "left" : (id < 2) ? "right" : i === 0 ? "bottom" : "top"}
                                                    overlay = {
                                                        <div className="z-index-3 p-2 bg-white shadow-lg border border-1 text-black">
                                                            {cell?.row?.original?.hoverContent}
                                                        </div>
                                                    }
                                                    defaultShow = {false}
                                                >
                                                    <td {...cell.getCellProps()} key={id.toString()}
                                                        className = {`${tableLg ? "text-sm text-wrap" : "text-xs text-truncate max-width-100"} cursor-pointer text-black ps-2 ${cell?.column.textWrap ? "text-wrap" : ""}`}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                </OverlayTrigger> :
                                                <td key={id.toString()}
                                                    title = {cell?.value}
                                                    className = {`${tableLg ? "text-sm text-wrap" : "text-xs text-truncate max-width-100"} px-2 text-black ${cell?.column?.align ? `text-${cell?.column?.align}` : 'text-start'} ${row.canExpand ? "text-bold" : "text-normal"} ${cell?.column.textWrap ? "text-wrap" : ""}`}>
                                                    {cell?.column?.expandableBtn && expandable && <button
                                                        className={`bg-transparent p-0 border border-0`}
                                                        style={{
                                                            margin: 0,
                                                            marginLeft: `${row?.depth*2}rem`,
                                                            marginRight: row.canExpand ? "0.5rem" : "1.35rem",
                                                        }}
                                                        onClick={() => {
                                                            row.toggleRowExpanded();
                                                        }}
                                                    >
                                                        {(row.canExpand) && (row.isExpanded ? <AiFillCaretDown size={13}/> : <AiFillCaretRight size={13}/>)}
                                                    </button>}

                                                    {cell.render('Cell')}
                                                </td>
                                        })}
                                    </tr>
                                </>
                        })}
                        </tbody>
                        <tfoot>
                        {footerGroups[0].headers[0]?.Footer?.length > 0 && footerGroups.map(group => {
                            let colSpanIdx = group.headers.findIndex(x => x?.FooterColSpan);
                            let colSpanValue = group.headers.find(x => x?.FooterColSpan)?.FooterColSpan;
                            return <tr {...group.getFooterGroupProps()}
                                className={`bg-light-green align-middle`}
                            >
                                {
                                    group.headers.filter((item, idx) =>
                                        !(idx > colSpanIdx && idx < colSpanIdx + colSpanValue)
                                    ).map((column) => {
                                        console.log(column.render("Footer"));
                                        return <td
                                            title={column.render("Footer")}
                                            {...column.getFooterProps()}
                                            colSpan={column.FooterColSpan || 1}
                                            className={`${tableLg ? "text-sm text-wrap" : "text-xs text-truncate max-width-100"} text-black ps-2 text-bold  ${column?.align ? `text-${column?.align}` : 'text-start'}`}
                                        > {column.render("Footer")} </td>
                                    })
                                }
                            </tr>
                        })}
                        </tfoot>
                    </table>

                </div> : <div className=""><DataNotFound/></div> }
            </div>

            <div className= {`p-3 pagination d-flex justify-content-between row g-1 ${!pagination && "d-none"}`}>
                <div className="col-md-auto col-xs-12 d-flex flex-row align-items-center justify-content-start">
                    <InputGroup className='border-radius-sm me-2'>
                        <button className="btn btn-sm mb-0 px-2 py-1 me-1 btn-outline-primary"
                                onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            <AiOutlineDoubleLeft size={10}/>
                        </button>
                        {' '}
                        <button className="btn btn-sm mb-0 px-2 py-1 me-1 btn-outline-primary"
                                onClick={() => previousPage()} disabled={!canPreviousPage}>
                            <BiLeftArrow size={10}/>
                        </button>
                        {' '}
                        <button className="btn btn-sm mb-0 px-2 me-1 py-1 btn-outline-primary"
                                onClick={() => nextPage()} disabled={!canNextPage}>
                            <BiRightArrow size={10}/>
                        </button>
                        {' '}
                        <button className="btn btn-sm mb-0 px-2 py-1 btn-outline-primary"
                                onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                            <AiOutlineDoubleRight size={10}/>
                        </button>
                    </InputGroup>
                    {checkbox && multiSelect && ShowSelectAllBtn && <button
                        className = {`btn mb-0 px-2 py-1 me-1 border-radius-0 text-nowrap ${selectedFlatRows.length === rows.length ? "bg-primary text-white border border-primary" : "btn-sm btn-outline-primary"}`}
                        onClick = {() => {
                            if(rows.filter(x => x.original?.isDisabled).length > 0){
                                rows.filter(x => !x.original?.isDisabled).forEach((item) => {
                                    toggleRowSelected(item.id, !rows.filter(x => !x.original?.isDisabled).every((row) => row?.isSelected));
                                });
                            } else toggleAllRowsSelected(!selectAll);
                            setSelectAll(!selectAll);
                        }}
                        disabled={disableSelectAllTick || disabled}
                    >
                        Select All
                    </button>}

                    {filter && <>
                        <button
                            className = {`btn mb-0 px-2 py-1 me-1 border-radius-0 ${(filterArr[0]?.filterSearchKeyword?.length > 0 || filterArr[0]?.filterSearchMinVal?.length > 0 || filterArr[0]?.filterSearchMaxVal?.length > 0) ? "bg-primary text-white border border-primary" : "btn-sm btn-outline-primary"}`}
                            onClick = {() => setShowFilter(true)}
                        >
                            Filter
                        </button>
                        {(filterArr[0]?.filterSearchKeyword?.length > 0 || filterArr[0]?.filterSearchMinVal?.length > 0 || filterArr[0]?.filterSearchMaxVal?.length > 0) && <button className='btn btn-sm mb-0 px-2 py-1 me-1 border-radius-0 btn-outline-danger text-nowrap' onClick={handleResetFilter}>Clear Filter</button>}
                    </>}

                    {excelBtn && rows?.length > 0 && <button
                        title='Download Excel'
                        onClick={() => {
                            debugger
                            let list = rows?.filter(item => (!excelShowAllRows && rows[0]?.allCells[0]?.column?.id === "selection") ? item?.isSelected : true)?.map((item) => {
                                let obj = {};
                                rows[0]?.allCells?.forEach(subItem => {
                                    if(subItem.column?.id !== "selection" && subItem.column?.id !== "SL" && subItem?.column?.isVisible){
                                        obj[subItem.column.Header] = item.values[subItem.column.id];
                                    }
                                });
                                return obj;
                            })
                            let selectedColumnList = excelShowColumns?.length > 0 ? (data?.map((item) => {
                                let obj = {};
                                excelShowColumns?.forEach(subItem => {
                                    obj[subItem] = item[subItem];
                                })
                                return obj;
                            })) : data;
                            debugger
                            JsonToXls(excelDataSameAsTable ? list : excelShowColumns?.length > 0 ? selectedColumnList : data, excelName);
                        }}
                        className='btn bg-primary text-white mb-0 px-2 py-1 text-nowrap border border-primary border-radius-0'
                    >
                        <HiDownload size={15} className='me-1' />Excel
                    </button>}

                    {printBtn && rows?.length > 0 && <ReactToPrint
                        bodyClass="print-agreement m-3"
                        content={() => ref.current}
                        trigger={() => (
                            <button className='btn bg-primary text-white mb-0 px-2 py-1 text-nowrap border border-primary border-radius-0'>
                                Print
                            </button>
                        )}
                    />}
                </div>
                {showPageNo && <div className = "d-flex flex-row justify-content-evenly col-md-auto col-xs-12 align-items-center">
                    <span className = "text-xs text-black text-nowrap me-2"> Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions?.length}
                        </strong>{' '}
                    </span>
                    <div className = "d-flex flex-row align-items-center">
                        <span className = "text-xs text-black text-nowrap me-2">{' '} | Go to page:{' '}</span>
                        <input
                            className = "form-control form-control-sm animated zoomIn border-radius-0 py-0 me-1"
                            type = "number"
                            defaultValue = {pageIndex + 1}
                            onChange = {e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style = {{width: '60px'}}
                        />
                        <select
                            className = "form-select form-select-sm animated zoomIn border-radius-0 py-0"
                            value = {rows.length < pageSize ? rows.length : pageSize}
                            onChange = {e => {
                                setPageSize(Number(e.target.value));
                            }}
                            style = {{width: '150px'}}
                        >
                            {[10, 20, 30, 40, 50, 100, 200, 500].filter((item, idx) => (rows.length >= [10, 20, 30, 40, 50, 100, 200, 500][idx-1] || item-9 <= rows.length)).map(item =>
                                <option key = {item} value = {(rows.length > item) ? item : rows.length}>
                                    Show {(rows.length > item) ? item : rows.length} out of {rows.length}
                                </option>
                            )}
                        </select>
                    </div>


                </div>}
            </div>

            <Offcanvas placement={"end"} show={showFilter} onHide={() => {
                (async () => {
                    await handleFilterClick() && setShowFilter(false);
                })()
            }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex flex-column justify-content-between h-100 p-1">
                        {filterBody}
                        <div className="w-100 d-flex flex-row justify-content-between p-1">
                            <button
                                className="btn btn-sm btn-outline-primary my-0 px-3"
                                onClick={handleAddToFilter}
                            >
                                <VscAdd className="me-2" size={16}/>
                                Add Filter
                            </button>
                            <div>
                                {(filterArr[0]?.filterSearchKeyword?.length > 0 || filterArr[0]?.filterSearchMinVal?.length > 0 || filterArr[0]?.filterSearchMaxVal?.length > 0 || filterArr[0]?.filterSearchDate != null || filterArr.length === 0) && <button
                                    className = "btn btn-sm btn-outline-danger my-0 me-2"
                                    onClick = {handleResetFilter}
                                >
                                    Reset
                                </button>}
                                <button
                                    className= {`btn btn-sm my-0 px-3 btn-outline-primary`}
                                    onClick={async () => {
                                        await handleFilterClick() && setShowFilter(false);
                                    }}
                                >
                                    <FiFilter className="me-2" size={14}/>
                                    Filter
                                </button>
                            </div>

                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </> )
}

export default ReactTable;

export const printPDF = (e) =>{
    e.preventDefault();
    console.log('print');
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

export const SearchableDataInReactTable = (searchKeyword, param='', List) => {
    return (searchKeyword?.length === 0) ? List : List?.filter((item) => IsNumber(item?.[param]) ? (parseFloat(item?.[param]) === parseFloat(searchKeyword)) : (item?.[param]?.toLowerCase())?.includes(searchKeyword?.toLowerCase()));
}
export const SearchableAllParamDataInReactTable = (searchKeyword, List) => {
    let filtered = [];
    const input = searchKeyword?.toLowerCase();
    if (input) {
        filtered = List.filter((el) => {
            return Object.values(el).some((val) =>
                String(val)?.toLowerCase().includes(input)
            );
        });

    }
    return searchKeyword.length === 0 ? List : filtered;
}

export const FilterDataInReactTable = (filter=[], List) => {
    if(filter?.filterType === "Equals"){
        return (filter?.filterSearchKeyword?.length === 0) ? List : (List?.filter((item) => IsNumber(item?.[filter?.filterParam]) ? (parseFloat(item?.[filter?.filterParam])?.toFixed(2) === parseFloat(filter?.filterSearchKeyword)?.toFixed(2)) : ((item?.[filter?.filterParam]?.trim())?.toLowerCase()) === (filter?.filterSearchKeyword?.toLowerCase())));
    }
    else if(filter?.filterType === "Range"){
        if(filter?.filterSearchMinVal.length === 0 && filter?.filterSearchMaxVal.length === 0){
            return List;
        }
        else if(filter?.filterSearchMaxVal.length === 0 && filter?.filterSearchMinVal.length !== 0){
            return List.filter((item) => parseFloat(item?.[filter?.filterParam]).toFixed(2) >= parseFloat(filter?.filterSearchMinVal))
        }
        else if(filter?.filterSearchMinVal.length === 0 && filter?.filterSearchMaxVal.length !== 0){
            return List.filter((item) => parseFloat(item?.[filter?.filterParam]).toFixed(2) <= parseFloat(filter?.filterSearchMaxVal))
        }
        return List.filter((item) => (parseFloat(item?.[filter?.filterParam]).toFixed(2) >= parseFloat(filter?.filterSearchMinVal) && parseFloat(item?.[filter?.filterParam]).toFixed(2) <= parseFloat(filter?.filterSearchMaxVal)))
    }
    else if(filter?.filterType === "Date"){
        return List.filter((item) => (item?.[filter?.filterParam]?.toLowerCase())?.includes(moment(filter?.filterSearchDate, "YYYY-MM-DD").format("DD/MM/YYYY")?.toLowerCase()))
    }
    if(filter?.filterType === "Contains"){
        return (filter?.filterSearchKeyword?.length === 0) ? List : (List?.filter((item) => ((filter?.filterSearchKeyword?.toLowerCase()).split(",")).includes((item?.[filter?.filterParam]?.trim()).toLowerCase())));
    }
    else return List;
}

export const FilterListInReactTable = (filterArr, List) => {
    let tempArr = List;
    for(let i = 0; i< filterArr.length; i++){
        tempArr = FilterDataInReactTable(filterArr[i], tempArr);
    }
    return tempArr;
}

export const ReactTableEditableCell = ({value, valueOnChange, type, readOnly=false, ...props}) => {
    const initialValue = value;
    const [cellValue, setCellValue] = React.useState(initialValue)

    React.useEffect(() => {
        setCellValue(initialValue);
    }, [initialValue])

    return (
        <input
            value={cellValue}
            onChange={e => setCellValue(e.target.value)}
            className="form-control form-control-sm text-xxs text-black lh-base"
            onKeyDown={(e) => {
                if(e.key === "Enter") {
                    valueOnChange(cellValue);
                }
            }}
            onBlur={() => valueOnChange(cellValue)}
            type={type || "text"}
            readOnly={readOnly}
            {...props}
        />
    )
}