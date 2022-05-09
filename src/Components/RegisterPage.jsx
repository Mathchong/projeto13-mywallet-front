import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from "axios";
import styled from "styled-components";
import TokenContext from "./../context/TokenContext.js"



export default function RegisterPage() {
    const { token, setToken } = useContext(TokenContext);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [repetir_senha, setRepetir_senha] = useState('')

    function cadastrar(obj) {
        const promise = axios.post("http://localhost:5000/register", obj)
        promise.then((response) => {
            console.log(response)
            alert('Conta Criada com Sucesso')

        })
        promise.catch((error) => {
            console.log(error)
        })
    }

    function mandaProBack(e) {
        e.preventDefault()
        const obj = {
            name,
            email,
            senha,
            repetir_senha
        };
        console.log(obj)
        cadastrar(obj);
    }

    return (
        <TelaRegistro>
            <h1>MyWallet</h1>
            <form onSubmit={(e) => { mandaProBack(e) }}>
                <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder=" Nome" />
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder=" E-mail" />
                <input required type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder=" Senha" />
                <input required type="password" value={repetir_senha} onChange={e => setRepetir_senha(e.target.value)} placeholder=" Confirme a Senha" />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">
                <h2>Já tem uma conta? Entre agora!</h2>
            </Link>
        </TelaRegistro>
    )
}

const TelaRegistro = styled.div`
    background-color: #64287c;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 95px;
        margin-bottom: 28px;
        font-family: Saira Stencil One;
        font-size: 32px;
        font-weight: 400;
        color: #fff;
    }
    h2{
        font-family: Raleway;
        font-size: 15px;
        font-weight: 700;
        color: #fff;
        margin-top: 32px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        height: 58px;
        width: 326px;
        border-radius: 5px;
        margin-bottom: 13px;
        border: none;
        font-size: 20px;
        color: #000000;
    }
    input::placeholder {
        color: #000000;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
    }
    button{
        background-color: #A328D6;
        height: 46px;
        width: 326px;
        border-radius: 5px;
        border: none;

        font-family: Raleway;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        color: #FFFFFF;
        }
`