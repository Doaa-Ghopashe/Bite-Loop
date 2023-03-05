import React,{useState} from 'react';
{/* */}
const ToDo = props => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input className='form-control mb-3'/>
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
);
{/* */}
export function Todo() {
  const [todos , setToDos]=useState([{
    id:"todo1",
    createdAt:"18:00"
  },{
    id:"todo2",
    createdAt:"20:30"
  }]);
  const reverseFun = ()=>{
    setToDos([...todos].reverse());
  }
  return (
    <div className='App'>
      <button onClick={reverseFun}>Reverse</button>
      <table>
        <tbody>
        {todos.map((todo,index)=>(
            /*
            *the index here is a problem as when using the reverse 
            *function all the data in the todos array will be reversed 
            *except the input fields as their values are uncontrolled
            *so it's better to use other unique value like the todo.id
            */
            /* <ToDo id={todo.id} createdAt={todo.createdAt} key={index}/>*/
            <ToDo id={todo.id} createdAt={todo.createdAt} key={todo.id}/>
        )
        )}
        </tbody>
      </table>
    </div>
  );
}