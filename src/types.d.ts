export interface Todo  {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type Todocompleted = Pick<Todo, 'completed'>

export type listOfTodos = Todo[]