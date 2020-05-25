import React from 'react'

const TranslationForm = ({ word, target, source, translation }) => {
  return (
    <div className="popup--translation">
      <div className="first--string">
        <div className="popup--info popup--word">{word}</div>
        <div className="popup--info popup--lang">{source}</div>
      </div>
      <div className="second--string">
        <div className="popup--info popup--word">{translation}</div>
        <div className="popup--info popup--lang">{target}</div>
      </div>
    </div>
  )
}

export default TranslationForm
