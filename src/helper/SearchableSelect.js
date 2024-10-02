import React from 'react'
import Select from 'react-select'


const SearchableSelect = (props) => {
    return(
        <Select
            {...props}
            isDisabled={props.disabled}
            value={props.options.find(x => x.value.toString() === props.value.toString())}
            maxMenuHeight={250}
            isClearable
            styles={customStyles}
            options={props.options}
            menuShouldBlockScroll={false}
            classNames={{control: () => props.controlClassName}}
        />
    )
};

export default SearchableSelect;

const customStyles = {
    container: (provided, state) => ({
        ...provided,
        padding: '0',
        border: '0',
        fontSize: '0.75rem',
    }),
    control: (provided, {isFocused}) => ({
        ...provided,
        borderRadius: '0.5rem',
        paddingLeft: '12px',
        paddingRight: '11px',
        minHeight: '32px',
        color: '#495057',
        fontFamily: 'PoppinsMedium, serif !important',
        transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
        '&:hover': {
            borderColor: 'none',
            outline: '0 !important',
            boxShadow: 'none',
        },
        borderColor: isFocused ? 'rgba(35, 107, 61, 0.38)' : '#d2d6da',
        outline: '0',
        boxShadow: isFocused ? '0 0 0 2px rgba(35, 107, 61, 0.38)' : 'none'
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        marginTop: '0',
        marginLeft: '0px',
        padding: '0',
        border: '0',
    }),
    input: (provided) => ({
        ...provided,
        padding: '0',
        margin: '0',
    }),
    dropdownIndicator: (provided, {hasValue}) => ({
        ...provided,
        marginTop: '0',
        padding: '0',
        border: '0',
        width: '18px',
        color: 'dark-gray',
        display: hasValue ? 'none' : 'block'
    }),
    clearIndicator: (provided, state) => ({
        ...provided,
        marginTop: '0',
        padding: '0',
        border: '0',
        width: '16px',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        paddingRight: '0',
        border: '0',
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    menu: (provided) => ({
        ...provided,
        margin: '0',
        padding: '0',
        border: '1px solid dark-gray',
        borderRadius: '0',
        fontFamily: 'PoppinsMedium, serif !important',
        width: 'max-content',
        maxWidth: '250%',
        zIndex: 9999
    }),
    menuList: () => ({
        margin: '0',
        padding: '0',
        maxHeight: '300px',
        overflow: 'auto',
    }),
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    option: (provided, { isFocused, isSelected }) => ({
        ...provided,
        margin: '0',
        padding: '0px 8px',
        textWrap: 'no-wrap',
        minWidth : '300px',
        color: isSelected ? '#ffffff' : '#252525',
        "&:hover": {
            backgroundColor: isSelected ? "blue" : isFocused ? "#1d74fc" : undefined,
            color: 'white'
        }
    })
}
