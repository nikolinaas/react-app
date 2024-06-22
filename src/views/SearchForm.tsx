import { IconButton, TextField } from "@material-ui/core";
import { StyledTxtField } from "./StyledTxtField";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

     const searchBarValue="";

    function handleSubmit(){

    }

    return(
    <form onSubmit={handleSubmit}>
      <StyledTxtField
        id="search-bar"
        className="text"
        label="Item name or description"
        variant="outlined"
        placeholder="Search..."
        size="small"
        value={searchBarValue}
      
      />
      <IconButton type="submit" aria-label="search">
       <SearchIcon></SearchIcon>
      </IconButton>
    </form>
    )
}

  export default SearchBar;