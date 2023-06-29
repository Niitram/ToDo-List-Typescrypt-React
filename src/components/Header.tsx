import React from "react";
import { CreateTodo } from "./CreateTodo";
import { TodoTitle } from "../types";

interface Props {
  onAddTodo: ({title}:TodoTitle) => void;
}



export const Header: React.FC<Props> = ({onAddTodo}) => {
  return <header className="header">
    <h1>todos <img style={{width: "60px", height: "auto"}} src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png" alt="" /></h1>

    <CreateTodo saveTodo={onAddTodo}/>
  </header>;

}