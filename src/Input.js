import React from 'react'
import List from './List'

const initialState = {
  todoList: []
}

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  getInputText() {
    const titleTargetDOM = document.getElementsByName('title')
    const bodyTargetDOM = document.getElementsByName('body')
    const todos = {
      id: this.state.todoList.length,
      title: titleTargetDOM[0].value,
      body: bodyTargetDOM[0].value,
      complete: false
    }
    this.setState({ todoList: this.state.todoList.concat(todos) })
  }

  render() {
    return (
      <React.Fragment>
        <input type='text' name='title' placeholder='Please write Title..'></input>
        <input type='text' name='body' placeholder='Please write Body..'></input>
        <button onClick={() => this.getInputText()}>done</button>
        <List todoList={this.state.todoList} />
      </React.Fragment>
    )
  }
}

export default Input
