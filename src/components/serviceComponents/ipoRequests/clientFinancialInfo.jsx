import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IpoClientFinancialInfo} from  '../../../ApiRequests/ipoRequest'
import ipoStore from '../../../store/ipoStore';

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
  }, [ipoClientFinancialInfo]);

  return (
    <div className="card p-3 mb-3" style={{ borderColor: '#A9B8CEB2', borderWidth: '0.8px', ...style }}>
      <div className="row justify-content-around align-items-center">
        <div className="col text-center">
          <p className="font-weight-bold text-primary">Available Balance</p>
          <p className="font-weight-bold">{Number(ipoClientFinancialInfo?.availableBalance)?.toFixed(2)}</p>
        </div>
        <div className="col text-center">
          <p className="font-weight-bold text-primary">Purchase Power</p>
          <p className="font-weight-bold">{Number(ipoClientFinancialInfo?.purchasePower)?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientFinancialInfo;
