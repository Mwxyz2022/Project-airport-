import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'

// import store from './store'

const App = () => (
    <BrowserRouter>
        <Header />
        <Main />
        <Footer />
    </BrowserRouter>
)
export default App
