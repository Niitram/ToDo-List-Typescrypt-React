import { TODO_FILTERS } from "../consts"
import { Filters } from "./Filters"


interface Props {
  activeCount: number
  completedCount: number
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
  handleFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void
  onClearCompleted: () => void
}


export const Footer: React.FC<Props> = ({
  activeCount=0,
  completedCount=0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong> tareas pendientes
        </span>

        <Filters
          filterSelected={filterSelected}
          onFilterChange={handleFilterChange}
          />

          {
            completedCount > 0 && (
              <button
                className="clear-completed"
                onClick={onClearCompleted}
              >
                Borrar completados
              </button>
            )
          }
      </footer>
  )
}