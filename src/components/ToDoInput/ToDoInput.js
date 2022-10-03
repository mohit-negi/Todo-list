import React, {Component} from "react"

export default class ToDoInput extends Component
{
    
    render(props)
    {
        const {item,handleChange,handleSubmit,editItem} = this.props;

        return(
            <div className="card card-body my-3">
               <form onSubmit={handleSubmit}>
               <div className="input-group">
               <span className="input-group-text bg-primary text-white">
	                <i className="fa-solid fa-book"></i>
                </span>

                    <input type="text" className="form-control text-capitalize" placeholder="To-Do item" value={item} onChange={handleChange}/>
                </div>
                <button type="submit" className={editItem ? 'btn btn-success col-12 mt-3 text-capitalize' : 'btn btn-primary  col-12 mt-3 text-capitalize'}>{editItem ? 'edit item' : 'add item'}</button>
               </form>
            </div>
        )
    }
}