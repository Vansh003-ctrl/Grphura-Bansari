import React, { useState } from "react";
import calender from "../../assets/salesExecutive/report/calander.png";
import "../../style/salesExecutive/report.css"
const Report = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ callStatus: "", comment: "" });

  const todaysCalls = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      company: "Bold text column",
      client: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      reminder: "Bold text column",
    }));

  const pastCalls = Array(5)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      company: "Bold text column",
      client: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      reminder: "Bold text column",
      comment: i === 0 ? "Select" : "Bold text column",
    }));

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowModal(false);
    setFormData({ callStatus: "", comment: "" });
  };

  return (
    <div id="report-container" className="min-h-screen" style={{ backgroundColor: "#ffffffff" }}>
      {/* Report Title */}
      <div style={{ padding: "28px 32px 24px" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "500",
            color: "#333",
            margin: 0,
          }}
        >
          Report
        </h1>
      </div>

      {/* Today's Call List */}
      <div
        style={{
          padding: "32px",
          margin: "0 32px 32px",
          backgroundColor: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "1rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
          // padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#000",
            // marginBottom: "16px",
          }}
        >
          Today's Call List
        </h2>
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "1rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  ></th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Company Name
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Client Name
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Email_id
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Contact no.
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Reminder date
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody>
                {todaysCalls.map((row) => (
                  <tr
                    key={row.id}
                    style={{
                      backgroundColor: "white",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 8px 16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span style={{ color: "#6b7280" }}>⋮</span>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "16px 8px 16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {row.company}
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      {row.client}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      {row.contact}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      {row.reminder}
                    </td>
                    <td style={{ padding: "16px 20px", fontSize: "14px" }}>
                      <button
                        onClick={() => setShowModal(true)}
                        style={{
                          backgroundColor: "#4f46e5",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          padding: "4px 24px 28px 12px",
                          fontSize: "14px",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Past Call List */}
      <div
        style={{
          margin: "0 32px 32px",
          backgroundColor: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "1rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "400",
            color: "#000",
            marginBottom: "16px",
          }}
        >
          Past Call List
        </h2>

        {/* Date Filter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "16px",
            marginRight: "160px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              position: "relative",
              flex: "1",
              minWidth: "200px",
              maxWidth: "400px",
            }}
          >
            <input
              type="text"
              placeholder="Start Date"
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                padding: "0 40px 0 16px",
                fontSize: "20px",
                fontWeight: "500",
                outline: "none",
                backgroundColor: "white",
                border: "3px solid #e5e7eb",
                boxShadow: "0 4px 80px rgba(0, 0, 0, 0.05)",
              }}
            />
            <span
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "18px",
              }}
            >
              <img src={calender} alt="" />
            </span>
          </div>
          <div
            style={{
              position: "relative",
              flex: "1",
              minWidth: "200px",
              maxWidth: "400px",
            }}
          >
            <input
              type="text"
              placeholder="End Date"
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                padding: "0 40px 0 16px",
                fontSize: "20px",
                fontWeight: "500",
                outline: "none",
                backgroundColor: "white",
                border: "3px solid #e5e7eb",
                boxShadow: "0 4px 80px rgba(0, 0, 0, 0.05)",
              }}
            />
            <span
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "18px",
              }}
            >
              <img src={calender} alt="" />
            </span>
          </div>
          <span
            style={{
              padding: "10px 0px 10px 0px",
              //   backgroundColor:"black"
            }}
          >
            <button
              style={{
                // height: "48px",
                padding: "6px 32px",
                backgroundColor: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </span>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb" /* same as Tailwind’s gray-200 */,
            borderRadius: "1rem" /* 16px rounded corners */,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
            padding: "24px",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  ></th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Company Name
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Client Name
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Email_id
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Contact no.
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Reminder date
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Comment
                  </th>
                </tr>
              </thead>
              <tbody>
                {pastCalls.map((row, i) => (
                  <tr
                    key={row.id}
                    style={{
                      backgroundColor: "white",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 8px 16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            color: "#6b7280",
                            margin: "0px 0px 0px 0px",
                          }}
                        >
                          ⋮
                        </span>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "16px 8px 16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {row.company}
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      {row.client}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      {row.contact}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      {row.reminder}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: i === 0 ? "#4f46e5" : "#000",
                        fontWeight: "500",
                      }}
                    >
                      {row.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              maxWidth: "500px",
              width: "90%",
              padding: "32px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#9ca3af",
                lineHeight: "1",
              }}
            >
              ×
            </button>

            <h2
              style={{
                fontSize: "20px",
                color: "#374151",
                textAlign: "center",
                marginBottom: "24px",
                fontWeight: "600",
              }}
            >
              Update Call Details
            </h2>

            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { value: "talk", label: "Talk" },
                  { value: "notTalk", label: "Not Talk" },
                  { value: "delete", label: "Delete Client's Profile" },
                ].map((option) => (
                  <label
                    key={option.value}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      name="callStatus"
                      value={option.value}
                      checked={formData.callStatus === option.value}
                      onChange={(e) =>
                        setFormData({ ...formData, callStatus: e.target.value })
                      }
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Comment
              </label>
              <textarea
                rows="5"
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                placeholder="Enter your comment here..."
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  backgroundColor: "#f9fafb",
                  padding: "12px",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#4f46e5",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "10px 40px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
