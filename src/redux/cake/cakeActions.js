import { BUY_CAKE } from './cakeTypes'

// action creator (function that contains action object) for buying cake. The action object must contain a type property

export const buyCake = () => {
    return {
        // using this string constant to avoid typo
        type: BUY_CAKE
    }
}