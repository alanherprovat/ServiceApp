import React from 'react';

const InputFile = (props) => {
    console.log(props?.fileName);
    return (
        <>
            {props?.fileName ?
                <label
                    title={props?.fileName}
                    className='form-control form-control-sm m-0 ellipsis'
                >{props?.fileName}</label> :
                <input
                    type = "file"
                    {...props}
                />
            }
        </>
    );
};

export default InputFile;