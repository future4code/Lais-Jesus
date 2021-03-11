import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorComentario: "",
	}

	onChangeComentario = (event) => {
		this.setState({ valorComentario: event.target.value})
		
	}

	aoEnviar = () => {
		console.log(this.state.valorComentario);
		this.setState({
			valorComentario: "",
		})
	};

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.aoEnviar}>Enviar</button>
		</div>
	}
}
