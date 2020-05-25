import React from 'react'
import Form from '../AddWordForm'
import Popup from 'reactjs-popup'

const Menu = () => {
  // TODO: change popup to my own

  return (
    <div className="menu">
      <div className="menu--container">
        <div className="rules--title">
          <h4>Rules</h4>
        </div>
        <div className="rules--text">
          <p className="paragraph">Hi there! You are in my pseudo dictionary 👺</p>
          <p className="paragraph">There are some tips:</p>
          <ul className="tips--container paragraph">
            <li>you can't add more than 200 words;</li>
            <li>
              <b>PLEASE</b> choose languages every time!
            </li>
          </ul>
          <p className="paragraph">Thanks.</p>
        </div>
        <Popup
          trigger={
            <div className="add--button--div">
              <button className="add--button">ADD WORD</button>
            </div>
          }
          position="top center"
          closeOnDocumentClick
        >
          {(close) => (
            <div className="tooltip">
              <span className="close--button" onClick={close}>
                &times;
              </span>
              <Form />
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default Menu
