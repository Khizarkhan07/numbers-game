

export type gameStateType = {
    gameState: number[]
    numbers: number[]
    status: string,
    level: number,
    previousLevel : number
}
export type actionType = {
    type: string;
    payload: any
}