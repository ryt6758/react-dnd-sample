import React from 'react'
import { connect } from 'react-redux'
import { create } from '../actions'

class Input extends React.Component {

  getInputText() {
    const titleTargetDOM = document.getElementsByName('title')
    const bodyTargetDOM = document.getElementsByName('body')
    return {
      title: titleTargetDOM[0].value,
      body: bodyTargetDOM[0].value,
    }
  }

  render() {
    return (
      <div style={{
        margin: "10px 0 20px",
        textAlign: "center"
      }}>
        <input type='text' name='title' placeholder='Please write Title..'></input>
        <input type='text' name='body' placeholder='Please write Body..'></input>
        <button onClick={() => this.props.create(this.getInputText())}>done</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  create: props => dispatch(create(props))
})

export default connect(null, mapDispatchToProps)(Input)
