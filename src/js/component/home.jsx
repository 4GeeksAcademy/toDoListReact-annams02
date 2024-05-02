
import React, {useState, useEffect}from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState([
		
	]);

	const [inputValue, setInputValue] = useState ("");
	
	const controlarInput = (e) => {
		setInputValue(e.target.value) 
	}
	const controlarEnter = (e) => {
		if (e.key === 'Enter') {
			setTareas(tareas.concat(inputValue));
		}
	}
	
	const deleteItems = (e) => {
		setTareas((prevState) =>
		  prevState.filter((tarea, index) => index !== e)
		);
	  };
	


	return (
		<div className="container">
			<div className="row justify-content-center">
				<h1>To Do List</h1>
				<ul>
					<li><input type="text" onChange={controlarInput} onKeyDown={controlarEnter} value={inputValue} placeholder="What do you need in your to do list?" ></input> </li>
					{tareas.map((t, index) => <li key={index}>{t} <button onClick={() => deleteItems (index)} className="fa-light fa-trash"></button></li>)}
			
				</ul>	
			</div>

				<div> {tareas.length} tasks</div>

		</div>
	);
};

export default Home;
