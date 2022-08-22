import React, {useState} from "react";
import {GroceryItem} from "../../../app/models/GroceryItem";
import {GroceryList} from "./components/GroceryList";
import {GroceryItemForm} from "./components/GroceryItemForm";
import {AddGroceryItem} from "../../../app/models/AddGroceryItem";

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

    const addGroceryItem: AddGroceryItem = (text: string) => {
        const newGroceryItem = {text, complete: false};
        setGroceryItems([...groceryItems, newGroceryItem]);
    }

    return (
        <div className="container">
            <h1>This is a grocery list</h1>
            <h2>Please add some items</h2>
            <GroceryItemForm addGroceryItem={addGroceryItem} />
            <GroceryList groceryItems={groceryItems} toggleGroceryItem={toggleGroceryItem} />
        </div>
    )
}