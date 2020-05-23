import React from "react";
import {connect} from "react-redux";
import Translate from "../Translate";

class TranslationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translation: '',
        }
    }

    render() {
        const { targetLang, sourceLang } = this.props
        return (
            <div className="popup--translation">
                <div className="first--string">
                    <p className="popup--info">{this.props.word}</p>
                    <p className="popup--info">{sourceLang}</p>
                </div>
                <div className="second--string">
                    <Translate
                        word={this.props.word}
                        target={targetLang}
                        source={sourceLang} />
                    <p className="popup--info">{targetLang}</p>
                </div>
            </div>
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

export default connect(mapStateToProps, null)(TranslationForm)
