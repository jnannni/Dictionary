import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAppLoading } from '../actions/app'
import {setLanguages, setSource, setTarget, addWord} from "../actions/dictionary";
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Content from "../components/Content";
import Translate from '../components/Translate'
import {axios} from "../actions/axiosConfig";
import Choice from "../components/LangChoice";

class Dictionary extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
        isLoading: false,
        sourceLang: '',
        targetLang: '',
    }
  }

  async componentDidMount() {
      const { setLanguages } = this.props;
      const res = await axios({
          url: 'https://translate.yandex.net/api/v1.5/tr.json/getLangs',
          method: 'GET',
          params: {
              key: 'trnsl.1.1.20200517T142351Z.c69a6ea386326cff.a964b2bce894646453704e9203644db56cc5b39b',
              ui: 'en',
          }
      })
      setLanguages(res.data.langs)
  }

    /*handleLoading = () => {
    const { setAppLoading } = this.props
    this.setState(
      (prevState) => ({ isLoading: !prevState.isLoading }),
      () => {
        const { isLoading } = this.state
        setAppLoading(isLoading)
      }
    )
  }*/

  render() {
    const { title } = this.props
    return (
      <div className="container">
          <div className="icon">
              <Choice name="target"/>
          </div>
          <Header title={title}/>
          <Menu />
          <Content />
          <Footer />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
        setAppLoading,
        setLanguages,
        setSource,
        setTarget,
        addWord,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dictionary))
