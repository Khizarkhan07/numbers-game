import React from 'react';
import {GameProvider} from "../context/gameContext";
import Home from "./Home";

const SinglePlayer = () => {
    return (
        <GameProvider>
            <Home/>
        </GameProvider>
    );
}

export default SinglePlayer;