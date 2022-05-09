import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import TokenContext from "./../context/TokenContext.js"

export default function LogIn() {
    const { token, setToken } = useContext(TokenContext);
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate();

    function mandaProBack(e) {
        e.preventDefault()
        const obj = {
            email,
            senha
        };
        console.log(obj)
        logar(obj);
    }

    function logar(obj) {
        const promise = axios.post("http://localhost:5000/login", obj)
        promise.then((response) => {
            console.log(response.data)
            setToken(response.data)
            navigate('/myAccount')
        })
        promise.catch((error) => {
            console.log(error)
        })
    }

    return (
        <LoginPage>
            <h1>MyWallet</h1>
            <form onSubmit={(e) => { mandaProBack(e) }}>
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder=" E-mail" />
                <input required type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder=" Senha" />
                <button type="submit">Entrar</button>
            </form>
            <Link className="toRegister" to='/register'>
                <h2>Primeira vez? Cadastre-se!</h2>
            </Link>
        </LoginPage>
    )
}

const LoginPage = styled.div`
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
    h2{
        font-family: Raleway;
        font-size: 15px;
        font-weight: 700;
        color: #fff;
        margin-top: 32px;
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