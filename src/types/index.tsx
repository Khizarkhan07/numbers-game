

export type gameStateType = {
    gameState: number[]
    numbers: number[]
    status: string,
    level: number,
    previousLevel : number
}

export type multiplayerGameStateType = {
    gameState_player_1: number[]
    gameState_player_2: number[]
    numbers_player_1: number[]
    numbers_player_2: number[]
    player1_status: string,
    player2_status: string,

}
export type actionType = {
    type: string;
    payload: any
}