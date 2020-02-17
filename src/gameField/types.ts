export enum Players {
    PLAYER_1 = 'PLAYER_1',
    PLAYER_2 = 'PLAYER_2'
}

export type CardType = {
    name: string
    parameter: number
}

export type Winner = Players | 'DRAW'