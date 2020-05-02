import React, {useState} from 'react'
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Background, Container, ImageProfile, Logout, TextButton } from './styles'
import ContentProfile from '../../components/ContentProfile'


Icon.loadFont();
function Profile({navigation}) {
    let dataProfile = {"name": "Wagner Silva de Carvalho", "email": "wcarvalhoti@gmail.com", "phone": "11979902959"}
    const [profile, setProfile] = useState(dataProfile)

    function backScreen() {
        console.log(navigation.state.params)
        navigation.navigate('SignIn')
    }

    return(
        <Background> 
            <Container>
                <SafeAreaView style={{alignItems: 'center'}}>   
                    <Logout>
                        <TouchableOpacity onPress={backScreen} style={{marginLeft:300}}>
                            <TextButton>voltar</TextButton>
                        </TouchableOpacity> 
                    </Logout>
                    <ImageProfile source={require('../../assets/midia-social.png')}/>
                    <ContentProfile data={profile}/>
                </SafeAreaView>
            </Container>
        </Background>
    )
}

Profile.navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({tintColor}) => (
        <Icon name="account-box" size={40} color={tintColor}/>
    )
}

export default Profile