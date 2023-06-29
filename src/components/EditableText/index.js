import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {isEditable: true, inputText: ''}

  onChangeInputText = e => {
    this.setState({inputText: e.target.value})
  }

  onClickSaveBtn = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  onClickEditBtn = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  render() {
    const {isEditable, inputText} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            {isEditable ? (
              <>
                <input
                  onChange={this.onChangeInputText}
                  value={inputText}
                  type="text"
                />
                <button
                  onClick={this.onClickSaveBtn}
                  className="custom-btn"
                  type="button"
                >
                  SAVE
                </button>
              </>
            ) : (
              <>
                <p>{inputText}</p>
                <button
                  onClick={this.onClickEditBtn}
                  className="custom-btn"
                  type="button"
                >
                  EDIT
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
