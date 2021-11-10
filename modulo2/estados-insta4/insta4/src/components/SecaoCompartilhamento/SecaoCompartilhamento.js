import React, {Component} from 'react'
import styled from 'styled-components'

const CompartilhamentoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputCompartilhamento = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoCompartilhamento extends Component {
	state = {
		value: ''
	}

	onChangeCompartilhamento = (event) => {
		this.setState({
			value: event.target.value
		})
	}

	render() {
		return <CompartilhamentoContainer>
			<InputCompartilhamento
				placeholder={'Publicação'}
				value={this.state.value}
				onChange={this.onChangeCompartilhamento}
			/>
			<button onClick={this.props.twitter}>Twiter</button>
      <button onClick={this.props.facebook}>Facebook</button>
      <button onClick={this.props.instagram}>Instagram</button>

		</CompartilhamentoContainer>
	}
}