
export const postTarget = {
  // drop(dropprops, monitor, component) {
  //   const dragId = monitor.getItem().id
  //   const dropId = dropprops.id
  //   dropprops.sort({ fromId: dragId, toId: dropId })
  //   return dropprops
  // }
  hover(dropprops, monitor) {
    const dragId = monitor.getItem().id
    const dropId = dropprops.id
    if (dragId !== dropId) dropprops.sort({ fromId: dragId, toId: dropId })
    return dropprops
  }
}

export const collect = (connect, monitor) => {
  return {
    isOver: monitor.isOver(),
    connectDropTarget: connect.dropTarget()
  }
}
