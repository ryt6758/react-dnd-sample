export const postTarget = {
  drop(props, monitor, component) {
    // @param props 親コンポーネントのProps
    // @param monitor ドロップ先のモニタリング情報
    // @param component ドロップ先となるDrpコンポーネントのインスタンス
    // monitor.getItem()で、beginDragでreturnした値を取得できる
    return props
  }
}

export const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}
