import React from "react";
import {axios} from "../../actions/axiosConfig";
import {connect} from "react-redux";

class Translate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            translation: '',
        };
    }

    componentDidMount() {
        this.axiosRequest(this.props.word, this.props.source, this.props.target)
    }

    axiosRequest = (textToTranslate, from, to) => {
        axios.get("https://translate.yandex.net/api/v1.5/tr.json/translate?lang=" + from + "-" + to +
            "&key=trnsl.1.1.20200517T142351Z.c69a6ea386326cff.a964b2bce894646453704e9203644db56cc5b39b&text=" +
            textToTranslate)
            .then(data => this.setState({translation: data.data.text}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <p className="popup--info">{this.state.translation}</p>
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
    }
}

export default connect(mapStateToProps, null)(Translate)
