import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IpoClientFinancialInfo} from  '../../../ApiRequests/ipoRequest'
import ipoStore from '../../../store/ipoStore';
import CustomCard from '../../commonComponents/customCard';

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
    <CustomCard>
      <div className="row justify-content-around align-items-center">
        <div className="col text-center">
          <p className="font-weight-bold text-dark">Available Balance</p>
          <p className="font-weight-bold">{Number(ipoClientFinancialInfo?.availableBalance)?.toFixed(2)}</p>
        </div>
        <div className="col text-center">
          <p className="font-weight-bold text-dark">Purchase Power</p>
          <p className="font-weight-bold">{Number(ipoClientFinancialInfo?.purchasePower)?.toFixed(2)}</p>
        </div>
      </div>
    </CustomCard>
  );
};

export default ClientFinancialInfo;
