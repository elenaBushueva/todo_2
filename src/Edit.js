import './App.css';
import {useState} from 'react';

function Edit(props) {
    const [toggle, setToggle] = useState(false);
    const [updateInput, setUpdateInput] = useState('');

    const updateToggle = () => {
        props.update(props.el.id, updateInput);
        setToggle(false);
        setUpdateInput('');
    }
const cancelToggle = ()=>{
        setToggle(false);
        setUpdateInput('');
}


    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>edit</button>

            {toggle && <input type="text" value={updateInput}
                              onChange={(e) => {
                                  setUpdateInput(e.target.value)
                              }}/>}
            {toggle && <button onClick={updateToggle}>update</button>}
            {toggle && <button onClick={cancelToggle}>cancel</button>}
        </div>
    );
}

export default Edit;
