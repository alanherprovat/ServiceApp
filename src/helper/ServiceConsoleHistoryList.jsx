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
      requestType: "Deposit",
      date: "30.08.24",
      status: "Pending",
    },
    {
      eventKey: 4,
      header: "sadia",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod",
      requestType: "Deposit",
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
                  <p style={{color: "#101828", fontWeight: "600"}}>{item.requestType}</p>
                </div>
                <div>
                  <p className="headerTextStyle">Date</p>
                  <p style={{color: "#101828", fontWeight: "600"}}>{item.date}</p>
                </div>
                <div>
                  <p className="headerTextStyle">Status</p>
                  <p style={{color: item.status=="Pending"? "#153F98" : "#21951E"}}>{item.status}</p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>{item.detail}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
    </>
  );
};

export default ServiceConsoleHistoryList;
