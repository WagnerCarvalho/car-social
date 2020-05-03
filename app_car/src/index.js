import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routers'

console.disableYellowBox = true

function App() {
    return(
        <>
            <StatusBar backgroundColor="#262630" barStyle="light-content"/>
            <Routes/>
        </>
    )
}

export default App