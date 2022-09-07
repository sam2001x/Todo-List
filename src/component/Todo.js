import React, { useState } from 'react';
import "../component/todo.css";
import {useDispatch,useSelector} from 'react-redux';
import {BsPlusLg } from 'react-icons/bs';
import {AiTwotoneDelete} from 'react-icons/ai';

 
import { addToDo, deleteToDo, removeToDo } from '../actions/index';


const Todo = () => {
    const [inputData, setInputData] = useState('');  
    const list = useSelector((state)=> state.todoReducer.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add your list here</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text"  placeholder="Add item" value={inputData} onChange={(event) => setInputData(event.target.value)}/>
                        <button  onClick={()=> {dispatch(addToDo(inputData),setInputData(''))}}>
                        <BsPlusLg  id='icon' />
                        </button> 
                    </div>
                    <div className='showItems'>
                        {
                            list.map((elem) => {
                                return(
                                    <div className='eachItem' key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <button id='delBtn' onClick={()=>dispatch(deleteToDo(elem.id))}>
                                    <AiTwotoneDelete id='icon-2'/>
                                    </button>
                                    </div>
                                )
                                
                            })
                        }
                        
                    </div>
                    <div className='removeItems'>
                        <button onClick={()=>dispatch(removeToDo())}>Check ALL</button>
                    </div>
                </div>
            </div>       
        </>
    )
}

export default Todo;
