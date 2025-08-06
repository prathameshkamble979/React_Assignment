import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import InputBar from "../components/InputBar";
import { FaUser, FaClipboardList, FaUserTie } from "react-icons/fa";
import { FaCalendarAlt, FaArrowRight, FaPen } from "react-icons/fa";

export default function VisitorPage() {
  const { eventName, organizerName } = useContext(EventContext);
  const nameRef = useRef(null);
  const visitorCount = useRef(0);

  const [visitorName, setVisitorName] = useState("");
  const [visitors, setVisitors] = useState([]);
  const [welcomeMsg, setWelcomeMsg] = useState("");

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (visitors.length > 0) {
      setWelcomeMsg(`Welcome, ${visitors[visitors.length - 1]}!`);
    }
  }, [visitors]);

  const handleCheckIn = () => {
    if (!visitorName.trim()) return;
    setVisitors([...visitors, visitorName.trim()]);
    visitorCount.current += 1;
    setVisitorName("");
  };

  return (
    <div className="card">
      <div className="title">
        <FaUser /> Enter your name:
      </div>
      <div className="input-group">
        <InputBar
          placeholder="Enter your name"
          inputRef={nameRef}
          value={visitorName}
          onChange={setVisitorName}
        />
        <button className="btn-primary" onClick={handleCheckIn}>
          Check In
        </button>
      </div>

      {welcomeMsg && (
        <p className="welcome">
          <FaPen /> {welcomeMsg}
        </p>
      )}

      <h4><FaClipboardList /> Visitor List</h4>
      <ul>
        {visitors.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <p><FaCalendarAlt /> Event: {eventName}</p>
      <p><FaUserTie /> Organizer: {organizerName}</p>

      <Link to="/event" className="link-button">
        Go to Event info <FaArrowRight />
      </Link>
    </div>
  );
}
