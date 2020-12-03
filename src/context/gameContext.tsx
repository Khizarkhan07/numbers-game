import React, {createContext, ReactNode, useContext, useReducer} from "react";
import { gameStateType, actionType} from "../types";
import {generateRandom} from "../utils";

const ADD_NUMBER = 'ADD_NUMBER'
export const initialState = {
    gameState: [],

}

const GameContext = createContext<{
    state: gameStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null,
});


const gameReducer = (state: gameStateType, action: actionType) => {
    switch (action.type) {
        case ADD_NUMBER :{
            generateRandom(state)
            return {
                ...state,
                gameState :[ ...state.gameState, generateRandom(state)]
            };
        }
        default: return state;
    }

};

type Props = {
    children: ReactNode;
};
const GameProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => useContext(GameContext);
export { GameProvider };

