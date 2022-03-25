import { BETTING , PLAY_GAME , PLAY_AGAIN} from '../constants/constants';

export const PlayGame = () => {
    return {
        type : PLAY_GAME,
    }
}
export const MakeBets = (id ,toggle ) => {
    return {
        type : BETTING , 
        payload: {id , toggle}
    }
}
export const PlayAgain = () => {
    return {
        type: PLAY_AGAIN
    }
}
