import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
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

// const App = () => (
//     <Provider store={store}>
//         <Header />
//         <Main />
//         <Footer />
//     </Provider>
// )
// export default App
