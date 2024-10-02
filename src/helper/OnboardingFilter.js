import React, {useEffect} from 'react';
import {Offcanvas} from "react-bootstrap";
import {FiFilter} from "react-icons/fi";
import {GetFilterSubCategoriesRequest} from "../APIRequest/CommonRequest";
import store from "../redux/store/store";
import {onChangeFilterData, setFilterData} from "../redux/state-slice/settings/dropdown-slice";
import {TodayDate, TodayDateMinus30Days} from "./Config";
import {DateInput} from "./DateInput";
import moment from "moment/moment";
import {useSelector} from "react-redux";

const OnboardingFilter = ({categoryType, showFilter, setShowFilter, GetFilteredListRequest}) => {
    const filterCategoryList = useSelector((state) => state.dropdown.filterCategoryList);
    const filterSubCategoryList = useSelector((state) => state.dropdown.filterSubCategoryList);
    const filterData = useSelector((state) => state.dropdown.filterData);
    const filterDefaultLastMonth = {
        "filterOption": "1",
        "filterValueFrom": TodayDateMinus30Days,
        "filterValueTo": TodayDate
    }

    useEffect(() => {
        if(showFilter && filterData?.filterOption !== '' && filterData?.filterValueFrom !== ''){
            (async () => {
                if(filterData?.filterOption === ''){}
                else if(filterData?.filterOption === '1'){
                    document.getElementById('filterFromDate')?.classList?.remove('d-none');
                    document.getElementById('filterToDate')?.classList?.remove('d-none');
                }
                else if(filterData?.filterOption === '2' || filterData?.filterOption === '3'){
                    await GetFilterSubCategoriesRequest(categoryType, filterData?.filterOption);
                    document.getElementById('filterDropdown')?.classList?.remove('d-none');
                }
                else {
                    document.getElementById('filterText')?.classList?.remove('d-none');
                }
            })()
        }
    }, [showFilter]);

    const filterCategoryChange = async (e) => {
        await store.dispatch(onChangeFilterData({
            name: 'filterOption',
            value: e.target.value,
            inputID: 'filterOption'
        }));
        await store.dispatch(onChangeFilterData({
            name: 'filterValueFrom',
            value: '',
            inputID: 'filterValueFrom'
        }));
        await store.dispatch(onChangeFilterData({
            name: 'filterValueTo',
            value: '',
            inputID: 'filterValueTo'
        }));

        document.getElementById('filterFromDate')?.classList?.add('d-none');
        document.getElementById('filterToDate')?.classList?.add('d-none');
        document.getElementById('filterDropdown')?.classList?.add('d-none');
        document.getElementById('filterText')?.classList?.add('d-none');

        if(e.target.value === '1'){
            document.getElementById('filterFromDate')?.classList?.remove('d-none');
            document.getElementById('filterToDate')?.classList?.remove('d-none');
        }
        else if(e.target.value === '2' || e.target.value === '3'){
            await GetFilterSubCategoriesRequest(categoryType, e.target.value);
            document.getElementById('filterDropdown')?.classList?.remove('d-none');
        }
        else {
            document.getElementById('filterText')?.classList?.remove('d-none');
        }
    }

    const filterBody = <div>
        <div className = "row px-2 m-0">
            <div className = "col-sm-12 p-1">
                <label className = "form-label">Filter Categories</label>
                <select
                    value={filterData.filterOption || '0'}
                    onChange={filterCategoryChange}
                    placeholder = "Filter Category"
                    className = "form-select form-select-sm animated zoomIn"
                    id = "filterOption"
                >
                    <option value='0' disabled selected>Choose Category</option>
                    {filterCategoryList?.map((item) => <option value={item?.filterID}>{item?.filterName}</option>)}
                </select>
            </div>

            <div className="col-sm-12 p-1 d-none" id='filterFromDate'>
                <label className = "form-label">From Date</label>
                <DateInput
                    datemax={TodayDate}
                    value = {(filterData.filterValueFrom && moment(filterData.filterValueFrom, 'YYYY-MM-DD').format('DD/MM/YYYY')) || ''}
                    onChange = {(e) => store.dispatch(onChangeFilterData({
                        name: 'filterValueFrom',
                        value: moment(e.target.value, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        inputID: 'filterValueFrom'
                    }))}
                    placeholder = "DD/MM/YYYY"
                    className = "form-control form-control-sm animated zoomIn"
                    id = "filterValueFrom"
                />
            </div>
            <div className = "col-sm-12 p-1 d-none" id='filterToDate'>
                <label className = "form-label">To Date</label>
                <DateInput
                    datemax={TodayDate}
                    value={(filterData.filterValueTo && moment(filterData.filterValueTo, 'YYYY-MM-DD').format('DD/MM/YYYY')) || ''}
                    onChange={(e) => store.dispatch(onChangeFilterData({
                        name: 'filterValueTo',
                        value: moment(e.target.value, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        inputID: 'filterValueTo'
                    }))}
                    placeholder = "DD/MM/YYYY"
                    className = "form-control form-control-sm animated zoomIn"
                    id = "filterValueTo"
                />
            </div>
            <div className = "col-sm-12 p-1 d-none" id='filterDropdown'>
                <label className = "form-label">Filter Sub Categories</label>
                <select
                    value={filterData.filterValueFrom || '0'}
                    onChange={(e) => store.dispatch(onChangeFilterData({
                        name: 'filterValueFrom',
                        value: e.target.value,
                        inputID: 'filterValueFrom'
                    }))}
                    placeholder = "DD/MM/YYYY"
                    className = "form-select form-select-sm animated zoomIn"
                    id = "filterValueFrom"
                >
                    <option value='0' disabled selected>Choose Sub-Category</option>
                    {filterSubCategoryList.map((item) => <option value={item?.filterValueName}>{item?.filterValueName}</option>)}
                </select>
            </div>
            <div className = "col-sm-12 p-1 d-none" id='filterText'>
                <label className = "form-label">Filter Text</label>
                <input
                    value = {filterData.filterValueFrom || ''}
                    onChange = {(e) => store.dispatch(onChangeFilterData({
                        name: 'filterValueFrom',
                        value: e.target.value,
                        inputID: 'filterValueFrom'
                    }))}
                    placeholder = ""
                    className = "form-control form-control-sm animated zoomIn"
                    id = "filterValueFrom"
                />
            </div>

        </div>
    </div>

    const handleResetFilter = async () => {
        await store.dispatch(setFilterData(filterDefaultLastMonth));

        document.getElementById('filterFromDate')?.classList?.add('d-none');
        document.getElementById('filterToDate')?.classList?.add('d-none');
        document.getElementById('filterDropdown')?.classList?.add('d-none');
        document.getElementById('filterText')?.classList?.add('d-none');

        await GetFilteredListRequest(filterDefaultLastMonth);
        setShowFilter(false);
    }
    const handleFilterClick = async () => {
        console.log(filterData);
        await GetFilteredListRequest(filterData);
        setShowFilter(false);
    }

    return (
        <Offcanvas placement={"end"} show={showFilter} onHide={handleFilterClick}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="d-flex flex-column justify-content-between h-100 p-1">
                    {filterBody}
                    {filterData?.filterOption.length > 0 && <div className = "w-100 d-flex flex-row justify-content-between">
                        <button
                            className = "btn btn-sm btn-outline-danger my-0 me-2"
                            onClick = {handleResetFilter}
                        >
                            Reset
                        </button>
                        <button
                            className = {`btn btn-sm my-0 px-3 btn-outline-primary`}
                            onClick = {handleFilterClick}
                        >
                            <FiFilter className = "me-2" size = {14} />
                            Filter
                        </button>
                    </div>}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OnboardingFilter;