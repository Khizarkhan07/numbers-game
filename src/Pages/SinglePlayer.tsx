import React from 'react';
import {GameProvider} from "../context/gameContext";
import SinglePlayerGame from "./SinglePlayerGame";

const SinglePlayer:React.FC = () => {
    return (
        <GameProvider>
            <SinglePlayerGame/>
        </GameProvider>
    );
}

export default SinglePlayer;