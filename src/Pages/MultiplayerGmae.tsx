import React from 'react';
import {MultiplayerGameProvider} from "../context/multiplayerGameContext";
import Multiplayer from "./Multiplayer";

const MultiplayerGmae = () => {
    return (
        <MultiplayerGameProvider>
            <Multiplayer/>
        </MultiplayerGameProvider>
    );
}

export default MultiplayerGmae;