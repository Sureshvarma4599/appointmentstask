import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../../database/db";
import "./dashboard.css";
export default function Dashboard() {
  const [data, setData] = useState(Data);
  const navigate = useNavigate();
  const viewDoctors = (e) => {
    navigate("/doctors", { state: e });
  };
  return (
    <div>
      <h1>Appointments Dashboard</h1>
      <div className="card-body">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="card" key={index} onClick={() => viewDoctors(item)}>
              <h2>{item.hospital}</h2>
              <p>{item.address}</p>
            </div>
          ))
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
