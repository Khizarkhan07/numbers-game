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


export const numberState = (level : number) => {
    let numbers = []
    for (let i = 1 ; i<= level ; i++){
        numbers.push(i);
    }
    return numbers
}

export const storeLevel = (level: number) => {
    localStorage.setItem('level', JSON.stringify(level));
}

export const removeLevel = () => {
    localStorage.removeItem('level')
}