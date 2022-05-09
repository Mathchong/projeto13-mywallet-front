import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import TokenContext from "./../context/TokenContext.js"

export default function NovaEntrada() {
    const [valor, setValor] = useState('')
    const [descricao, setDescricao] = useState('')
    const { token, setToken } = useContext(TokenContext);
    const navigate = useNavigate();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function mandaProBack(e) {
        e.preventDefault()
        const obj = {
            valor,
            descricao
        };
        console.log(obj)
        salvar(obj);
    }
    function salvar(obj) {
        const promise = axios.post("http://localhost:5000/newEntry", obj, config);
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
        <NewEntry>
            <header>
                <h1>Nova Entrada</h1>
            </header>
            <form onSubmit={(e) => { mandaProBack(e) }}>
                <input required type="number" min="0" step="any" placeholder=" Valor" value={valor} onChange={e => setValor(e.target.value)} />
                <input required type="text" placeholder=" Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                <button>Salvar entrada</button>
            </form>
        </NewEntry>
    )
}


const NewEntry = styled.div`
    background-color: #64287c;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    header{
        margin-top: 25px;
        margin-bottom: 40px;
        display: flex;
        width: 326px;
        justify-content: space-between;

        font-family: Raleway;
        font-size: 26px;
        font-weight: 700;
        color: #FFF;
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
    input[type='number']{     
        -moz-appearance:textfield; 
    }  
    
    input::-webkit-outer-spin-button, 
    input::-webkit-inner-spin-button {
        -webkit-appearance: none; 
    }
`
