import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import TokenContext from "./../context/TokenContext.js"

import RegisterPage from './RegisterPage.jsx'
import LogIn from './LogInPage.jsx'
import MyAccount from './MyAccountPage.jsx'
import NovaEntrada from "./EntradaPage.jsx";
import NovaSaida from './SaídaPage.jsx'


export default function App() {
    const [token, setToken] = useState('');

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LogIn />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/myAccount' element={<MyAccount />} />
                    <Route path='newEntry' element={<NovaEntrada />} />
                    <Route path='newExpense' element={<NovaSaida />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}