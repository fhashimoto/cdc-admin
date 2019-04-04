import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from'jquery';

class App extends Component {

	constructor(){
		super();
		this.state = {lista:[], nome:'',email:'',senha:''};
		this.enviaForm = this.enviaForm.bind(this);
		this.setNome = this.setNome.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setSenha = this.setSenha.bind(this);
	}

	componentDidMount(){
		$.ajax({
			url:'https://cdc-react.herokuapp.com/api/autores',
			dataType: 'json',
			success:function(resposta){
				this.setState({lista:resposta});
			}.bind(this)
		});
	}

	enviaForm(e){
		e.preventDefault();
		$.ajax({
			url:'https://cdc-react.herokuapp.com/api/autores',
			contentType: 'application/json',
			dataType: 'json',
			type: 'post',
			data: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
			success:function(resposta){
				console.log('enviado com sucesso');
				this.setState({lista:resposta});
			}.bind(this),
			error: function(resposta){
				console.log('erro');
			}
		});
	}

	setNome(e){
		this.setState({nome:e.target.value});
	}
	setEmail(e){
		this.setState({email:e.target.value});
	}
	setSenha(e){
		this.setState({senha:e.target.value});
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
						<form className='pure-form pure-form-aligned' onSubmit={this.enviaForm} method='post'>
							<div className='pure-control-group'>
								<label htmlFor='nome'>Nome</label>
								<input id='nome' type='text' name='nome' value={this.state.nome} onChange={this.setNome}></input>
							</div>
							<div className='pure-control-group'>
								<label htmlFor='e-mail'>E-mail</label>
								<input id='email' type='email' name='email' value={this.state.email} onChange={this.setEmail}></input>
							</div>
							<div className='pure-control-group'>
								<label htmlFor='senha'>Senha</label>
								<input id='senha' type='password' name='senha' value={this.state.senha} onChange={this.setSenha}></input>
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
											<tr key={autor.id}>
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
