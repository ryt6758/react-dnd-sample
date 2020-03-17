import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import * as Drag from './Drag'
import * as Drop from './Drop'
import { connect } from 'react-redux'
import { sort } from '../actions'
import classset from 'react-classset'

const Draggable = DragSource('POST', Drag.postSource, Drag.collect)
const Droppable = DropTarget('POST', Drop.postTarget, Drop.collect)


class Todo extends React.Component {
  render() {
    const { connectDragSource, connectDropTarget, isDragging, isOver, id, title, body } = this.props
    return connectDragSource(
      connectDropTarget(
        <div className={classset({
          todo: true,
          dragging: isDragging,
          hovered: isOver
        })}>{id}: {title}-{body}</div>
      )
    )
  }
}

const mapDispatchToProps = dispatch => ({
  sort: props => dispatch(sort(props))
})

// // Todo = Draggable(Todo)
// // Todo = Droppable(Todo)
// export default connect(mapStateToProps, mapDispatchToProps)(Todo)

export default connect(null, mapDispatchToProps)(Draggable(Droppable(Todo)))
