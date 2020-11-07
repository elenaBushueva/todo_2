import './App.css';
import {useState} from 'react';
import Edit from "./Edit";

function App() {

    const [list, setList] = useState([]);
    const [addInput, setAddInput] = useState('');

    const addToList = () => {
        setList([...list, {title: addInput, id: Math.random()}]);
        setAddInput('');
    }
    const deleteTodo = (id) => {
        setList(list.filter(el => el.id !== id));
    }

    const update = (id, input) => {
        const newList = list.map(el => {
            if (el.id === id) return {...el, title: input}
            return el;
        })
        setList(newList);
    }

    const moveTodo = (i, next) => {
        const newList = [...list];
        const currentEl = newList[i];
        newList[i] = newList[next];
        newList[next] = currentEl;
        setList(newList);
    }


    return (
        <div>
            <input type="text" value={addInput}
                   onChange={(e) => setAddInput(e.target.value)}/>
            <button onClick={addToList}>add todo</button>
            {list.map((el, i) =>
                <li key={el.id}>
                    {el.title}
                    {i !== 0 && <button onClick={() => moveTodo(i, i - 1)}>up</button>}
                    <button disabled={i===list.length-1} onClick={() => moveTodo(i, i + 1)}>down</button>
                    <button onClick={() => deleteTodo(el.id)}>delete</button>
                    <Edit el={el} update={update}/>
                </li>
            )}
        </div>
    );
}

export default App;
