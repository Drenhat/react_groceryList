import React from "react";
import {GroceryItemProps} from "../../../../app/models/GroceryItemProps";

export const GroceryListItem: React.FC<GroceryItemProps> = ({groceryItem, toggleGroceryItem}) => {
    return (
        <div className="grocery-list-item">
            <li>
                <label
                style={{ textDecoration: groceryItem.complete ? "line-through" : undefined}}>
                    <input
                    type="checkbox"
                    checked={groceryItem.complete}
                    onClick={() => {
                        toggleGroceryItem(groceryItem);
                    }}
                    />
                {groceryItem.text}
                </label>
            </li>
        </div>
    )
};