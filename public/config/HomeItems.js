
import { AlertIcon, ChangeRequestIcon, DepositIcon, EduTechIcons, IpoIcon, ResearchIcon, SalesIcon, ServiceIcon, ThematicIcon, TradeIcon, WithDrawIcon } from "./svgIcons/SvgItems"

// import Icon from "react-native-vector-icons/Ionicons";
const homeItems = [
    {
        "title":"Trade",
        "icon":<TradeIcon />
    },
    {
        "title":"Service",
        // "icon":<ServiceIcons/>,
        "icon":<ServiceIcon />,
        "routes":"(home)/(service)"
    },
    {
        "title":"Research",
        "icon":<ResearchIcon />
    },
    {
        "title":"Edu-tech",
        "icon":<EduTechIcons />
    },
    {
        "title":"Alert",
        "icon":<AlertIcon />
    },
    {
        "title":"Sales Platform",
        "icon":<SalesIcon />
    },
    {
        "title":"Thematic Investment",
        "icon":<ThematicIcon />
    }
]
export default homeItems

export const quickLinks =[
    {
        "title":"Deposit Request",
        "icon":<DepositIcon />,
        "routes":"(deposit)"
    },
    {
        "title":"Withdraw Request",
        "icon":<WithDrawIcon />,
        "routes": "(withdrawal)"
    },
    {
        "title":"IPO Request",
        "icon":<IpoIcon />,
        "routes":"(ipo-request)"
    },
    {
        "title":"Change Request",
        "icon":<ChangeRequestIcon />,
        "routes":"(change-request)"
    }
]