import {  FC, ReactNode, createContext, useState } from "react";
import { Artikal } from "./model/Artikal";

interface SearchContextType {
  res  :any[]
}

export const SearchContext = createContext<any>(undefined);

interface TableDataProviderProps {
    children: ReactNode;
  }

export const SearchProvider: FC<TableDataProviderProps> = ({children}) => {
  const [searchData, setSearchData] = useState([]);

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};
