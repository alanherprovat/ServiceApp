import React, { useState, useRef } from "react";
import ContactInfo from "./ContactInfo";
import TinInfo from "./TinInfo";
import {
  ActiveAddressIcon,
  BankActiveIcon,
  BankInactiveIcon,
  ContactActiveIcon,
  ContactInActiveIcon,
  InActiveAddressIcon,
  SignatureActiveIcon,
  SignatureInActiveIcon,
  TinActiveIcon,
  TinInactiveIcon,
  ActiveHistory,
  InActiveHistory,
} from "../../../../config/svgIcons/ServiceIcons";
import History from "./history";
import AddressInfo from "./AddressInfo";
import BankInfo from "./BankInfo";
import SignatureInfo from "./SignatureInfo";
function ChangeRequestIndex() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollViewRef = useRef(null);

  const routes = [
    {
      key: "address-info",
      title: "Address",
      icon: <InActiveAddressIcon />,
      activeIcon: <ActiveAddressIcon />,
      content: () => <AddressInfo />,
    },
    {
      key: "bank-info",
      title: "Bank",
      icon: <BankInactiveIcon />,
      activeIcon: <BankActiveIcon />,
      content: () => <BankInfo />,
    },
    {
      key: "tin-info",
      title: "TIN",
      icon: <TinInactiveIcon />,
      activeIcon: <TinActiveIcon />,
      content: () => <TinInfo />,
    },
    {
      key: "contact-info",
      title: "Contact",
      icon: <ContactInActiveIcon />,
      activeIcon: <ContactActiveIcon />,
      content: () => <ContactInfo />,
    },
    {
      key: "signature-info",
      title: "Signature",
      icon: <SignatureInActiveIcon />,
      activeIcon: <SignatureActiveIcon />,
      content: () => <SignatureInfo />,
    },
    {
      key: "history-info",
      title: "History",
      icon: <InActiveHistory />,
      activeIcon: <ActiveHistory />,
      content: () => <History />,
    },
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
      className={`btn btn-white ${
        activeTab === index ? "text-danger" : "text-muted"
      }`}
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
        fontSize: "10px",
      }}
    >
      <div>{activeTab === index ? item.activeIcon : item.icon}</div>
      <text
        style={{
          fontSize: 12,
        }}
      >
        {item.title}
      </text>
    </button>
  );

  return (
    <div
      className="container-fluid d-flex flex-column vh-100 w-100 p-0"
      style={{
        flex: 1,
      }}
    >
      {/* Swipeable Content Views */}
      <div
        ref={scrollViewRef}
        className="flex-grow-1 d-flex overflow-auto"
        style={{
          scrollSnapType: "x mandatory", // Ensure smooth snapping
          width: "100%",
          overflowX: "scroll",
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
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Shadow for active tab // No shadow for inactive tabs
          transition: "box-shadow 0.3s ease",
          width: "100%",
          left: 0,
          right: 0,
          bottom: 0,
          overflowX: "auto",
        }}
      >
        {routes.map((route, index) => renderTabButton(route, index))}
      </div>
    </div>
  );
}

export default ChangeRequestIndex;
