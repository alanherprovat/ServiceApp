import React, { useEffect } from 'react';

import {IpoClientFinancialInfo} from  '../../../ApiRequests/ipoRequest'
import ipoStore from '../../../store/ipoStore';
import CustomCard from '../../commonComponents/customCard';
import  '../../../assets/css/ipoRequestStyle/ipoStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ClientFinancialInfo = ({ style }) => {
  const {
    ipoClientFinancialInfo,
    setIpoClientFinancialInfo,
  } = ipoStore();

  useEffect(() => {
    (async () => {
      const res = await IpoClientFinancialInfo();
      setIpoClientFinancialInfo(res);
    })();
  }, []);

  return (
    <CustomCard>
  
  <div className="d-flex flex-row justify-content-around">
  <div className="col-6 d-flex flex-column justify-content-center align-items-center">
    <p className="label-text-client-FinData" style={{ margin: 0 }}>Available Balance</p>
    <p className="value-text-client-FinData" style={{ margin: 0 }}>{Number(ipoClientFinancialInfo?.availableBalance)?.toFixed(2)}</p>
  </div>

  <div className="col-6 d-flex flex-column justify-content-center align-items-center">
    <p className="label-text-client-FinData" style={{ margin: 0 }}>Purchase Power</p>
    <p className="value-text-client-FinData" style={{ margin: 0 }}>{Number(ipoClientFinancialInfo?.purchasePower)?.toFixed(2)}</p>
  </div>
</div>



</CustomCard>

  );
};

export default ClientFinancialInfo;
