import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  id: string;
  role: "admin" | "supervisor" | "agent";
};

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUserContext = () => {
  const user = useContext(UserContext);
  if (!user)
    throw new Error(
      "UserContext should be used from inside of UserProvider only"
    );
  return user;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({ id: "123", role: "agent" });
    }, 1000);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* <SetUserContext.Provider value={setUser}> */}
      {children}
      {/* </SetUserContext.Provider> */}
    </UserContext.Provider>
  );
};
