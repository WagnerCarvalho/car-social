import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routers'

function App() {
    return(
        <>
            <StatusBar backgroundColor="#262630" barStyle="light-content"/>
            <Routes/>
        </>
    )
}

export default App