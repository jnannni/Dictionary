import React from "react";
import {connect} from "react-redux";
import SingleCard from "../SingleCard";

class Cards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
        }
    }


    createComponent = (words) => {
        let component = []
        let id = 0;
        for (let key in words) {
            component.unshift(
                <SingleCard
                    key={id}
                    id={id}
                    word={words[key].value}
                    source={words[key].source}
                    target={words[key].target}
                    completed={words[key].completed}
                />
            )
            id++;
        }
        return component
    }

    render() {
        const { words } = this.props
        return (
            this.createComponent(words)
        )
    }


}

function mapStateToProps(state) {
    return {
        title: state.app.title,
        isLoading: state.app.isLoading,
        langs: state.dictionary.langs,
        sourceLang: state.dictionary.sourceLang,
        targetLang: state.dictionary.targetLang,
        words: state.dictionary.words,
    }
}

export default connect(mapStateToProps, null)(Cards)
