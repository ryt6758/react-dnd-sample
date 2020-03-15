import React from 'react'
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux'
import Todo from './Todo'

class List extends React.Component {

  render() {
    console.log(this.props.todoList)
    const rendertodoList = this.props.todoList.map(todo => (
      <Todo id={todo.id} title={todo.title} body={todo.body} key={todo.id} />
    ))
    return (
      <DndProvider backend={HTML5Backend}>
        {rendertodoList}
      </DndProvider >
    )
  }
}

const mapStateToProps = state => ({
  todoList: state.todoList,
  state //これを追加すると、ソートの変更が検知される。ないとrenderが走らない
})

export default connect(mapStateToProps, null)(List);
