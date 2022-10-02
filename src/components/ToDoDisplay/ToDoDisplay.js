import React, {Component} from "react"
import ToDoItem from "../ToDoItem/ToDoItem"
export default class ToDoDisplay extends Component
{

    render()
    {
        return(
            <div>
               <h2>Hello from display !!</h2>
               <ToDoItem/>
            </div>
        )
    }
}