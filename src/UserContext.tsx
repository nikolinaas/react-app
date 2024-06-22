import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";
import { User, initialState } from "./model/User";
import { Actions } from "./Actions";
import userReducer from "./reducers/UserReducer";

 interface UserContextType {
    user: User;
    dispatch: Dispatch<Actions>;
  }

  const UserContext = createContext<UserContextType | undefined>(undefined);

  interface UserProviderProps {
    children: ReactNode;
  }

  const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, initialState);
    return <UserContext.Provider value={{ user, dispatch }}>{children}</UserContext.Provider>;
  };
  
export { UserContext, UserProvider };
