import {gameStateType} from "../types";

export const generateRandom = (state: gameStateType) => {
    console.log(state.numbers.length, "lenghth")
    var nums = state.numbers,
        ranNums ,
        j = 0;
        j = Math.floor(Math.random() * (nums.length));
        ranNums = nums[j];
    return [(ranNums as number), j];
}