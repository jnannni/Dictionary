import React from 'react'
import { connect } from 'react-redux'
import Choice from '../LangChoice'
import { bindActionCreators } from 'redux'
import { addWord } from '../../actions/dictionary'
import { v4 } from 'node-uuid'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      value: '',
      target: '',
      source: '',
      completed: false,
      translation: '',
    }
  }

  componentDidMount() {
    this.setState({ id: v4() })
  }

  handleClick = () => {
    const { target, source } = this.state
    const { words } = this.props
    this.setState({ id: v4() })
    if (words.length > 200) {
      alert("You can't add more words, srr")
    } else if (target === '' || source === '') {
      alert('Choose a language, bastard')
    } else {
      const { addWord } = this.props
      addWord(this.state)
      this.setState({ value: '' })
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
    this.setState({ source: lang })
  }

  render() {
    return (
      <div className="add--form">
        <div className="input--form">
          <input
            type="text"
            value={this.state.value}
            placeholder="Enter word or phrase here"
            onChange={this.handleChange}
          />
        </div>
        <div className="form--actions">
          <Choice name="source" setSourceLang={this.setSourceLang} />
          <button className="button--form" onClick={this.handleClick}>
            Add
          </button>
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
