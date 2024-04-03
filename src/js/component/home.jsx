import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<h1>To Do List</h1>
				<ul>
					<li><input type="text" placeholder="What do you need in your to do list?" ></input> </li>
					<li> Ir a la peluqueria <i className="fa-light fa-trash"></i> </li>
					<li> Pedido Amazon <i className="fa-light fa-trash"></i> </li>
				</ul>	
			</div>


			
			
		
		</div>
	);
};

export default Home;
