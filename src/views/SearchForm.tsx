import { IconButton, TextField } from "@material-ui/core";
import { StyledTxtField } from "./StyledTxtField";
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext, useState } from 'react';
import { SearchContext } from "../SearchContext";

const SearchBar = (onSearch : any) => {

  var searchBarValue:any;

  const [query, setQuery] = useState('');

  function handleSubmit() {
    const result = search(query);
    onSearch(result);
  }

  const search = (query:any) => {
    var items = localStorage.getItem('items');
    var temporaryArray: any = [];
    var itemsToSearch = null;
    if (items != null) {
      itemsToSearch = JSON.parse(items);
      itemsToSearch.forEach((element: any) => {
        if (element.name.includes(searchBarValue) || element.description.includes(searchBarValue)) {
          console.log(element)
          temporaryArray.push(element);
        }
      });
    }
    return temporaryArray;
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledTxtField
        id="search-bar"
        className="text"
        label="Item name or description"
        variant="outlined"
        placeholder="Search..."
        size="small"
        value={searchBarValue}
        onChange={(event)=>{
searchBarValue = event.target.value
        }}

      />
      <IconButton onClick={handleSubmit} aria-label="search">
        <SearchIcon></SearchIcon>
      </IconButton>
    </form>
  )
}

export default SearchBar;