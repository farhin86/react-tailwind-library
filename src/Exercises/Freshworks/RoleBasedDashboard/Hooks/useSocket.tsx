// import { useEffect, useState } from "react";
// import { io, Socket } from "socket.io-client";

// let socket: Socket | null = null;

// export const useSocket = () => {
//   const [socketInstance, setSocketInstance] = useState<Socket | null>(null);

//   useEffect(() => {
//     if (!socket) {
//       socket = io("http://localhost:5173");
//       setSocketInstance(socket);
//     }

//     return () => {
//       socket?.disconnect();
//       socket = null;
//     };
//   }, []);

//   return socketInstance;
// };
