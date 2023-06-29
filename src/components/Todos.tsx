import { TodoId, type  listOfTodos} from "../types"
import { Todo } from "./Todo"
import { type Todo as TodoType } from "../types"

//tipado de las props con los todos en un array de todos
interface Props {
  todos: listOfTodos
  onRemoveTodo: ({id}:TodoId) => void
  onToggleTodo: ({id, completed}:Pick<TodoType, "id" | "completed">) => void
}

export const Todos : React.FC<Props> =({todos, onRemoveTodo,onToggleTodo})=>{
  return(
    <ul className="todo-list">
      {
        todos.map(todo=>(
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todo 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
            />
          </li>
        ))
      }
    </ul>
  )
}