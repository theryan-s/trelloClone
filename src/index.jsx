import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// Components
import { Board, Columns, Menu, SideMenu, TopNav } from "./Components";
// Mui Components
import { makeStyles } from "@material-ui/core/styles";
// Stylesheet
import "./styles.scss";
// Data
import initialData from "./initialData";

const App = () => {
	const [data, SetData] = useState(initialData);
	
	return (
		<div>
			<TopNav />
			<Menu />
			<Columns props={data}/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
