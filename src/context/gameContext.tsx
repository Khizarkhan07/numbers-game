import React, {createContext, ReactNode, useContext, useReducer} from "react";
import { gameStateType, actionType} from "../types";
import {generateRandom} from "../utils";

const START = 'START'
const RESET = 'RESET'
export const initialState = {
    gameState: [],
    numbers : [1,2,3,4,5,6,7,8,9,10,11,12]

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
        case START :{
            const result = generateRandom(state)
            console.log(result);
            return {
                ...state,
                gameState :[ ...state.gameState, (result[0] as number)],
                numbers: [...state.numbers.slice(0, result[1]), ...state.numbers.slice(result[1] + 1)]
            };
        }
        case RESET : {
            return  {
                ...state,
                gameState: [],
                numbers: [1,2,3,4,5,6,7,8,9,10,11,12]
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

