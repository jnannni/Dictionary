import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SingleCard from '../SingleCard'

const Content = ({ words }) => {
  function createComponent(words) {
    let id = 0
    const component = Object.values(words)
      .map((word) => (
        <SingleCard
          key={id++}
          id={word.id}
          word={word.value}
          translation={word.translation}
          source={word.source}
          target={word.target}
          completed={word.completed}
        />
      ))
      .reverse()
    const filteredArray = [
      component.filter((word) => !word.props.completed),
      component.filter((word) => word.props.completed),
    ]
    return filteredArray
  }

  return (
    <div className="content">
      <div className="separated--container">
        <div className="labels--div">
          <ul className="label--container">
            <li className="li--column">
              <span>Word</span>
            </li>
            <li className="li--column">
              <span>Source Language</span>
            </li>
            <li className="li--column">
              <span>Learned</span>
            </li>
          </ul>
        </div>
        <div className="cards">{createComponent(words)}</div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    words: state.dictionary.words,
  }
}

export default connect(mapStateToProps, null)(Content)
