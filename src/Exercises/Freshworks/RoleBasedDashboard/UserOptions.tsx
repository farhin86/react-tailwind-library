import { useUserContext } from "./Context/UserContext";

export default function UserOptions() {
  const { setUser } = useUserContext();
  function setUserDashboard(user) {
    setUser({ id: "124", role: user });
  }
  return (
    <div className="flex gap-5">
      <button
        className="border rounded p-3"
        onClick={() => setUserDashboard("admin")}
      >
        Admin
      </button>
      <button
        className="border rounded p-3"
        onClick={() => setUserDashboard("supervisor")}
      >
        Supervisor
      </button>
      <button
        className="border rounded p-3"
        onClick={() => setUserDashboard("agent")}
      >
        Agent
      </button>
    </div>
  );
}
