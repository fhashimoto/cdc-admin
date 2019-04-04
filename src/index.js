import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AutorBox from './Autor';
import Home from './Home';
import Livro from './Livro';
import './index.css';
import {Router,Route,BrowserRouter} from 'react-router';

ReactDOM.render(
  (<BrowserRouter>
		<div>
			<Route path="/" component={Home}/>
			<Route path="/autor" component={AutorBox}/>
			<Route path="/livro" component={Livro}/>
		</div>
	</BrowserRouter>),

  document.getElementById('root')
);
