import React, { useContext, useEffect, useRef } from 'react';
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button,
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext, UserProvider } from '../UserContext';
import { StyledTxtField } from './StyledTxtField';
import { User } from '../model/User';
import { json } from 'stream/consumers';
import { Artikal } from '../model/Artikal';
import { ActionType } from '../Actions';
const LogInForm = () => {


    const userContext = useContext(UserContext);

    function addUsers() {
        var users: User[] = [
            { name: "Nikolina", age: 24, surname: "Stojcic", username: "nina", password: "nina" },
            { name: "Marko", age: 24, surname: "Markovic", username: "marko", password: "marko" },
            { name: "Janko", age: 24, surname: "Jankovic", username: "janko", password: "janko" },
        ];

        localStorage.setItem("users", JSON.stringify(users));
    }

    function addArticles() {


        var items: Artikal[] = [
            { artikalId: 0, name: "Artikal1", amount: 40, description: "Opis artikla 1", price: 50 },
            { artikalId: 1, name: "Artikal2", amount: 50, description: "Opis artikla 2", price: 55 },
            { artikalId: 2, name: "Artikal3", amount: 60, description: "Opis artikla 3", price: 60 },
            { artikalId: 3, name: "Artikal4", amount: 70, description: "Opis artikla 4", price: 55 },
            { artikalId: 4, name: "Artikal5", amount: 40, description: "Opis artikla 5", price: 70 },
            { artikalId: 5, name: "Artikal6", amount: 30, description: "Opis artikla 6", price: 75 },
            { artikalId: 6, name: "Artikal7", amount: 20, description: "Opis artikla 7", price: 50 },
            { artikalId: 7, name: "Artikal8", amount: 10, description: "Opis artikla 8", price: 59 },
            { artikalId: 8, name: "Artikal9", amount: 40, description: "Opis artikla 9", price: 40 },
            { artikalId: 9, name: "Artikal10", amount: 50, description: "Opis artikla 10", price: 30 },
        ]

        localStorage.setItem("items", JSON.stringify(items));
        localStorage.setItem("latestId", "9");

    }

    useEffect(() => {

        addUsers();
        addArticles();
    })

    function doesUserExist(): any {
        var usersFromLocalStorage = localStorage.getItem('users');
        var users: User[] = [];
        var res = null;
        if (usersFromLocalStorage) {
            users = JSON.parse(usersFromLocalStorage);
            users.forEach(user => {
                if (user.username == userContext?.user.username && user.password == userContext.user.password) {
                    sessionStorage.setItem("user", JSON.stringify(user));
                  
                  
                    res = user;
                }
            })


        }
        return res;
    }

    const navigate = useNavigate();

    function handleSubmit() {
        var u = doesUserExist();
        console.log(u != null)
        if (doesUserExist() != null) {
         
            console.log(userContext?.user)
            sessionStorage.setItem('logedin', JSON.stringify(true));
            navigate('/home', { state: { user: u } });
        }

    }

    
    return (
        <Grid container spacing={0} className="main-grid" direction="row">
            <Grid item>
                <Grid
                    container
                    direction="column"
                    spacing={2}
                    className="login-form"
                >
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className="login-background"
                    >
                        <Grid item>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                        </Grid>
                        <Grid item>
                            <form onSubmit={handleSubmit}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <StyledTxtField
                                            type="text"
                                            placeholder="Username"
                                            fullWidth
                                            name="username"
                                            variant="outlined"
                                            onChange={(event) =>
                                                userContext?.dispatch({
                                                    type: ActionType.ON_LOGIN_USER,
                                                    payload: { username: event.target.value, password: userContext?.user.password },
                                                })
                                            }
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item>
                                        <StyledTxtField
                                            type="password"
                                            placeholder="Password"
                                            fullWidth
                                            name="password"
                                            variant="outlined"
                                            onChange={(event) =>
                                                userContext?.dispatch({
                                                    type: ActionType.ON_LOGIN_USER,
                                                    payload: { username: userContext?.user.username, password: event.target.value },
                                                })
                                            }
                                            required
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            className="button-block"
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default LogInForm;

