import React, {Fragment, useEffect, useMemo, useState} from 'react';
import RNTable from '../../../helper/ReactTable'
import RnTableTest from '../../../helper/RnTableTest';
import { FormatYMD2DMY } from '../../../helper/Config';
import serviceRequestStore from "../../../store/serviceRequestStore";
import {GetServiceListRequest} from "../../../ApiRequests/ServiceRequests"
import {FaListUl} from "react-icons/fa";
import CustomCard from '../../commonComponents/customCard';
const WithdrawalHistory = () => {
    const {serviceRequestsList, setServiceRequestsList} = serviceRequestStore();
    const filterList=[]
    // Custom styling similar to native
    const styles = {
      accountSubTitle: {
        fontFamily: 'K2D-Regular',
        fontSize: '12px',
        fontWeight: '400',
      },
      accountButton: (status) => ({
        backgroundColor:
          status === 'Pending'
            ? '#ffd500'
            : status === 'Approved'
            ? '##24834AF2'
            : '#6c757d',
        borderRadius: '5px',
        padding: '2px 5px', // Reduced padding: 2px vertical, 5px horizontal
        marginRight: '10px',
        textAlign: 'center',
      })
  ,    
      accountButtonText: {
        fontSize: '12px',
        color: '#000000',
      },
    };
  
    useEffect(() => {
      (async () => {
        let result = await GetServiceListRequest();
        console.log(result)
        setServiceRequestsList(result);
      })();
     
    }, []);


  const ColData = useMemo(() => [
    {
        Header: "Request Type",
        accessor: "Request_type",
        align: 'left'
    },
    {
        Header: "Date",
        accessor: "MakeDate",
        align: 'center',
        cell: (value) =>  <span style={styles.accountSubTitle}>{FormatYMD2DMY(value, "YYYY-MM-DD")}</span>
    },
    
    {
        Header: "Status",
        accessor: "CurrStatus",
        align: 'right',
        cell: (value) => (
            <div style={styles.accountButton(value)}>
              {value === 'Pending' ? (
                <span style={styles.accountButtonText}>Pending</span>
              ) : value === 'waiting' ? (
                <button className="accountButtonText">Confirm</button>
              ) : (
                <span style={styles.accountButtonText}>{value}</span>
              )}
            </div>
          ),
    },
    {
        Header: "Withdrawal Mode",
        accessor: "Mode",
        align: 'full',
        collapsable: true,
        
    },
    {
        Header: "Withdraw Amount",
        accessor: "Amount",
        align: 'full',
        collapsable: true,
        
    },

    {
        Header: "Cheque Receiver",
        accessor: "ChequeReceiver",
        align: 'full',
        collapsable: true,
        
    },
    {
        Header: "Cheque Receiver Name",
        accessor: "ChequeReceiverName",
        align: 'full',
        collapsable: true,
        
    },
   
    

], [serviceRequestsList]);
const RowData = useMemo(() => serviceRequestsList?.WithdrawalList, [serviceRequestsList?.WithdrawalList]);
  
  
    
    return (
      <div
      style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%" }}
      >
          <CustomCard  style={{height: '70vh'}}>
  
          <div className='d-flex justify-content-center w-100' style={{ borderBottom: '1px solid #526D82BF'}}>
              <p style={{ fontSize: '20px', fontWeight: '600', color: '#000000' }}>
                  Ongoing Withdrawal Request
              </p>
          </div>

          {RowData && ColData && (
          // <RNTable rows={RowData} columns={ColData} />
          <RnTableTest rows={RowData} columns={ColData} />
                )
            }

          </CustomCard>
      </div>
     );
}
 
export default WithdrawalHistory;