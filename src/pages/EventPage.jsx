import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import InputBar from "../components/InputBar";
import { FaRegCalendarAlt, FaUser, FaSave, FaArrowLeft } from "react-icons/fa";

export default function EventPage() {
  const { eventName, organizerName, setEventName, setOrganizerName } = useContext(EventContext);
  const eventRef = useRef(null);
  const navigate = useNavigate();

  const [newEvent, setNewEvent] = useState("");
  const [newOrganizer, setNewOrganizer] = useState("");

  useEffect(() => {
    eventRef.current?.focus();
  }, []);

  const handleSave = () => {
    setEventName(newEvent || "No Event");
    setOrganizerName(newOrganizer || "Not Assigned");
    setNewEvent("");
    setNewOrganizer("");
    navigate("/");
  };

  return (
    <div className="card">
      <div className="title"><FaRegCalendarAlt /> Event Name:</div>
      <InputBar
        placeholder="Enter Event Name"
        inputRef={eventRef}
        value={newEvent}
        onChange={setNewEvent}
      />

      <div className="title"><FaUser /> Organizer Name:</div>
      <InputBar
        placeholder="Enter Organizer Name"
        value={newOrganizer}
        onChange={setNewOrganizer}
      />

      <button className="btn-primary" onClick={handleSave}>
        <FaSave /> Save Event Info
      </button>

      <p><FaRegCalendarAlt /> Event: {eventName}</p>
      <p><FaUser /> Organizer: {organizerName}</p>

      <button className="btn-secondary" onClick={() => navigate("/")}>
        <FaArrowLeft /> Back to Check In
      </button>
    </div>
  );
}
