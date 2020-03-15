import { sort } from '../actions'

export const postTarget = {
  drop(dropprops, monitor, component) {
    // @param props 親コンポーネントのProps
    // @param monitor ドロップ先のモニタリング情報
    // @param component ドロップ先のインスタンス
    // monitor.getItem()で、beginDragでreturnした値を取得できる
    const dragId = monitor.getItem().id
    const dropId = dropprops.id
    dropprops.sort({ fromId: dragId, toId: dropId })
    return dropprops
  }
}

export const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}
