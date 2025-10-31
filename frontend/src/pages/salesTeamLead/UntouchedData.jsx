import React from "react";
import clientData from "../../assets/salesTeamLead/untouchedData/clientData.png";
import totalProspectus from "../../assets/salesTeamLead/untouchedData/totalProspect.png";
import totalUntouchedData from "../../assets/salesTeamLead/untouchedData/totalUntouchedData.png";
import call from "../../assets/salesTeamLead/untouchedData/call.png";
import "../../style/salesTeamLead/untouchedData.css";

const UntouchedData = () => {
  const untouchedData = [
    {
      id: 1,
      company: "Bold text column",
      client: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      lastCall: "Bold text column",
      salesExecutive: "Bold text column",
      transferDate: "Select",
    },
    {
      id: 2,
      company: "Bold text column",
      client: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      lastCall: "Bold text column",
      salesExecutive: "Bold text column",
      transferDate: "Bold text column",
    },
    {
      id: 3,
      company: "Bold text column",
      client: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      lastCall: "Bold text column",
      salesExecutive: "Bold text column",
      transferDate: "Bold text column",
    },
    {
      id: 4,
      company: "Bold text column",
      client: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      lastCall: "Bold text column",
      salesExecutive: "Bold text column",
      transferDate: "Bold text column",
    },
    {
      id: 5,
      company: "Bold text column",
      client: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      lastCall: "Bold text column",
      salesExecutive: "Bold text column",
      transferDate: "Bold text column",
    },
    {
      id: 6,
      company: "Bold text column",
      client: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      lastCall: "Bold text column",
      salesExecutive: "Bold text column",
      transferDate: "Bold text column",
    },
  ];

  const statsCards = [
    {
      title: "TOTAL DATA",
      value: "10",
      icon: clientData,
      color: "#2d4fd7",
    },
    {
      title: "TODAY CALLS",
      value: "1600",
      icon: call,
      color: "#19a974",
    },
    {
      title: "TOTAL PROSPECT",
      value: "8000",
      icon: totalProspectus,
      color: "#00a8e8",
    },
    {
      title: "TOTAL UNTOUCHED DATA",
      value: "16",
      icon: totalUntouchedData,
      color: "#f2b705",
    },
  ];

  return (
    <div
      id="untouchedData-container"
      className="container-fluid bg-light min-vh-100"
      style={{
        overflowX: "hidden",
        maxWidth: "100vw",
      }}
    >
      <div className="row g-0">
        {/* Header */}
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-3 pt-4 px-3">
            <h1 className="h3 text-dark fw-semibold m-0">Untouched Data</h1>
          </div>
        </div>

        {/* Filter Section */}
        <div className="col-12 px-3">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <div style={{ minWidth: "250px", flex: "1" }}>
              <select className="form-select">
                <option>Member Name</option>
              </select>
            </div>
            <div style={{ minWidth: "250px", flex: "1" }}>
              <select className="form-select">
                <option>Select Date</option>
              </select>
            </div>
            <div style={{ minWidth: "120px" }}>
              <button
                style={{
                  width: "100%",
                  height: "38px",
                  background: "#4972e8",
                  border: "none",
                  borderRadius: "6px",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="col-12 px-3">
          <div
            style={{
              margin: "16px 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {statsCards.map((card, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(44, 62, 80, 0.07)",
                  padding: "16px 18px",
                  borderLeft: `4px solid ${card.color}`,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: card.color,
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                  }}
                >
                  {card.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "8px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "28px",
                      color: "#7c7979",
                      fontWeight: 500,
                    }}
                  >
                    {card.value}
                  </p>
                  <div
                    style={{
                      background: "#f3f6fa",
                      borderRadius: "8px",
                      padding: "8px",
                      boxShadow: "inset 0 0 0 1px #eef2f7",
                    }}
                  >
                    <img
                      src={card.icon}
                      alt={card.title}
                      style={{ width: "28px", height: "28px" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="col-12 px-3 pb-4">
          <div
            className="card shadow-sm rounded-3 overflow-hidden mt-3"
            style={{ maxWidth: "100%" }}
          >
            <div
              className="table-responsive"
              style={{ overflowX: "auto", width: "100%" }}
            >
              <table className="table m-0 align-middle text-nowrap">
                <thead className="border-bottom">
                  <tr>
                    <th className="small fw-bold p-3">Company Name</th>
                    <th className="small fw-bold p-3">Client Name</th>
                    <th className="small fw-bold p-3">Email ID</th>
                    <th className="small fw-bold p-3">Contact No.</th>
                    <th className="small fw-bold p-3">Last Call</th>
                    <th className="small fw-bold p-3">
                      Sales Executive Name
                    </th>
                    <th className="small fw-bold p-3">Transfer Date</th>
                  </tr>
                </thead>
                <tbody>
                  {untouchedData.map((data) => (
                    <tr key={data.id} className="border-top">
                      <td className="small p-3">{data.company}</td>
                      <td className="small p-3">{data.client}</td>
                      <td className="small p-3">{data.email}</td>
                      <td className="small p-3">{data.contact}</td>
                      <td className="small p-3">{data.lastCall}</td>
                      <td className="small p-3">{data.salesExecutive}</td>
                      <td
                        className={`small p-3 ${
                          data.transferDate === "Select" ? "text-primary" : ""
                        }`}
                      >
                        {data.transferDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UntouchedData;
