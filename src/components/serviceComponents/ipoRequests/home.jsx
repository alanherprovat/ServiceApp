import React,{useState,useEffect} from 'react'
import ClientFinancialInfo from './clientFinancialInfo'
import CustomCheckbox from '../../commonComponents/CustomCheckbox'
import '../../../assets/css/commonStyle/checkBox.css';

export default function home() {
  const [multipleSelect, setMultipleSelect] = useState(false);
  return (
    <>
      <div>home page IPO</div>
      <div>ClientFinancialInfo</div>
      <ClientFinancialInfo/>
      <CustomCheckbox
        label={"Select Multiple"}
        checked={multipleSelect}
        onPress={() => setMultipleSelect(!multipleSelect)}
        onboarding={false}
        // containerStyle={{
        //       backgroundColor: "transparent",
        //       padding: 0,
        //       margin: 0,
        //       borderWidth: 0,
        //     }}
        // textStyle={ {
        //       color: '#152035B2', // Convert `background` to `backgroundColor`
        //       fontFamily: 'Inter', // Font family
        //       fontSize: 12, // Font size in px
        //       fontWeight: '600', // Font weight
        //       lineHeight: 12.1, // Line height
        //       letterSpacing: 0.02, // Letter spacing (in em units will convert to the same float value)
        //       textAlign: 'left', // Text alignment
        //       }
        //       }
        containerStyle='checkbox-container'
        textStyle='checkbox-textStyle'
      />
        
    </>
  
  )
}
