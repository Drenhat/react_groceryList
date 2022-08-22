import React, {useState} from "react";
import {AddGroceryItemProps} from "../../../../app/models/AddGroceryItemProps";

export const AddGroceryItemForm: React.FC<AddGroceryItemProps> = ({addGroceryItem}) => {
    const [text, setText] = useState("")
    const listPlaceHolder: string = "Enter a new item"

    return (
        <div className="grocery-item-form">
            <form>
                <input
                    className="grocery-item-form-input"
                    type="text"
                    value={text}
                    onChange={(element) => {
                        setText(element.target.value)
                    }}
                    placeholder={listPlaceHolder}
                />

                <button
                    className="grocery-item-form-btn"
                    type="submit"
                    disabled={!text}
                    onClick={(element) => {
                        element.preventDefault();
                        addGroceryItem(text);
                        setText("")
                    }}
                >
                    Add new item
                </button>
            </form>
        </div>
    )
}