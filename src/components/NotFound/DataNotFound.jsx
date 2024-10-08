import React from 'react';
import PageImg from "../../assets/images/ipoAppFormSvg";
const DataNotFound = ({message = "No Result Found!"}) => {
    return (
        <div className="center-screen animated fadeIn">
            <PageImg/>
        </div>
    );
};

export default DataNotFound;