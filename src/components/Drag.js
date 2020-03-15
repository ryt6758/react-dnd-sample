export const postSource = {
  beginDrag(props) {
    return props
  }
}

export const collect = (connect, monitor) => {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource()
  }
}
