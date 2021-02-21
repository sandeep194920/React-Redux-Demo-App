import { BUY_CAKE } from './cakeTypes'

// action creator (function that contains action object) for buying cake. The action object must contain a type property
// setting number = 1 by default so that its existing functionality doesnt break
export const buyCake = (number = 1) => {
    return {
        // using this string constant to avoid typo
        type: BUY_CAKE,
        payload: number
    }
}