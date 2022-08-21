import React from "react";
import {GroceryListItem} from "./components/GroceryListItem";
import {GroceryItem} from "../../../app/models/GroceryItem";

const groceryItem: GroceryItem[] = [
    {
        text: 'tomatoes',
        complete: false,
    },
    {
        text: 'Lettuce',
        complete: true,
    },
];

// @ts-ignore
export const Page: React.FC = () => {
    return (
        <ul>
            <GroceryListItem  groceryItem={groceryItem[0]}/>
            <GroceryListItem  groceryItem={groceryItem[1]}/>
        </ul>
    )
}