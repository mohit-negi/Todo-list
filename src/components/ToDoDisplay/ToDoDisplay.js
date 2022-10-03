import React, {Component} from "react"
import ToDoItem from "../ToDoItem/ToDoItem"
export default class ToDoDisplay extends Component
{

    render()
    {
        const {items,clearList,handleDelete,handleEdit} = this.props;
        return(
            <div className="list-group my-5">
               <h3 className="text-capitalize text-center">
                Todo list
               </h3>
               {
                items.map(item => {
                    return(
                        <ToDoItem   key={item.id} 
                                    title={item.title}
                                    handleDelete={()=>{handleDelete(item.id)}}
                                    handleEdit = {() => {handleEdit(item.id)}}
                    />
                    )
                })
               }
               
               <button type="button"className="btn btn-danger col-12 text-capitalize mt-5" onClick={clearList}>clear list</button>
            </div>
        )
    }
}