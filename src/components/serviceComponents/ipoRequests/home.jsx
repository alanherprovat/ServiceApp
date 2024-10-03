import React,{useState,useEffect,useFonts} from 'react'
import ClientFinancialInfo from './clientFinancialInfo'
import IpoList from './ipoList';
import AppliedIPO from './appliedIPO';
import { IpoRequest } from '../../../ApiRequests/ipoRequest';
import CustomCheckbox from '../../commonComponents/CustomCheckbox'
import '../../../assets/css/commonStyle/checkBox.css';
import '../../../assets/css/ipoRequestStyle/ipoStyle.css';
import IpoAppFormSvg from '../../../assets/images/ipoAppFormSvg';
import SubmitButton from '../../commonComponents/SubmitButton';

export default function home() {

  const [selected, setSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const[itemArray,setItemArray]=useState([])
  const [singleItem,setSingleItem]=useState([]);
  const [multipleSelect, setMultipleSelect] = useState(false);

  // const [fontsLoaded, fontError] = useFonts({
  //   "k2d-regular": require("../../../../../assets/font/K2D-Regular.ttf"),
  //   "k2d-bold": require("../../../../../assets/font/K2D-Bold.ttf"),
  //   "k2d-medium": require("../../../../../assets/font/K2D-Medium.ttf"),
  // });


useEffect(()=>{
  setItemArray([])
  setSelectedItems([])
},[!multipleSelect])



const removeItem = (item) => {
  console.log("removed Item",item)
  setItemArray(prevArray => {
    if (Array.isArray(prevArray)) {
      // Filter by 'id' to remove the correct item
      const updatedArray = prevArray.filter(arrayItem => arrayItem.IPOInstrumentID !== item.IPOInstrumentID);
      console.log("updated Array", updatedArray);
      return updatedArray;
    } else {
      console.error('itemArray is not an array');
      return prevArray;  // Return previous array unchanged if it's not an array
    }
  });
};


const handleSelect = (index, item) => {
  const updatedSelection = [...selectedItems];
  updatedSelection[index] = !updatedSelection[index];

  if (!updatedSelection[index]) {
    // Remove item if it's unselected
    removeItem(item);
  } else {
    // Add item if it's selected
    setItemArray(prevArray => {
      const isDuplicate = prevArray.some(arrayItem => arrayItem.SecurityCode === item.SecurityCode);
      
      if (!isDuplicate) {
        const newItem = { ...item, id: Date.now() }; // Add a unique ID
        return [...prevArray, item];
      }
      return prevArray;
    });
  }

  setSelectedItems(updatedSelection);
};


const onSubmit = async()=>{

  const ipoRequest = itemArray.map(item => ({
    instrumentID: item?.InstrumentID, 
    ipoInstrumentID: item?.IPOInstrumentID,
    applicationAmount: item?.MinApplicationAmount,
  }));
  console.log("ipoRequests",ipoRequest)
  try {
    let response = await IpoRequest(ipoRequest)
    console.log('response in front',response)
  } catch (error) {
    console.log(error)
  }

}

  return (
    <>
    <ClientFinancialInfo/>
    <IpoList
      selectedItems={selectedItems} 
      multipleSelect={multipleSelect} 
      handleSelect={handleSelect} 
      setItemArray={setItemArray} 
    />

    <CustomCheckbox
        label={"Select Multiple"}
        checked={multipleSelect}
        onPress={() => setMultipleSelect(!multipleSelect)}
        onboarding={false}
        containerStyle='checkbox-container'
        textStyle='checkbox-textStyle'
    />

    <div className="application-form-header">
      <h5 className="application-Header-label-text">Application Form</h5>
    </div>

    {itemArray?.length === 0 && (
      <div className="ipo-container d-flex flex-column justify-content-center align-items-center mx-3 mt-3 py-2">
        <IpoAppFormSvg /> 
        <div className="d-flex flex-column justify-content-center align-items-center mx-3 mt-3 py-2">
          <p>Currently No IPO has been Selected.</p>
          <p className="mt-2">Select IPO to get form!</p>
        </div>
      </div>
    )}
     
     { itemArray?.length > 0 && 
    (
     <AppliedIPO itemArray={itemArray} />
    )}
        

    <div
     className='flex-column px-1.5 my-2'
     style={{
      display:"flex",
      justifyContent:"center",
     }}
     >
     <SubmitButton label="Submit" onSubmit={onSubmit}/>
     </div>

    </>
  
  )
}
