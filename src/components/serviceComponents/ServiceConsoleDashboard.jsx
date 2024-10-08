import React,{useEffect,useMemo, useState} from "react";
import { FormatYMD2DMY } from '../../helper/Config';
import {
  DepositRequestIcon,
  WithdrawalRequestIcon,
  IpoRequestIcon,
  ChangeRequestIcon,
} from "../../../config/svgIcons/ServiceConsoleIcons.jsx";
import "../../assets/css/serviceConsoleDashboardStyle.css";
import ServiceConsoleHistoryList from "../../helper/ServiceConsoleHistoryList.jsx";
import { Link } from "react-router-dom";
import CustomCard from "../commonComponents/customCard.jsx";
import RnTableTest from "../../helper/RnTableTest.jsx";
import serviceRequestStore from "../../store/serviceRequestStore";
import {GetServiceListRequest} from "../../ApiRequests/ServiceRequests"

const ServiceConsoleDashboard = () => {
  const {serviceRequestsList, setServiceRequestsList} = serviceRequestStore();
  const [allServiceList,setAllServiceList]=useState([]);
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
          ? '#24834AF2'
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
    const fetchData = async () => {
      try {
        const result = await GetServiceListRequest();
        console.log("result", result);
        
        // Combine the lists into one array
        const combinedList = [
          ...result?.WithdrawalList,
          ...result?.DepositList,
          ...result?.IPOList,
          ...result?.ChangeReq,
        ];
  
        // Transform the data before setting it to state
        const transformedData = combinedList.map((item) => {
          return {
            Request_type: item.Request_type || item.RequestType || '',
            MakeDate: item.MakeDate || item.ApplicationDate || '',
            CurrStatus: item.CurrStatus || item.Status || '',
            ...item,
          };
        });
  
        setAllServiceList(transformedData); // Update the transformed data
        setServiceRequestsList(result); // Set the original service requests
      } catch (error) {
        console.error("Error fetching service list:", error);
      }
    };
  
    fetchData();
  }, []); // The empty dependency array ensures this useEffect runs only once
  

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
      Header: 'Status',
      accessor: 'CurrStatus',
      align: 'right',
      cell: (value) => (
        <div style={styles.accountButton(value)}>
          {value === 'Pending' ? (
            <span style={styles.accountButtonText}>Pending</span>
          ) : value === 'WaitingForConfirmation' ? (
            <button className="btn btn-link p-0">Confirm</button>
          ) : (
            <span style={styles.accountButtonText}>{value}</span>
          )}
        </div>
      ),
    },
    {
        Header: "Instrument Name",
        accessor: "InstrumentName",
        align: 'full',
        collapsable: true,
        
    },
    {
        Header: "Application Amount",
        accessor: "ApplicationAmount",
        align: 'full',
        collapsable: true,
        
    },
    {
        Header: "Service Charge",
        accessor: "ServiceCharge",
        align: 'full',
        collapsable: true,
        
    },

    {
        Header: "Total Application Amount",
        accessor: "TotalApplicationAmount",
        align: 'full',
        collapsable: true,
        
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
  {
    Header: "Updated Information",
    accessor: "UpdatedData",
    align: 'full',
    collapsable: true,
    
},

], [allServiceList]);
const RowData = useMemo(() => allServiceList, [allServiceList]);

  return (
    <>
      <div className="container mx-auto mt-3" style={{padding: '1rem'}}>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <div className="d-flex justify-content-center align-items-center gap-2 col-12">
            <div className="serviceSection w-50">
              <Link to="/depositRequest" style={{textDecoration: "none", color: "inherit"}}>
              <DepositRequestIcon />
              <p>Deposit Request</p>
              </Link>
            </div>

            <div className="serviceSection w-50">
              <Link to="/withdrawalRequest" style={{textDecoration: "none", color: "inherit"}}>
                <WithdrawalRequestIcon />
                <p>Withdrawal Request</p>
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2 col-12">
            <div className="serviceSection w-50">
              <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
              <IpoRequestIcon />
              <p>IPO Request</p>
              </Link>
            </div>

            <div className="serviceSection w-50">
              <Link to="/changeRequest" style={{textDecoration: "none", color: "inherit"}}>
              <ChangeRequestIcon />
              <p>Change Request</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CustomCard  style={{height: '50vh'}}>
      <div className='d-flex justify-content-center w-100' style={{ borderBottom: '1px solid #526D82BF'}}>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#000000' }}>
              Ongoing service Requests
          </p>
      </div>
      {(ColData && RowData) && (
        <RnTableTest 
          rows={RowData} 
          columns={ColData} 
        />
      )}
      </CustomCard>

    </>

  );
};

export default ServiceConsoleDashboard;
