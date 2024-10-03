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
  
    <div className="row justify-content-around align-items-center">
    <div className="col-6 d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
      <p className="label-text">Available Balance</p>
      <p className="value-text">{Number(ipoClientFinancialInfo?.availableBalance)?.toFixed(2)}</p>
    </div>

      <div className="col-6 d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
        <p className="label-text">Purchase Power</p>
        <p className="value-text">{Number(ipoClientFinancialInfo?.purchasePower)?.toFixed(2)}</p>
      </div>
    </div>

</CustomCard>

  );
};

export default ClientFinancialInfo;
