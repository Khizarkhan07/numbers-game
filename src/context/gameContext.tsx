import React, {createContext, ReactNode, useContext, useReducer} from "react";
import { gameStateType, actionType} from "../types";
import {compareAnswer, generateRandom, numberState, removeLevel, storeLevel} from "../utils";

const START = 'START'
const RESET = 'RESET'
const CHECK = 'CHECK'
const NEXT_LEVEL = 'NEXT_LEVEL'
const SET_LEVEL = 'SET_LEVEL'
const NEW_GAME = 'NEW_GAME'
export const initialState = {
    gameState: [],
    numbers : [1,2,3,4,5],
    status: 'PENDING',
    level : 5,
    previousLevel: 4
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
            const result = generateRandom(state.numbers)
            return {
                ...state,
                gameState :[ ...state.gameState, (result[0] as number)],
                numbers: [...state.numbers.slice(0, result[1]), ...state.numbers.slice(result[1] + 1)],
                status: 'PENDING'
            };
        }
        case RESET : {
            return  {
                ...state,
                gameState: [],
                numbers: numberState(state.level)
            };
        }
        case CHECK : {
            const guess = action.payload.guess.split(",")
            const result = compareAnswer(state.gameState, guess)
            if(result === 'CORRECT GUESS'){
                return {
                    ...state,
                    status: result,
                    previousLevel: state.previousLevel+1
                }
            }
            else  {
                return {
                    ...state,
                    status: result
                }
            }

        }
        case NEXT_LEVEL : {

            const newState = {
                ...state,
                level: state.level + 1,
                numbers: numberState(state.level+1)
            }
            storeLevel(newState.level)

            return newState;
        }
        case SET_LEVEL : {
            const level = action.payload.level

            return {
                ...state,
                level: level,
                numbers: numberState(level)
            };
        }
        case NEW_GAME : {
            removeLevel()
            return  {
                ...state,
                gameState: [],
                numbers : [1,2,3,4,5],
                status: 'PENDING',
                level : 5,
                previousLevel: 4
            }
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

