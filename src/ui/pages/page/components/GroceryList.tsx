import React from "react";
import {GroceryListItem} from "./GroceryListItem";
import {GroceryListProps} from "../../../../app/models/GroceryListProps";

export const GroceryList: React.FC<GroceryListProps> = ({groceryItems, toggleGroceryItem}) => {
    return (
        <div className="grocery-list">
            <ul>
                {groceryItems.map((groceryItem) => (
                    <GroceryListItem key={groceryItem.text} groceryItem={groceryItem} toggleGroceryItem={toggleGroceryItem} />
                ))}
            </ul>
        </div>
    )
}

