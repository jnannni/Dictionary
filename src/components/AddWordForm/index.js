import React from "react";
import {connect} from "react-redux";
import Choice from "../LangChoice"
import {bindActionCreators} from "redux";
import {addWord} from "../../actions/dictionary";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            value: '',
            target: '',
            source: '',
            completed: false,
            translation: '',
        }
    }

    handleClick = () => {
        const { target, source } = this.state
        const { words } = this.props
        if (words.length > 200) {
            alert("You can't add more words, srr")
        } else if (target === '' || source === '') {
            alert("Choose a language, bastard")
        } else {
            const {addWord} = this.props
            this.setState(prevState => {
                return {id: prevState.id + 1}
            })
            addWord(this.state)
            this.setState({value: ''})
        }
    }

    handleChange = (event) => {
        const { targetLang } = this.props
        this.setState({
            value: event.target.value,
            target: targetLang,
        })

    }

    setSourceLang = (lang) => {
        this.setState({source: lang})
    }

    render() {
        return (
            <div className="add--form">
                <div>
                    <input
                        type="text"
                        value={this.state.value}
                        placeholder="Enter word or phrase here"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <Choice name="source" setSourceLang={this.setSourceLang}/>
                    <button onClick={this.handleClick}>Add</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        targetLang: state.dictionary.targetLang,
        words: state.dictionary.words,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addWord,
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
