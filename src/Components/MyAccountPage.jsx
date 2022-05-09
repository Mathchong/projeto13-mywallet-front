import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import TokenContext from "./../context/TokenContext.js"
import { useEffect } from 'react/cjs/react.production.min';


export default function MyAccount() {
    const { token, setToken } = useContext(TokenContext);
    const [moviment,setMoviment] = useState([])
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(()=>{},[moviment])
    const promise = axios.get('http://localhost:5000/moviment',config)
    promise.then(response => {
        console.log(response);
    })
    promise.catch(err => {console.error(err);})
    return (
        <Account>
            <header>
                <h1>Olá! Nome do Contexto</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </header>

            <main className='movimentacao'>
                <div>
                    <article>
                        <div className="date">09/05</div>
                        <div className="text">Textinho</div>
                        <div className="value">R$ 59,90</div>
                    </article>
                    <h2 className='vazio'>Não há registros de entrada ou saida</h2>
                </div>
            </main>

            <navigate>
                <Link to='/newEntry'>
                <button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <span className="esquerda">Nova entrada</span>
                </button>
                </Link>
                <Link to='/newExpense'>
                <button>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <span className="esquerda">Nova Saida</span>
                </button>
                </Link>
            </navigate>
        </Account>
    )
}

const Account = styled.div`
    background-color: #64287c;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        width: 25px;
        flex: wrap;
    }

    button{
        position: relative;
        height: 114px;
        width: 155px;
        border-radius: 5px;
        border: none;
        background-color: #A328D6;

        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        color: #fff;
    }

    button ion-icon{
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 25px;
    }

    header{
        margin-top: 25px;
        display: flex;
        width: 326px;
        justify-content: space-between;

        font-family: Raleway;
        font-size: 26px;
        font-weight: 700;
        color: #FFF;
    }

    navigate{
        margin-top: 13px;
        display: flex;
        width: 326px;
        justify-content: space-between;
    }

    .movimentacao{
        height: 446px;
        width: 326px;
        border-radius: 5px;
        background-color: #FFF;
        margin-top: 25px;
    }

    .movimentacao .vazio{
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
    }
    article{
        background-color: grey;
        display: flex;
        align-items: center;
    }
    article .date{
        width: 48px;
        margin-left: 12px;
        height: 25px;

        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: #C6C6C6;
    }

    article .text{
        width: 145px;
        margin-left: 10px;

        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
    }

    article .value{
        
    }
`