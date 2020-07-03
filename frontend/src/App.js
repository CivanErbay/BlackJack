import React from 'react';
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#BBBBBB",
        },
        secondary: {
            main: "#333333"
        }
    }
})

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Navbar/>
            <Game/>
            </ThemeProvider>
        </div>
    );
}

export default App;
