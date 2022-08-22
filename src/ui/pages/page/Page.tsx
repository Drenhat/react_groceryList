import React, {useState} from "react";
import {GroceryListItem} from "./components/GroceryListItem";
import {GroceryItem} from "../../../app/models/GroceryItem";
import {groceryItemsState} from "../../atoms/groceryItemsState";
import {useRecoilState} from "recoil";

const initialGroceryItem: GroceryItem[] = [
    {
        text: 'tomatoes',
        complete: false,
    },
    {
        text: 'Lettuce',
        complete: true,
    },
];

export const Page: React.FC = () => {
    const [groceryItems, setGroceryItems] = useState(initialGroceryItem);

    const toggleGroceryItem = (selectedGroceryItem: GroceryItem) => {
        const newGroceryItem = groceryItems.map((groceryItem) => {
            if (groceryItem === selectedGroceryItem) {
                return {
                    ...groceryItem,
                    complete: !groceryItem.complete
                };
            } return groceryItem
        });
        setGroceryItems(newGroceryItem);
    }

    return (
        <ul>
            <GroceryListItem
                groceryItem={groceryItems[0]}
                toggleGroceryItem={toggleGroceryItem}
            />
            <GroceryListItem
                toggleGroceryItem={toggleGroceryItem}
                groceryItem={groceryItems[1]}/>
        </ul>
    )
}