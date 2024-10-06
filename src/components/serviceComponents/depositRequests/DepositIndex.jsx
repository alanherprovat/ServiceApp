import React, { useState, useRef } from "react";
import CashDeposit from "./CashDeposit";
import MFS from "./MobileFundTransfer";
import FundTransfer from "./FundTransfer";
import { AcitveMFS, ActiveCashDeposit, ActiveFT, ActiveHistory, InActiveCashDeposit, InactiveFT, InActiveHistory, InActiveMFS } from "../../../../config/svgIcons/ServiceIcons";
import DepositHistory from "./DepositHistory";

export default function DepositIndex() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollViewRef = useRef(null);

  const routes = [
    {
      key: "cash-deposit",
      title: "Cash Deposit",
      icon:<InActiveCashDeposit/>,
      activeIcon:<ActiveCashDeposit/>,
      content: () => <CashDeposit />,
    },
    {
      key: "mfs",
      title: "MFS",
      icon:<InActiveMFS/>,
      activeIcon:<AcitveMFS/>,
      content: () => <MFS />,
    },
    {
      key: "fund-transfer",
      title: "Fund Transfer",
      icon:<InactiveFT/>,
      activeIcon:<ActiveFT/>,
      content: () => <FundTransfer />,
    },
    {
        key: "deposit-history",
        title:"History",
        icon:<InActiveHistory/>,
        activeIcon:<ActiveHistory/>,
        content:()=><DepositHistory/>
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
            padding: "8px 16px",
            borderTop: activeTab === index ? "2px solid #FF0008" : "1px solid #D6BDBE",
            backgroundColor: "transparent",
            cursor: "pointer",
            textAlign: "center",
            borderRadius: 0,
            fontFamily: "k2d-bold",
            flex:1,
            // Add shadow styles
            // Smooth transition for the shadow
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
            className="flex-grow-1 d-flex justify-content-center align-items-center"
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
