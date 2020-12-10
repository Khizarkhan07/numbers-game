import React, {createContext, ReactNode, useContext, useReducer} from "react";
import {  actionType, multiplayerGameStateType} from "../types";
import {
    compareMultiPlayerAnswer,
    generateRandomMultiPlayer,

} from "../utils";

const START_PLAYER_1 = 'START_PLAYER_1'
const START_PLAYER_2 = 'START_PLAYER_2'
const RESET = 'RESET'
const CHECK_PLAYER_1 = 'CHECK_PLAYER_1'
const CHECK_PLAYER_2 = 'CHECK_PLAYER_2'
const NEW_GAME = 'NEW_GAME'
export const initialState = {
    gameState_player_1: [],
    gameState_player_2: [],
    numbers_player_1 : [1,2,3,4,5,6,7,8,9,10,11,12],
    numbers_player_2 : [1,2,3,4,5,6,7,8,9,10,11,12],
    player1_status: 'PENDING',
    player2_status: 'PENDING',
}

const MultiplayerGameContext = createContext<{
    state: multiplayerGameStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null,
});

const multiplayerGameReducer = (state: multiplayerGameStateType, action: actionType) => {
    switch (action.type) {
        case START_PLAYER_1 :{
            const result = generateRandomMultiPlayer(state.numbers_player_1)
            return {
                ...state,
                gameState_player_1 :[ ...state.gameState_player_1, (result[0] as number)],
                numbers_player_1: [...state.numbers_player_1.slice(0, result[1]), ...state.numbers_player_1.slice(result[1] + 1)],
            };
        }
        case START_PLAYER_2 :{
            const result = generateRandomMultiPlayer(state.numbers_player_2)
            return {
                ...state,
                gameState_player_2 :[ ...state.gameState_player_2, (result[0] as number)],
                numbers_player_2: [...state.numbers_player_2.slice(0, result[1]), ...state.numbers_player_2.slice(result[1] + 1)],
            };
        }
        case RESET : {
            return  {
                ...state,
                gameState_player_2: [],
                gameState_player_1: [],
                numbers_player_2: [1,2,3,4,5,6,7,8,9,10,11,12],
                numbers_player_1: [1,2,3,4,5,6,7,8,9,10,11,12]
            };
        }
        case CHECK_PLAYER_1 : {
            const guess = action.payload.guess.split(",")
            const result = compareMultiPlayerAnswer(state.gameState_player_1, guess)
            if(result === 'CORRECT GUESS'){
                return {
                    ...state,
                    player1_status: result,
                }
            }
            else  {
                return {
                    ...state,
                    player1_status: result
                }
            }

        }

        case CHECK_PLAYER_2 : {
            const guess = action.payload.guess.split(",")
            const result = compareMultiPlayerAnswer(state.gameState_player_2, guess)
            if(result === 'CORRECT GUESS'){
                return {
                    ...state,
                    player2_status: result,
                }
            }
            else  {
                return {
                    ...state,
                    player2_status: result
                }
            }

        }

        case NEW_GAME : {

            return  {
                ...state,
                gameState_player_2: [],
                gameState_player_1: [],
                numbers_player_2 : [1,2,3,4,5,6,7,8,9,10,11,12],
                numbers_player_1 : [1,2,3,4,5,6,7,8,9,10,11,12],
                player2_status: 'PENDING',
                player1_status: 'PENDING'
            }
        }
        default: return state;
    }

};

type Props = {
    children: ReactNode;
};
const MultiplayerGameProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(multiplayerGameReducer, initialState);

    return (
        <MultiplayerGameContext.Provider value={{ state, dispatch }}>
            {children}
        </MultiplayerGameContext.Provider>
    );
};

export const useMultiplayerGameContext = () => useContext(MultiplayerGameContext);
export { MultiplayerGameProvider };

