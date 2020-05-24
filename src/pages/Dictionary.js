import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {setLanguages} from "../actions/dictionary";
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Content from "../components/Content";
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
      setLanguages()
  }

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
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
        setLanguages,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dictionary))
