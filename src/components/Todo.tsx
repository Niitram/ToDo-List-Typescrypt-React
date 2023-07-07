import { TodoId,  type Todo as TodoType } from "../types"

//tipado de las props con un alias de la interface Todo
interface Props extends TodoType  {
  onRemoveTodo: ({id}: TodoId) => void
  onToggleTodo: ({id, completed}:Pick<TodoType, "id" | "completed">) => void
} 

export const Todo: React.FC<Props>= ({id, title, completed, onRemoveTodo,onToggleTodo}) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed}
      onChange={(event)=>{onToggleTodo({id,completed:event.target.checked})}} />
      <label >{title}</label>
      <button
        className="destroy"
        onClick={()=>{onRemoveTodo({id})}}>
      </button>
    </div>
  )

}