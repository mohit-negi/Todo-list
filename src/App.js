import './App.css';
import React ,{Component} from "react";
import ToDoInput from './components/ToDoInput/ToDoInput';
import ToDoDisplay from "./components/ToDoDisplay/ToDoDisplay";

//importing bootstrap distribution 
import "bootstrap/dist/css/bootstrap.min.css";
//importing uuid to generate unique ids for todo items
import uuid from "uuid";
export default class App extends Component
{
  render()
  {
    return(
      <section>
        <div className='container'>
          <div className='row'>
              <div className='col-10 mx-auto col-md-8 mt-4'>
                <h3 className='text-capitalize text-center'>Todo input</h3>
                <ToDoInput />
                <ToDoDisplay />
              </div>
          </div>
        </div>
      </section>
    )
  }
}