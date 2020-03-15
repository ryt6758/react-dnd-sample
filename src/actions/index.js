export const CREATE = 'CREATE'
export const SORT = 'SORT'

export const create = props => ({
  type: CREATE,
  props
})
export const sort = props => ({
  type: SORT,
  props
})
