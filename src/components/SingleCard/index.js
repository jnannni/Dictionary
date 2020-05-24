import React from "react";
import TranslationForm from "../TranslationForm";
import {bindActionCreators} from "redux";
import {setAppLoading} from "../../actions/app";
import {addWord, setLanguages, setSource, setTarget, toggleBox} from "../../actions/dictionary";
import {connect} from "react-redux";

class SingleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
        }
    }

    render() {
        const { word, source, target, translation, completed, id } = this.props
        const { toggleBox } = this.props
        return (
            <div>
                <div className="cards--container"
                     onMouseEnter={() => this.setState({isShown: true})}
                     onMouseLeave={() => this.setState({isShown: false})}
                >
                    <div className="card--column">{word}</div>
                    <div className="card--column">{source}</div>
                    <div className="card--column">
                        <label>
                            <input
                                type="checkbox"
                                checked={completed}
                                onChange={() => toggleBox(id)}
                            />
                        </label>
                    </div>
                </div>
                <div>
                    {this.state.isShown && (
                        <TranslationForm
                            word={word}
                            source={source}
                            target={target}
                            translation={translation}/>
                    )}
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            toggleBox
        },
        dispatch
    )
}

export default connect(null, mapDispatchToProps)(SingleCard)
