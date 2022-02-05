import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./appointments.css";
export default function Appointments() {
  const location = useLocation();
  const [data, setData] = useState(location.state);
  const [doctors, setDoctors] = useState(data.data);
  const [selected, setSelected] = useState("");
  const [count, setCount] = useState();
  const [id, setId] = useState([]);
  const slotHandler = (e) => {
    setId((prev) => [...prev, e]);
    localStorage.setItem("id", id);
  };
  console.log(data);
  console.log(doctors);
  const selectHandler = (e) => {
    /*if (selected === e) {
      return setSelected("");
    }*/
    setSelected(e);
  };
  useEffect(() => {
    console.log(id);
  });
  return (
    <div className="card-doctor">
      <h2>{data.hospital}</h2>
      <p id="address">Address: {data.address}</p>
      {doctors.length > 0
        ? doctors.map((item, index) => (
            <div
              key={index}
              onClick={() => selectHandler(item.doctor)}
              className="doctor-card"
            >
              <div className="doctor-details">
                <h3>{item.doctor}</h3>
                <p>Specialist in :{item.type}</p>
              </div>

              {selected === item.doctor ? (
                item.appointments.length > 0 ? (
                  item.appointments.map((itm, ind) => (
                    <div key={ind} className="slot">
                      <p>
                        Slot Time :<strong>{itm.time}</strong>
                      </p>
                      <p>
                        Appointment Amount Rs: <strong>{itm.cost}/-</strong>
                      </p>
                      <p>Slot Availability :{itm.available}</p>
                      {itm.available === "available" ? (
                        <button
                          className={
                            id.some((i) => i === itm.id) ? "no" : "yes"
                          }
                          onClick={() => slotHandler(itm.id)}
                        >
                          {id.some((i) => i === itm.id) ? "Booked" : "Book Now"}
                        </button>
                      ) : (
                        <button className="no">No Slot</button>
                      )}
                    </div>
                  ))
                ) : null
              ) : (
                <div />
              )}
            </div>
          ))
        : null}
    </div>
  );
}
