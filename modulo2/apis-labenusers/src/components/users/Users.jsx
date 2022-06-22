import React from "react";
import axios from "axios";

class Users extends React.Component {
    state = {
        lista: []
    }

    componentDidMount = () => {
        this.getUsers()
    }

    getUsers = () => {
        const request = axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: { Authorization: "raiane-ancel-freire" }
            }
        )
            .then((response) => {
                this.setState({ lista: response.data })
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    delUsers = (id) => {
        const request = axios.delete(
            ('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'+id),
            {
                headers: {
                    Authorization: 'raiane-ancel-freire'
                }
            }

        )
        request
          .then((response)=>{alert("usuário foi deletado com sucesso!") })
          .catch((error)=>{alert("não foi possível deletar usuário.")})
    } 

    render() {
        const listaAtualizada = this.state.lista.map((usuario) => {
            return (
                <div key={usuario.id}>
                    {usuario.name} 
                    <button className="Vermelho" 
                        // onClick={this.delUsers(usuario.id)}
                    >X</button>
                </div>
            )
        })
        return (
            <div>
                <h1>Tela de Detalhes</h1>
                <section>
                    {listaAtualizada}
                </section>
                <button onClick={this.props.onClickCadastrar}>Trocar de Tela</button>
            </div>
        )
    }
}

export default Users