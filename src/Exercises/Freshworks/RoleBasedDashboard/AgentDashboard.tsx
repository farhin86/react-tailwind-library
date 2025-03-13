import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchTickets } from "./services";
// import { useSocket } from "./Hooks/useSocket";

const AgentDashboard: React.FC = () => {
  const { data: tickets, isLoading } = useQuery("tickets", fetchTickets);
  const [newTickets, setNewTickets] = useState<string[]>([]);
  //   const socket = useSocket();
  //   useEffect(() => {
  //     if (!socket) return;

  //     socket.on("new_ticket", (ticket: string) => {
  //       setNewTickets((prev) => [...prev, ticket]);
  //     });

  //     return () => {
  //       socket.off("new_ticket");
  //     };
  //   }, [socket]);
  if (isLoading) return <div> Loading already added tickets...</div>;
  return (
    <div>
      AgentDashboard
      <h2>Tickets</h2>
      <ul>
        {tickets &&
          tickets.map((ticket) => {
            return <li key={ticket.id}>{ticket.title}</li>;
          })}
      </ul>
      {/* <h2>Real-Time Updates:</h2>
      <ul>
        {newTickets.map((ticket, index) => (
          <li key={index}>{ticket}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default AgentDashboard;
