import { Button, Grid, TextField, withStyles } from "@material-ui/core";
import { StyledTxtField } from "./StyledTxtField";
import { ArtikalContext, ArtikalProvider } from "../ArtikalContext";
import { useContext } from "react";
import { ActionType } from "../Actions";
import { Artikal } from "../model/Artikal";
import SaveIcon from '@mui/icons-material/Save';


const ShowArtikalDeatil = () => {

    const artikalContext = useContext(ArtikalContext);

    function setState(event: any): void {

    }

    function editArtikal() {
        var items: Artikal[] = [];
        var itemsFromStorage = localStorage.getItem('items');
        if (itemsFromStorage)
            items = JSON.parse(itemsFromStorage);

        items.forEach(item => {
            if (item.artikalId == artikalContext?.artikal.artikalId) {
                console.log("edituj ovaj")
                item.amount = artikalContext.artikal.amount;
                item.description = artikalContext.artikal.description;
                item.name = artikalContext.artikal.name;
                item.price = artikalContext.artikal.price;
            }
        })
        localStorage.setItem('items', JSON.stringify(items));
    }
    return (

        <div className="modal-wrapper">
            <div className="modal">
                <form>
                    <Grid item className="addModalTitle">
                        Edit artikal
                    </Grid>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <StyledTxtField
                                type="text"
                                label="Atikal name"
                                placeholder="Atikal name"
                                fullWidth
                                value={artikalContext?.artikal.name}
                                name="name"
                                variant="outlined"
                                onChange={(event) =>
                                    artikalContext?.dispatch({
                                        type: ActionType.ON_CHANGE_ARTIKAL,
                                        payload: { name: event.target.value, amount: artikalContext.artikal.amount, price: artikalContext.artikal.price, description: artikalContext.artikal.description },
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
                                label="Description"
                                placeholder="Artikal description"
                                fullWidth
                                value={artikalContext?.artikal.description}
                                name="description"
                                variant="outlined"
                                onChange={(event) =>
                                    artikalContext?.dispatch({
                                        type: ActionType.ON_CHANGE_ARTIKAL,
                                        payload: { name: artikalContext.artikal.name, amount: artikalContext.artikal.amount, price: artikalContext.artikal.price, description: event.target.value },
                                    })
                                }
                                required
                            />
                        </Grid>
                        <Grid item>
                            <StyledTxtField
                                className="textFieldClass"
                                label="Price"
                                type="number"
                                placeholder="Price"
                                fullWidth
                                value={artikalContext?.artikal.price}
                                name="price"
                                required
                                variant="outlined"
                                onChange={(event) =>
                                    artikalContext?.dispatch({
                                        type: ActionType.ON_CHANGE_ARTIKAL,
                                        payload: { name: artikalContext.artikal.name, amount: artikalContext.artikal.amount, price: parseFloat(event.target.value), description: artikalContext.artikal.description },
                                    })
                                }
                            />
                        </Grid>
                        <Grid item>
                            <StyledTxtField
                                className="textFieldClass"
                                type="number"
                                placeholder="Amount"
                                fullWidth
                                label="Amount"
                                value={artikalContext?.artikal.amount}
                                name="amount"
                                variant="outlined"
                                onChange={(event) =>
                                    artikalContext?.dispatch({
                                        type: ActionType.ON_CHANGE_ARTIKAL,
                                        payload: { name: artikalContext.artikal.name, amount: parseInt(event.target.value), price: artikalContext.artikal.price, description: artikalContext.artikal.description },
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
                                onClick={editArtikal}
                            >
                                <SaveIcon></SaveIcon> SAVE
                            </Button>
                        </Grid>
                    </Grid>

                </form>

            </div>
        </div>
    );
};

export default ShowArtikalDeatil;