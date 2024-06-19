import { Button, Grid, TextField, withStyles } from "@material-ui/core";
import { StyledTxtField } from "./StyledTxtField";
import { ArtikalContext, ArtikalProvider } from "../ArtikalContext";
import { useContext } from "react";
import { ActionType } from "../Actions";
import { Artikal } from "../model/Artikal";



const AddModal = () => {
  
  const artikalContext = useContext(ArtikalContext);

    function setState(event:any): void {
   
    }

    function addArtikal(){

  
      console.log(artikalContext?.artikal);

      if(artikalContext){
        let latestId = localStorage.getItem("latestId");
        let id : number = 0;
        if(latestId)
          id = parseInt(latestId)+1;
        localStorage.setItem("latestId",JSON.stringify(id));
        var artikal :Artikal = {
          artikalId:id,
          name: artikalContext.artikal.name,
          price: artikalContext.artikal.price,
          amount: artikalContext.artikal.amount,
          description: artikalContext.artikal.description
        }
        let items = localStorage.getItem("items");
        let arrayItems = [];
        if(items!=null){
          arrayItems=JSON.parse(items);
        }

        arrayItems.push(artikal);
        localStorage.setItem("items", JSON.stringify(arrayItems));
      }
      

    

    }

   function onChangeNumber(e:any) : void{
      const re = /^[0-9\b]+$/;
  
      // if value is not blank, then test the regex
  
      if (e.target.value === '' || re.test(e.target.value)) {
         setState({value: e.target.value})
      }
  }
    return (
      
      <div className="modal-wrapper">
        <div className="modal">
          <form>
          <Grid item className="addModalTitle">
                     Add artikal
                    </Grid>
          <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <StyledTxtField
                        type="text"
                        placeholder="Atikal name"
                        fullWidth
                        name="name"
                        variant="outlined"
                        onChange={(event) =>
                          artikalContext?.dispatch({
                            type: ActionType.ON_CHANGE_ARTIKAL,
                            payload: {name : event.target.value, amount : artikalContext.artikal.amount, price :artikalContext.artikal.price , description :artikalContext.artikal.description  },
                          })
                        }
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <StyledTxtField
                      className="textFieldClass"
                        type="text"
                        placeholder="Artikal description"
                        fullWidth
                        name="description"
                        variant="outlined"
                        onChange={(event) =>
                          artikalContext?.dispatch({
                            type: ActionType.ON_CHANGE_ARTIKAL,
                            payload: {name : artikalContext.artikal.name, amount : artikalContext.artikal.amount, price :artikalContext.artikal.price , description : event.target.value  },
                          })
                        }
                        required
                      />
                    </Grid>
                    <Grid item>
                      <StyledTxtField
                      className="textFieldClass"
                      type="number"
                        placeholder="Price"
                        fullWidth
                        name="price"
                        variant="outlined"
                        onChange={(event) =>
                          artikalContext?.dispatch({
                            type: ActionType.ON_CHANGE_ARTIKAL,
                            payload: {name : artikalContext.artikal.name, amount : artikalContext.artikal.amount, price : parseFloat(event.target.value) , description : artikalContext.artikal.description  },
                          })
                        }
                        required
                      />
                    </Grid>
                    <Grid item>
                      <StyledTxtField
                      className="textFieldClass"
                      type="number"
                        placeholder="Amount"
                        fullWidth
                        name="amount"
                        variant="outlined"
                        onChange={(event) =>
                          artikalContext?.dispatch({
                            type: ActionType.ON_CHANGE_ARTIKAL,
                            payload: {name : artikalContext.artikal.name, amount : parseInt(event.target.value), price :artikalContext.artikal.price , description :  artikalContext.artikal.description },
                          })
                        }
                        required
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        type="submit"
                        className="button-block"
                        onClick={addArtikal}
                      >
                        ADD
                      </Button>
                    </Grid>
                  </Grid>

          </form>
         
        </div>
      </div>
    );
  };
  
  export default AddModal;