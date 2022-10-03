import './App.css';
import React ,{Component} from "react";
import ToDoInput from './components/ToDoInput/ToDoInput';
import ToDoDisplay from "./components/ToDoDisplay/ToDoDisplay";

//importing bootstrap distribution 
import "bootstrap/dist/css/bootstrap.min.css";
//importing uuid to generate unique ids for todo items
import { v4 as uuidv4 } from 'uuid';
export default class App extends Component
{
  state = {
    id: uuidv4(),
    items: [],
    item: '',
    editItem: false
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title: this.state.item,
    }
    // {console.log(newItem);}
    const updateItems = [...this.state.items,newItem];
    this.setState({
      items: updateItems,
      item: '',
      id : uuidv4(),
      editItem: false
    })
  };
  clearList = (e) => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) =>{
    const sortedItems = this.state.items.filter((item) => {return item.id !== id});
    this.setState({
      items: sortedItems
    })
  }
  handleEdit = (id) => {
    const sortedItems = this.state.items.filter((item) => {return item.id !== id});
    const selectedItems = this.state.items.find((item) => {return item.id === id});
    this.setState({
      items: sortedItems,
      item: selectedItems.title,
      editItem: true,
      id: id
    })
    console.log(selectedItems);
  }
  render()
  {
    return(
      <section>
        <div className='container'>
          <div className='row'>
              <div className='col-10 mx-auto col-md-8 mt-4'>
                <h3 className='text-capitalize text-center'>Todo input</h3>
                <ToDoInput  item={this.state.item} 
                            handleChange ={this.handleChange}
                            handleSubmit = {this.handleSubmit}
                            editItem = {this.state.editItem}
                            
                />
                <ToDoDisplay items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit = {this.handleEdit}/>
              </div>
          </div>
        </div>
      </section>
    )
  }
}