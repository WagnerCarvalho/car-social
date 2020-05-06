import React, {useState, useEffect} from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Background, Container, ImageProfile, Logout, TextButton } from './styles'
import ContentProfile from '../../components/ContentProfile'
import AsyncStorage from '@react-native-community/async-storage';


Icon.loadFont();
function Profile({navigation}) {
    const [profile, setProfile] = useState('')

    async function backScreen() {
        navigation.navigate('SignIn')
    }

    useEffect(()=>{
        async function getProfile() {
            await AsyncStorage.getItem('profile').then((profile)=>{
                setProfile(JSON.parse(profile))
            })
        }
        getProfile()
    },[])

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