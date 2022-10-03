import React, {Component} from "react"

export default class ToDoItem extends Component
{

    render()
    {
        const {title,handleDelete,handleEdit} = this.props;
        return(
            <div className="list-group-item text-capitalize d-flex justify-content-between my-2">
               <h6>{title}</h6>
               <div className="icons">
                    <span className="mx-2 text-success"onClick={handleEdit}>
                        <i className="fa-solid fa-pen-nib"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fa-solid fa-trash-can"></i>
                    </span>
               </div>
            </div>
        )
    }
}