import React from "react";
import Form from "../AddWordForm";
import Popup from "reactjs-popup";

const Menu = () => {
    return (
        <div className="menu">
            <div>History</div>
            <Popup trigger={<button>ADD WORD</button>} position="right top">
                <Form />
            </Popup>
        </div>
    )
}

export default Menu

