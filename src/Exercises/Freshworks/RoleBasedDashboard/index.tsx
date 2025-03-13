import { UserProvider } from "./Context/UserContext";
import RoleBasedContent from "./RoleBasedContent";
import UserOptions from "./userOptions";

const RoleBasedDashboaed: React.FC = () => {
  return (
    <UserProvider>
      <div>
        <UserOptions />
        <RoleBasedContent />
      </div>
    </UserProvider>
  );
};
export default RoleBasedDashboaed;
