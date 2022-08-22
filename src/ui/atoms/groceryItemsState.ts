import {atom} from "recoil";
import {GroceryItem} from "../../app/models/GroceryItem";

export const groceryItemsState = atom({
    key: "groceryItems",
    default: [
        {
            text: 'tomatoes',
            complete: false,
        },
        {
            text: 'Lettuce',
            complete: true,
        },
    ] as GroceryItem[]
})