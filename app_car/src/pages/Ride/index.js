import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Background, Container } from './styles'
import MapRender from '../../components/Map'

Icon.loadFont();
function Ride() {

    return(
        <Background>
            <Container>
                <MapRender/>
            </Container>
        </Background>
    )
}

Ride.navigationOptions = {
    tabBarLabel: 'Viagem',
    tabBarIcon: ({tintColor}) => (
        <Icon name="navigation" size={40} color={tintColor}/>
    )
}

export default Ride
