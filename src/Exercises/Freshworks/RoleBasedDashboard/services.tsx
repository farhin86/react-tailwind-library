export const fetchTickets = async () => {
  return new Promise<{ id: string; title: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", title: "Ticket 1" },
        { id: "2", title: "Ticket 2" },
      ]);
    }, 2000);
  });
};
