import { CREATE, SORT } from '../actions'

const initialState = {
  todoList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      const newTodo = {
        id: state.todoList.length,
        title: action.props.title,
        body: action.props.body,
        complete: false
      }
      return { todoList: state.todoList.concat(newTodo) }
    case SORT:
      const todoList = state.todoList
      const dragIndex = todoList.findIndex(todo => todo.id === action.props.fromId)
      const dropIndex = todoList.findIndex(todo => todo.id === action.props.toId)
      const dragTodo = todoList[dragIndex]
      const dropTodo = todoList[dropIndex]
      todoList[dragIndex] = dropTodo
      todoList[dropIndex] = dragTodo
      return { todoList: todoList }
    default:
      return state
  }
}
