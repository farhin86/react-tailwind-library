import { lazy, Suspense } from "react";
import { useUserContext } from "./Context/UserContext";

const AgentDashboard = lazy(() => import("./AgentDashboard"));
const AdminDashboard = lazy(() => import("./AdminDashboard"));
const SupervisorDashboard = lazy(() => import("./SupervisorDashboard"));

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();
// export default function App() {
//    return (
//      <QueryClientProvider client={queryClient}>
//        <Example />
//      </QueryClientProvider>
//    )
// }
export default function RoleBasedContent() {
  const { user } = useUserContext();
  if (!user) return <div>Loading User ...</div>;

  switch (user.role) {
    case "admin":
      return (
        <Suspense fallback={"Loading Admin...Please wait!"}>
          <AdminDashboard />
        </Suspense>
      );
    case "supervisor":
      return (
        <Suspense fallback={"Loading Supervisor...Please wait!"}>
          <SupervisorDashboard />
        </Suspense>
      );
    case "agent":
      return (
        <Suspense fallback={"Loading Agent...Please wait!"}>
          <QueryClientProvider client={queryClient}>
            <AgentDashboard />
          </QueryClientProvider>
        </Suspense>
      );

    default:
      return <div>Unauthorized!</div>;
  }
}
