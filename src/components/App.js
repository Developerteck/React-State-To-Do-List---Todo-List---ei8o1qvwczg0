import React, {useState} from "react";
import "./../styles/App.css";

function App() {
	const [input, setInput] = useState("");
	const [list, setList]= useState([]);
	const [selected, setSelected] = useState({})

	return (
	<div id="main">
		<textarea id="task" value={input} onChange={(e)=>{setInput(e.target.value)}} />
		<button id="btn" onClick={()=>{if(!input) return ; setList(prev=>([...prev,input]));setInput("")}}>Add</button>
		<ul>
			{list.map((ele,index)=>{
				return <li className="list">{ele} <button className="edit" onClick={()=>{setSelected({value:ele,index:index})}}>edit</button><button className="delete" onClick={()=>{setList(prev=>{
					prev = prev.filter((ele,ind)=>{
						return ind !== index
					})
					return prev;
				})}}>delete</button></li>
			})}
		</ul>
		{selected && selected.index >= 0 && <>
			<textarea className="editTask" value={selected.value} onChange={(e)=>{setSelected({...selected,value:e.target.value})}}/>
			<button className="saveTask" disabled={!selected.value} onClick={()=>{
				setList(prev=>{prev[selected.index] = selected.value; return prev});
				setSelected({})
			}}>save</button>
		</>}
	</div>
	);
}


export default App;
