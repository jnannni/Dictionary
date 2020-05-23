import React from "react";
import Cards from "../Cards";

const Content = () => {

    return (
        <div className="content">
            <div className="separated--container">
                <div>
                    <ul className="label--container">
                        <li className="li--column">Word</li>
                        <li className="li--column">Source Language</li>
                        <li className="li--column">Learned</li>
                    </ul>
                </div>
                <div className="cards">
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default Content
