import React from "react";
import {Props} from "../../../../app/models/Props";

export const GroceryListItem: React.FC<Props> = ({groceryItem}) => {
    return <li>
        <label
        style={{ textDecoration: groceryItem.complete ? "line-through" : undefined}}>
            <input type="checkbox" checked={groceryItem.complete}/> {groceryItem.text}
        </label>
    </li>;
};