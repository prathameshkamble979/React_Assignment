
import { createContext } from "react";

export const EventContext = createContext({
  eventName: "No Event",
  organizerName: "Not Assigned",
  setEventName: () => {},
  setOrganizerName: () => {},
});
