import React, {useEffect, useState} from 'react';
import {GetOnboardingAuditLogDetailsRequest, GetOnboardingAuditLogListRequest} from "../APIRequest/CommonRequest";
import moment from "moment/moment";
import {Modal} from "react-bootstrap";
import {useSelector} from "react-redux";

const OnboardingAuditLog = ({showAuditLog, setShowAuditLog, indexId, id}) => {
    const auditLogList = useSelector((state) => state.auditLogInformation.auditLogList);
    const [auditLogByGroup, setAuditLogByGroup] = useState({});
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        (async () => indexId && await GetOnboardingAuditLogListRequest(indexId, id))()
    }, [indexId])

    useEffect(() => {
        (async () => {
            if(auditLogList?.length > 0){
                let logDetails = await GetOnboardingAuditLogDetailsRequest(auditLogList[selectedIndex]?.UpdateLogID || 0);
                if (logDetails?.length > 0) {
                    let groups = logDetails.reduce((groups, item) => {
                        let group = (groups[item?.TableDisplayName] || []);
                        group.push(item);
                        groups[item?.TableDisplayName] = group;
                        return groups;
                    }, {});
                    await setAuditLogByGroup(groups);
                }
            }
        })()
    }, [auditLogList]);

    const handleSelectRowData = (event, index) => {
        let myElement = document.getElementsByClassName('table-data');
        Array.from(myElement).map((data) =>
            data.classList.remove('table-selected')
        );

        event.currentTarget.classList.contains('table-selected')
            ? event.currentTarget.classList.remove('table-selected')
            : event.currentTarget.classList.add('table-selected');

        (async () => {
            let logDetails = await GetOnboardingAuditLogDetailsRequest(auditLogList[index]?.UpdateLogID || 0);
            if (logDetails?.length > 0) {
                let groups = logDetails.reduce((groups, item) => {
                    let group = (groups[item?.TableDisplayName] || []);
                    group.push(item);
                    groups[item?.TableDisplayName] = group;
                    return groups;
                }, {});
                await setAuditLogByGroup(groups);
            } else {
                setAuditLogByGroup(null);
            }
        })();
        setSelectedIndex(index);
    };

    const modalAuditLogBody =
        <div className="row p-0 m-0 gx-2">
            <div className="col-sm-3 p-0">
                <div className="max-height-100vh-230p overflow-auto table-scrollable-thin animated zoomIn">
                    <table className="table table-sm table-hover tableFixHead table-responsive mb-1 shadow-xs">
                        <thead className="thead-dark">
                        <tr>
                            <th className="text-wrap p-1 text-center" scope="col">SL</th>
                            <th className=" p-1" scope="col">Reference No</th>
                        </tr>
                        </thead>
                        <tbody>
                        {auditLogList.length > 0 && auditLogList.map((log, idx) =>
                            <tr onClick={(e) => handleSelectRowData(e, idx)} key={idx}
                                className={`table-data cursor-pointer ${selectedIndex === idx && 'table-selected'}`}>
                                <td className="text-wrap px-1 text-center">{log?.MODNo}</td>
                                <td>{log?.UpdReferenceNo}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-sm-9 p-0 ps-2 animated zoomIn">
                <table className="table table-sm table-borderless border border-1 p-0 m-0 mb-2 shadow-xs">
                    <tbody>
                    <tr>
                        <td className="text-wrap max-width-300 text-xs">Maker: <span
                            className="font-weight-lighter text-primary">{auditLogList[selectedIndex]?.Maker}</span>
                        </td>
                        <td className="text-wrap max-width-200 text-xs">Approver: <span
                            className="font-weight-lighter text-primary">{auditLogList[selectedIndex]?.Approver}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-wrap max-width-100 text-xs">Make Date: <span
                            className="font-weight-lighter text-primary">{auditLogList[selectedIndex]?.MakeDate && moment(auditLogList[selectedIndex]?.MakeDate).format("DD MMM, YYYY hh:mm A")}</span>
                        </td>
                        <td className="text-wrap max-width-100 text-xs">Approve Date: <span
                            className="font-weight-lighter text-primary">{auditLogList[selectedIndex]?.ApprovalDate && moment(auditLogList[selectedIndex]?.ApprovalDate).format("DD MMM, YYYY hh:mm A")}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="max-height-100vh-280p overflow-auto table-scrollable-thin animated zoomIn shadow-xs">
                    <table className="table table-sm table-bordered tableFixHead p-0 m-0 table-responsive">
                        <thead className="bg-white">
                            <tr>
                                <th className="text-wrap align-middle px-2 py-1 text-center" scope="col">SL</th>
                                <th className="text-wrap align-middle px-2 py-1" scope="col">Field Name</th>
                                <th className="text-wrap align-middle px-2 py-1" scope="col">Previous Data</th>
                                <th className="text-wrap align-middle px-2 py-1" scope="col">Updated Data</th>
                            </tr>
                        </thead>
                        <tbody>
                        {auditLogByGroup && Object.keys(auditLogByGroup).map((key, index) => {
                            return (
                                <>
                                    <tr>
                                        <td className="px-2 text-sm text-primary text-bold bg-gray-100" colSpan={4}>{key}</td>
                                    </tr>
                                    {auditLogByGroup[key]?.length > 0 && auditLogByGroup[key].map((log, idx) =>
                                        <tr key={idx}>
                                            <td className="text-wrap text-sm max-width-100 text-center">{idx + 1}</td>
                                            <td className="text-wrap text-sm max-width-200 ">{log?.ColumnDisplayName}</td>
                                            <td className="text-wrap text-sm max-width-200 ">{log?.PrevContent}</td>
                                            <td className="text-wrap text-sm max-width-200 ">{log?.UpdatedContent}</td>
                                        </tr>
                                    )}
                                </>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>;
    return (
         <Modal dialogClassName="animated zoomIn" backdrop="static" keyboard={false} show={showAuditLog} onHide={() => setShowAuditLog(false)} size='xl'>
            <Modal.Header closeButton>
                <Modal.Title>Approval Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalAuditLogBody}</Modal.Body>
            <Modal.Footer>
                <button className="btn btn-sm btn-outline-dark m-0" onClick={() => setShowAuditLog(false)}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default OnboardingAuditLog;