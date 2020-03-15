import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import * as Drag from './Drag'
import * as Drop from './Drop'
import _ from 'lodash'

const Draggable = DragSource('POST', Drag.postSource, Drag.collect)
const Droppable = DropTarget('POST', Drop.postTarget, Drop.collect)


class Todo extends React.Component {
  render() {
    const { connectDragSource, connectDropTarget, isDragging, id, title, body } = this.props
    return connectDragSource(
      connectDropTarget(
        <div>{id}: {title}-{body}</div>
      )
    )
  }
}

export default _.flow(Draggable, Droppable)(Todo)
