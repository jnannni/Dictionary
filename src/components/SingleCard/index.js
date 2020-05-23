import React from "react";
import TranslationForm from "../TranslationForm";

class SingleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
            word: this.props.word,
            source: this.props.source,
            target: this.props.target,
            checked: this.props.completed,
        }
    }

    /*componentDidMount() {
        const word = localStorage.getItem()
    }*/

    handleCheckboxChange = () => {
        this.setState(prevState => ({
                checked: !prevState.checked
            })
        )
    }

    render() {
        const { word, source, checked } = this.state
        /*localStorage.setItem(word, word)
        localStorage.setItem(source, source)
        localStorage.setItem(checked, checked)*/
        return (
            <div>
                <div className="cards--container"
                     onMouseEnter={() => this.setState({isShown: true})}
                     onMouseLeave={() => this.setState({isShown: false})}
                >
                    <div className="card--column">{this.state.word}</div>
                    <div className="card--column">{this.state.source}</div>
                    <div className="card--column">
                        <label>
                            <input
                                type="checkbox"
                                checked={this.state.checked}
                                onChange={this.handleCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div>
                    {this.state.isShown && (
                        <TranslationForm word={this.props.word}/>
                    )}
                </div>
            </div>
        )
    }
}

export default SingleCard
