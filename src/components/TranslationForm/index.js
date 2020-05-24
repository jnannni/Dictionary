import React from "react";

const TranslationForm = ({ word, target, source, translation }) => {

        return (
            <div className="popup--translation">
                <div className="first--string">
                    <p className="popup--info">{word}</p>
                    <p className="popup--info">{source}</p>
                </div>
                <div className="second--string">
                    <p className="popup--info">{translation}</p>
                    <p className="popup--info">{target}</p>
                </div>
            </div>
        )
}

export default TranslationForm
