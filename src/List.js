import React from 'react'
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Todo from './Todo'

class List extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const todoList = this.props.todoList || []
    const rendertodoList = todoList.map(todo => (
      <Todo id={todo.id} title={todo.title} body={todo.body} key={todo.id} />
    ))
    return (
      <DndProvider backend={HTML5Backend}>
        {rendertodoList}
      </DndProvider >
    )
  }
  // render() {
  //   return (this.state.todoList.map(todo => (
  //     <DndProvider backend={HTML5Backend}>
  //       <Todo key={todo.id} id={todo.id} title={todo.title} body={todo.body} />
  //     </DndProvider>
  //   )))
  // <DndProvider>をmapで複数回レンダリングしている
  // return rendertodoList
  // }
}

export default List;
