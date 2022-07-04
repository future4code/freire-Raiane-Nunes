import React from "react";
import axios from 'axios'

class Form extends React.Component {
    state = {
        usuario: [],
        imputName: "",
        imputEmail: ""
    }
    onChangeName = (e) => {
        this.setState({ imputName: e.target.value })
    }
    onChangeEmail = (e) => {
        this.setState({ imputEmail: e.target.value })
    }

    criarUsuario = (e) => {
        const body = {
            name: this.state.imputName,
            email: this.state.imputEmail

        }
        const request = axios.post
            ('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
                body,
                {
                    headers: {
                        Authorization: 'raiane-ancel-freire'
                    }
                })
        request
            .then((response) => { alert("seu usuário foi cadastrado com sucesso!") })
            .catch((error) => { alert("não foi possível cadastrar usuário.") })

    }
    render() {
        return (
            <div>
                <h1>Cadastro</h1>
                <section>
                    <input
                        value={this.state.imputName}
                        onChange={this.onChangeName}
                        placeholder="Digite seu Nome"
                    />
                    <input
                        value={this.state.imputEmail}
                        onChange={this.onChangeEmail}
                        placeholder="Digite seu E-mail"
                    />
                    <button onClick={this.criarUsuario}>enviar</button>
                </section>
                <button onClick={this.props.onClickVerLista}>Trocar de Tela</button>
            </div>
        )
    }
}

export default Form