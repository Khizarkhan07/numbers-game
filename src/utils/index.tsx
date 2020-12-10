export const generateRandom = (numbers: number[] ) => {
    let nums = numbers,
        ranNums ,
        j = 0;
        j = Math.floor(Math.random() * (nums.length));
        ranNums = nums[j];
    return [(ranNums as number), j];
}

export const compareAnswer = (state : number[] , guess: string[])=> {
    const gameState = state.map(String)
    let result = false;
    if(JSON.stringify(gameState)==JSON.stringify(guess))
        result = true;

    if(result) {
        return 'CORRECT GUESS'
    }
    else  {
        return 'WRONG GUESS'
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

export const formatTime = (timer: number) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes: any = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    return `${getHours} : ${getMinutes} : ${getSeconds}`
}