import React from 'react';
import PageImg from "../../assets/images/Access_Denied.png";

const AccessDenied = () => {
    return (
        <div className="center-screen animated fadeIn">
            <img alt="Access Denied" className="animated fadeIn" src={PageImg} width='50%'/>
            <h3 className="bg-danger text-white p-1 border border-radius-sm">Access Denied</h3>
        </div>
    );
};

export default AccessDenied;