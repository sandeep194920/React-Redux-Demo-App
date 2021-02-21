
// action creator (function that contains action object) for buying cake. The action object must contain a type property

import { BUY_ICECREAM } from "./iceCreamTypes"

export const buyIceCream = () => {
    return {
        // using this string constant to avoid typo
        type: BUY_ICECREAM
    }
}