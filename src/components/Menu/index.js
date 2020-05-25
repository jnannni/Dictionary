import React from "react";
import Form from "../AddWordForm";
import Popup from "reactjs-popup";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu--container">
                <div className="rules--title"><h4>Rules</h4></div>
                <p className="rules--text"></p>
                <Popup trigger={<div className="add--button--div">
                    <button className="add--button">ADD WORD</button>
                </div>}
                       position="right top">
                    {close => (
                            <div className="tooltip">
                                <span className="close--button" onClick={close}>&times;</span>
                                <Form />
                            </div>
                        )
                    }
                </Popup>
            </div>
        </div>
    )
}

export default Menu

