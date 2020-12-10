import React from 'react';
import {MultiplayerGameProvider} from "../context/multiplayerGameContext";
import Multiplayer from "./Multiplayer";

const MultiplayerGmae:React.FC = () => {
    return (
        <MultiplayerGameProvider>
            <Multiplayer/>
        </MultiplayerGameProvider>
    );
}

export default MultiplayerGmae;