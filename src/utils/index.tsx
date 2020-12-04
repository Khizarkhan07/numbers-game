import {gameStateType} from "../types";

export const generateRandom = (state: gameStateType) => {
    var nums = state.numbers,
        ranNums ,
        j = 0;
        j = Math.floor(Math.random() * (nums.length));
        ranNums = nums[j];
    return [(ranNums as number), j];
}

export const compareAnswer = (state : gameStateType, guess: string[])=> {
    const gameState = state.gameState.map(String)
    let result = false;
    if(JSON.stringify(gameState)==JSON.stringify(guess))
        result = true;

    if(result) {
        return 'WIN'
    }
    else  {
        return 'LOST'
    }
}

