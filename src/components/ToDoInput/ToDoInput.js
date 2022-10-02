import React, {Component} from "react"

export default class ToDoInput extends Component
{

    render()
    {
        return(
            <div className="card card-body my-3">
               <form>
               <div className="input-group">
               <span className="input-group-text bg-primary text-white">
	                <i className="fa-solid fa-book"></i>
                </span>

                    <input type="text" className="form-control text-capitalize" placeholder="To-Do item"/>
                </div>
                <button type="submit" className="btn btn-primary col-12 mt-3 text-capitalize">add item</button>
               </form>
            </div>
        )
    }
}