import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";
import { Artikal, initialState } from "./model/Artikal";
import { Actions } from "./Actions";
import artikalReducer from "./reducers/ArtikalReducer";


interface ArtikalContextType {
    
    artikal: Artikal;
    dispatch: Dispatch<Actions>;
  }

  const ArtikalContext = createContext<ArtikalContextType | undefined>(undefined);

  interface ArtikalProviderProps {
    children: ReactNode;
  }

  const ArtikalProvider: FC<ArtikalProviderProps> = ({ children }) => {
    const [artikal, dispatch] = useReducer(artikalReducer, initialState);
    return <ArtikalContext.Provider value={{ artikal, dispatch }}>{children}</ArtikalContext.Provider>;
  };
  
  export { ArtikalContext, ArtikalProvider };