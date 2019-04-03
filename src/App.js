import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {

	constructor(){
		super();
		this.state = {lista:[{nome:'Felipe', email:'felipe.hashi@gmail.com', senha:'1234'},{nome:'Fernanda', email:'fernandamk@gmail.com', senha:'4321'}]};
	}

  	render() {
    return (
		<div id="layout">
			<a href="#menu" id="menuLink" className="menu-link">
			</a>
		
			<div id="menu">
				<div className="pure-menu">
					{/* eslint-disable-next-line */}
					<a className="pure-menu-heading" href="#">HASEARCH</a>
			
					<ul className="pure-menu-list">
						{/* eslint-disable-next-line */}
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
						{/* eslint-disable-next-line */}
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
						{/* eslint-disable-next-line */}
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
					</ul>
				</div>
			</div>
		
			<div id="main">
				<div className="header">
					<h1>Cadastro de Autores</h1>
				</div>

				<div className='content' id='content'>
					{/* Formulário para cadastro */}
					<div className='pure-form pure-form-aligned'>
						<form className='pure-form pure-form-aligned'>
							<div className='pure-control-group'>
								<label htmlFor='nome'>Nome</label>
								<input id='nome' type='text' name='nome' value=''></input>
							</div>
							<div className='pure-control-group'>
								<label htmlFor='e-mail'>E-mail</label>
								<input id='email' type='email' name='email' value=''></input>
							</div>
							<div className='pure-control-group'>
								<label htmlFor='senha'>Senha</label>
								<input id='senha' type='password' name='senha'></input>
							</div>
							<div className='pure-control-group'>
								<label></label>
								<button type='submit' className='pure-button pure-button-primary'>Gravar</button>
							</div>
						</form>
					</div>
					{/* Tabela de cadastrados */}
					<div>
						<table className='pure-table pure-table-striped'>
							<thead>
								<tr>
									<th>Nome</th>
									<th>E-mail</th>
								</tr>
							</thead>
							<tbody>
								{
									this.state.lista.map( (autor)=>{
										return(
											<tr>
												<td>{autor.nome}</td>
												<td>{autor.email}</td>
											</tr>
										);
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
      );
    }
}
  
export default App;
