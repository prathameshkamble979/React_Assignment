
import React, { useState } from "react";
import { EventContext } from "./EventContext";

export default function EventProvider({ children }) {
  const [eventName, setEventName] = useState("No Event");
  const [organizerName, setOrganizerName] = useState("Not Assigned");

  return (
    <EventContext.Provider
      value={{ eventName, organizerName, setEventName, setOrganizerName }}
    >
      {children}
    </EventContext.Provider>
  );
}
