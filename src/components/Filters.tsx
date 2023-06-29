import { TODO_FILTERS, FILTERS_BUTTONS } from "../consts"

interface Props {
  //para utilizar una de las constantes que tiene dentro TODO_FILTERS
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
  onFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void;
}


export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange
}) => {

  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}])=>{
          const isSelected = filterSelected === key;
          const classNameSelected = isSelected ? "selected" : "";
          return(
            <li key={key}>
              <a 
                href={href}
                onClick={(event)=>{
                  event.preventDefault();
                  onFilterChange(key as typeof TODO_FILTERS[keyof typeof TODO_FILTERS])
                }}className={classNameSelected}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}