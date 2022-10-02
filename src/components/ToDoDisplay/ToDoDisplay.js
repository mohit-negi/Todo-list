import React, {Component} from "react"
import ToDoItem from "../ToDoItem/ToDoItem"
export default class ToDoDisplay extends Component
{

    render()
    {
        return(
            <div className="list-group my-5">
               <h3 className="text-capitalize text-center">
                Todo list
               </h3>
               <ToDoItem/>
               <button className="btn btn-danger col-12 text-capitalize mt-5">clear list</button>
            </div>
        )
    }
}