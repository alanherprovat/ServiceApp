import React, {useEffect, useRef, useState} from "react";
import moment from "moment/moment";
import {IsDate, IsEmpty} from "./FormHelper";
import '../assets/css/react-calendar-picker.css';
import '../assets/css/react-date-picker.css';
import {InputGroup, Overlay, Tooltip} from "react-bootstrap";
import Calendar from "react-calendar";
import {AiOutlineCalendar} from "react-icons/ai";
import InputMask from "react-input-mask";

export function DateInput(props) {
    const [showCalendar, setShowCalendar] = useState(false);
    const wrapperRef = useRef(null);
    const target = useRef(null);

    let mask = 'dD/mM/abyY';
    let yearMask = 'abyY';
    let formatChars = {
        'a': '[0-9]',
        'b': '[0-9]',
        'y': '[0-9]',
        'Y': '[0-9]',
        'd': '[0-3]',
        'D': '[0-9]',
        'm': '[0-1]',
        'M': '[0-9]'
    };

    let beforeMaskedValueChange = (newState, oldState, userInput) => {
        let {value} = newState;
        if(!props?.skipPartialDateValidation && props?.id){
            document.getElementById(props?.id)?.classList?.remove("validateFocus");
        }

        let dateParts = value.split('/');
        let dayPart = dateParts[0];
        let monthPart = dateParts[1];
        let yearPart = dateParts[2];

        if(props?.datemin){
            let dateMin = moment(props?.datemin, 'YYYY-MM-DD').format("DD/MM/YYYY");
            if(!value.includes("_") && moment(dateMin, "DD/MM/YYYY").isAfter(moment(value, "DD/MM/YYYY"))){
                value=dateMin;
            }
        }
        if(props?.datemax){
            let dateMax = moment(props?.datemax, 'YYYY-MM-DD').format("DD/MM/YYYY");
            if(!value.includes("_") && moment(dateMax, "DD/MM/YYYY").isBefore(moment(value, "DD/MM/YYYY"))){
                value=dateMax;
            }
        }

        // Conditional mask for the 2nd digit of day based on the first digit
        if(dayPart?.startsWith('3'))
            formatChars['D'] = '[0-1]'; // To block 39, 32, etc.
        else if(dayPart?.startsWith('0'))
            formatChars['D'] = '[1-9]'; // To block 00.
        else
            formatChars['D'] = '[0-9]'; // To allow 05, 15, 25 etc.

        // Conditional mask for the 2nd digit of month based on the first digit
        if(monthPart?.startsWith('1'))
            formatChars['M'] = '[0-2]'; // To block 15, 16, etc.
        else
            formatChars['M'] = '[1-9]'; // To allow 05, 06 - but blocking 00.

        if(value?.length > 0 && !value.includes("_") && !moment(value, "DD/MM/YYYY").isValid()){
            if(dayPart === "00"){
                dayPart = "01";
            }
            else{
                dayPart = moment(`${monthPart}/${yearPart}`, "MM/YYYY").daysInMonth();
            }
            if(monthPart === "00"){
                monthPart = "01";
            }
            value = `${dayPart}/${monthPart}/${yearPart}`;
        }
        return {value, selection: newState.selection};
    }
    let beforeMaskedValueChangeForYear = (newState, oldState, userInput) => {
        let {value} = newState;
        if(!props?.skipPartialDateValidation && props?.id){
            document.getElementById(props?.id)?.classList?.remove("validateFocus");
        }
        let yearPart = value;

        value = `${yearPart}`;
        return {value, selection: newState.selection};
    }

    // Check if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <>
            <InputGroup className='animated zoomIn'>
                <InputMask
                    mask={props.view === "decade" ? yearMask : mask}
                    onBlur={e => {
                        if((e.target.value?.length > 0 && e.target.value.includes("_")) && props?.id && !props?.skipPartialDateValidation) {
                            document.getElementById(props?.id)?.classList?.add("validateFocus");
                            document.getElementById(props?.id)?.focus();
                        }
                    }}
                    {...props}
                    formatChars={formatChars}
                    beforeMaskedValueChange={props.view === "decade" ? beforeMaskedValueChangeForYear : beforeMaskedValueChange}>
                </InputMask>

                {!props?.hideCalendarBtn && props.view !== "decade" && <button ref={target}
                    disabled={props?.disabled || props?.readOnly || showCalendar}
                    onClick={() => setShowCalendar(!showCalendar)}
                    className='btn btn-sm btn-outline-secondary m-0 py-0 px-2'
                ><AiOutlineCalendar size={16}/></button>}
            </InputGroup>

            <Overlay target={target.current} show={showCalendar} flip placement={"auto"}>
                {(overlayProps) => (
                    <Tooltip {...overlayProps}>
                        <Calendar
                            inputRef={wrapperRef}
                            // className={`${showCalendar ? "" : "d-none"} position-absolute z-index-3 inset`}
                            value={(!IsEmpty(props?.value) && !props?.value.includes("_") && IsDate(props.value))? moment(props?.value, "DD/MM/YYYY") : new Date()}
                            onChange={val => {
                                props.onChange({target: {value: moment(val).format("DD/MM/YYYY")}});
                                setShowCalendar(false);
                            }}
                            onBlur={(e) => props.onBlur(e)}
                            maxDate={new Date(props?.datemax)}
                            minDate={new Date(props?.datemin)}
                            tileClassName={({ date, view }) => {
                                if(view === 'month' && (date.getDay() === 5 || date.getDay() === 6)) return "color-red"
                                else return "color-black"
                            }}
                        />
                    </Tooltip>
                )}
            </Overlay>

        </>
    );
}