import Accordion from "react-bootstrap/Accordion";
import "../assets/css/serviceConsoleDashboardStyle.css";

const ServiceConsoleHistoryList = () => {
  const historyList = [
    {
      eventKey: 1,
      header: "sadia",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod",
      requestType: "Deposit",
      date: "30.08.24",
      status: "Pending",
    },
    {
      eventKey: 2,
      header: "sadia",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod",
      requestType: "Deposit",
      date: "30.08.24",
      status: "Completed",
    },
    {
      eventKey: 3,
      header: "sadia",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod",
      requestType: "Withdrawal",
      date: "30.08.24",
      status: "Pending",
    },
    {
      eventKey: 4,
      header: "sadia",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod",
      requestType: "IPO",
      date: "30.08.24",
      status: "Pending",
    },
  ];
  return (
    <>
      <div className="title">
        <p className="text-center">Ongoing Service Request</p>
      </div>
      <div className="accordion-scrollable">
        <Accordion defaultActiveKey="0" flush className="accordionStyle">
          {historyList.map((item, index) => (
            <Accordion.Item eventKey={item.eventKey}>
              <Accordion.Header>
                <div className="d-flex gap-4">
                  <div>
                    <p className="headerTextStyle">Request Type</p>
                    <p style={{ color: "#101828", fontWeight: "600" }}>
                      {item.requestType}
                    </p>
                  </div>
                  <div>
                    <p className="headerTextStyle">Date</p>
                    <p style={{ color: "#101828", fontWeight: "600" }}>
                      {item.date}
                    </p>
                  </div>
                  <div>
                    <p className="headerTextStyle">Status</p>
                    <p
                      style={{
                        color: item.status == "Pending" ? "#153F98" : "#21951E",
                      }}
                    >
                      {item.status}
                    </p>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {item.requestType == "Withdrawal" ? (
                  <>
                    <p><span style={{color: "#101828", fontWeight: "600"}}>Withdrawal Mode: </span>BFTN</p>
                    <p><span style={{color: "#101828", fontWeight: "600"}}>Amount: </span>2000</p>
                  </>
                ) : item.requestType == "Deposit" ? (
                  <>
                    <p><span style={{color: "#101828", fontWeight: "600"}}>Deposit Mode: </span>Cash</p>
                    <p><span style={{color: "#101828", fontWeight: "600"}}>Amount: </span>2000</p>
                  </>
                ) : (
                  <>
                    <p><span style={{color: "#101828", fontWeight: "600"}}>Instrument Name: </span>Techno Drugs Limited</p>
                    <p><span style={{color: "#101828", fontWeight: "600"}}>Application Amount: </span>500</p>
                    <p><span style={{color: "#101828", fontWeight: "600"}}>Service Charge: </span>0</p>
                  </>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default ServiceConsoleHistoryList;
