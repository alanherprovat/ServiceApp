import React from 'react'
import CustomCard from '../../commonComponents/customCard'
import ipoStore from '../../../store/ipoStore';
import '../../../assets/css/ipoRequestStyle/ipoList.css';
import CustomCheckbox from '../../commonComponents/CustomCheckbox';

export default function IpoList({ selectedItems, multipleSelect, handleSelect, setItemArray }) {
    const {
        ipoClientFinancialInfo,
        setIpoClientFinancialInfo,
        onChangeIpoClientFinancialInfo,
        resetIpoClientFinancialInfo
        }=ipoStore();
  return (
         <CustomCard  style={{
            height: '30vh', // Use 'vh' for height instead of Dimensions
            borderRadius: '6px',
            borderWidth: '0.3px',
            borderColor: '#CAC7C9',
            borderStyle: 'solid', // Ensure border is visible
        }}
          >
            <div className="col-container">
                <h5 className="label-text-eligible-ipo">Eligible IPO List</h5>
            </div>

            <div className="ipo-list-container">
                {ipoClientFinancialInfo?.IPOEligableClientList.map((item, index) => (
                    <div key={index} className="ipo-list-row">
                        
                        <div className="col-5 instrument-container">
                            <div className="d-flex align-items-center main-row-content">
                                <span className="security-label">{item?.SecurityCode}</span>
                                {multipleSelect && (
                                    <div className="ms-1">
                                        <CustomCheckbox                                       
                                        checked={selectedItems[index] || false}
                                        onPress={() => handleSelect(index, item)}
                                        onboarding={false}
                                        containerStyle='checkbox-container'
                                        // textStyle='checkbox-textStyle'
                                    />
                                    </div>
                                )}
                            </div>
                            <span className="instrument-name">({item?.InstrumentName})</span>
                        </div>


                        <div className="col-4 date-container">
                            <span className="subs-date-label">Subscription Date</span>
                            <span className="date-text">{item?.SubscriptionOpeningDate}</span>
                        </div>


                        <div className="col-3 button-container">
                            <button
                                className={`apply-button ${multipleSelect ? 'disabled-button' : ''}`}
                                onClick={() => {
                                    console.log('Button Pressed', item);
                                    setItemArray([item]);
                                }}
                                disabled={multipleSelect}
                            >
                                Apply
                            </button>
                        </div>

                    </div>
                ))}
            </div>


         </CustomCard>
    )
}
