import React from "react";
import "../../style/salesTeamLead/TransferData.css";

const SalesReport = () => {
  const data = [
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
    {
      employeeName: "Bold text column",
      TransferData: "Bold text column",
      date: "Bold text column",
      Transferby: "Bold text column",
      TotalData: "Bold text column",
    },
  ];

  return (
    <div
      id="transferData-container"
      className="p-4"
      style={{ backgroundColor: "#fff" }}
    >
      {/* Top right buttons */}

      {/* Transfer Data Section */}
      <h3 className="fw-bold mb-4 text-secondary">Transfer Data</h3>

      {/* Centered dropdowns and button */}
      <div className="d-flex flex-column mb-5 mx-4">
        {/* Dropdowns Row */}
        {/* Dropdowns and button container */}
        <div
          className="d-flex flex-column mb-5 mx-4"
          style={{ maxWidth: "950px" }}
        >
          {/* Row with dropdowns */}
          <div
            className="d-flex justify-content-between mb-3"
            style={{ gap: "20px" }}
          >
            <select
              className="form-select shadow-sm fw-bold"
              style={{ width: "100%", maxWidth: "450px", height: "50px" }}
            >
              <option>Member Name</option>
              <option>Harry</option>
              <option>Alex</option>
              <option>Smith</option>
            </select>

            <select
              className="form-select shadow-sm fw-bold"
              style={{ width: "100%", maxWidth: "450px", height: "50px" }}
            >
              <option>Transfer Data in No.</option>
              <option>21</option>
              <option>45</option>
              <option>32</option>
            </select>
          </div>

          {/* Button centered below second dropdown */}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary px-5 py-2"
              style={{
                backgroundColor: "#4972e8",
                fontWeight: "600",
                width: "fit-content",
              }}
            >
              Transfer
            </button>
          </div>
        </div>
      </div>

      {/* Transfer Data History */}
      <h3 className="fw-bold mb-4 text-secondary">Transfer Data History</h3>

      <div className="d-flex justify-content-center">
        <div
          className="table-responsive shadow-lg p-4 bg-white rounded"
          style={{
            width: "90%",
            maxWidth: "1100px",
            padding: "0px 20px 0px 80px",
            marginRight: "6.5%",
          }}
        >
          <table className="table table-bordered align-middle text-center text-secondary opacity-75 mb-0">
            <thead className="table-light">
              <tr>
                <th className="fw-bold">Employee Name</th>
                <th className="fw-bold">Transfer Data in No.</th>
                <th className="fw-bold">Date</th>
                <th className="fw-bold">Transfer By</th>
                <th className="fw-bold">Total Data in account</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="fw-semibold">{row.employeeName}</td>
                  <td className="fw-semibold">{row.TransferData}</td>
                  <td className="fw-semibold">{row.date}</td>
                  <td className="fw-semibold">{row.Transferby}</td>
                  <td className="fw-semibold">{row.TotalData}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
