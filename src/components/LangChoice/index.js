import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setSource, setTarget} from "../../actions/dictionary";

class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select a  language...',
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
        if (this.props.name === "target") {
            this.chooseTarget(event.target.value)
            localStorage.setItem("targetLang", event.target.value)
        } else if (this.props.name === "source") {
            this.chooseSource(event.target.value)
            this.props.setSourceLang(event.target.value)
        }
    }

    chooseSource = (lang) => {
        const { setSource } = this.props
        this.setState({sourceLang: lang})
        setSource(lang)
    }

    chooseTarget = (lang) => {
        const { setTarget } = this.props
        this.setState({targetLang: lang})
        setTarget(lang)
    }

    render() {
        const { langs } = this.props;
        const optionComponents = []
        for (let key in langs) {
            optionComponents.push({
                id: key,
                name: langs[key]
            })
        }

        const optionComponent = optionComponents.map(option =>
            <option key={option.id} value={option.id}>{option.name}</option>)

        return (
            <div>
                <select
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoFocus
                >
                    <option name="noLanguageSelected">Select a language...</option>
                    {optionComponent}
                </select>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        langs: state.dictionary.langs,
        sourceLang: state.dictionary.sourceLang,
        targetLang: state.dictionary.targetLang,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setSource,
            setTarget,
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Choice)
