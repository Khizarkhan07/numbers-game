import {gameStateType} from "../types";

export const generateRandom = (state: gameStateType): number => {
    return Math.floor(Math.random() * 6) + 1 ;
}