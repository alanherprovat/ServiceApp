import React, { useState, useRef } from "react";
import ChequeWithdrawal from "./ChequeWithdrawal";
import OnlineWithdrawal from "./OnlineWithdrawal";
import WithdrawalHistory from "./WithdrawalHistory";
import { InactiveBFTNIcon, ActiveBFTNIcon, InactiveRTGSIcon, ActiveRTGSIcon, InactiveChequeIcon, ActiveChequeIcon, InActiveHistory, ActiveHistory } from "../../../../config/svgIcons/ServiceIcons";

const WithdrawalIndex = () => {
    const [activeTab, setActiveTab] = useState(0);
    const scrollViewRef = useRef(null);
  
    const routes = [
      {
        key: "bftn",
        title: "BFTN",
        icon: <InactiveBFTNIcon />,
        activeIcon: <ActiveBFTNIcon />,
        content: () => <OnlineWithdrawal />,
      },
      {
        key: "rtgs",
        title: "RTGS",
        icon:<InactiveRTGSIcon />,
        activeIcon:<ActiveRTGSIcon />,
        content: () => <OnlineWithdrawal />,
      },
      {
        key: "cheque",
        title: "Cheque",
        icon:<InactiveChequeIcon />,
        activeIcon:<ActiveChequeIcon />,
        content: () => <ChequeWithdrawal />,
      },
      {
          key: "withdrawal-history",
          title:"History",
          icon:<InActiveHistory />,
          activeIcon:<ActiveHistory />,
          content:()=><WithdrawalHistory />
      }
    ];
  
    const scrollToTab = (index) => {
        setActiveTab(index);
    
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({
            left: index * window.innerWidth, // Scroll horizontally to the tab
            behavior: "smooth",
          });
        }
      };
    
      // Handle scroll events to update the active tab
      const handleScroll = () => {
        if (scrollViewRef.current) {
          const scrollLeft = scrollViewRef.current.scrollLeft;
          const newIndex = Math.round(scrollLeft / window.innerWidth); // Calculate the new active tab
          setActiveTab(newIndex);
        }
      };
  
    const renderTabButton = (item, index) => (
          <button
            key={item.key}
            onClick={() => scrollToTab(index)}
            className={`btn ${activeTab === index ? "text-danger" : "text-muted"}`}
            style={{
              outline: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: "none",
              padding: "16px",
              borderTop: activeTab === index ? "2px solid #FF0008" : "2px solid #FFF",
              backgroundColor: "transparent",
              cursor: "pointer",
              textAlign: "center",
              borderRadius: 0,
              fontFamily: "k2d-bold",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              fontSize: "10px"
            }}
          >
            <div>
              {activeTab === index ? item.activeIcon : item.icon}
            </div>
            <div>
              {item.title}
            </div>
          </button>
    );

    return ( 
        <div className="container-fluid d-flex flex-column vh-100 w-100 p-0"
    style={{
        flex:1
    }}
    >
      {/* Swipeable Content Views */}
      <div
        ref={scrollViewRef}
        className="flex-grow-1 d-flex overflow-auto"
        style={{
          scrollSnapType: "x mandatory", // Ensure smooth snapping
          width: "100%",
          overflowX: "scroll"
        }}
        onScroll={handleScroll} // Attach the scroll handler
      >
        {routes.map((route, index) => (
          <div
            key={route.key}
            className="flex-grow-1 d-flex justify-content-center mx-3"
            style={{
              minWidth: "100%", // Ensure each section takes full width
              scrollSnapAlign: "start", // Enable smooth snapping
            }}
          >
            {route.content()}
          </div>
        ))}
      </div>

      {/* Bottom Tab Bar */}
      <div
        className="d-flex justify-content-around bg-white position-fixed"
        style={{
            flex:1,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Shadow for active tab // No shadow for inactive tabs
            transition: "box-shadow 0.3s ease",
            width:"100%",
            left: 0,
            right: 0,
            bottom:0
        }}
      >
        {routes.map((route, index) => renderTabButton(route, index))}
      </div>
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari, and Opera */
        .flex-grow-1::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for all browsers */
        .flex-grow-1 {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
     );
}
 
export default WithdrawalIndex;