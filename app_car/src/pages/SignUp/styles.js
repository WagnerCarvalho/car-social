import styled from 'styled-components'

export const Background = styled.View`
    flex: 1;
`

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #330066;
`

export const AreaInput = styled.View`
    flex-direction: row;
`

export const Input = styled.TextInput`
    background: #FFF;
    color: #222;
    font-size: 17px;
    border-radius: 7px;
    width: 90%;
    margin-bottom: 15px;
    padding: 10px;
`

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #7f00ff;
    height: 45px;
    width: 90%;
    border-radius: 7px;
    margin-top: 10px;
`

export const SubmitText = styled.Text`
    color: #fff;
    font-size: 18px;
`

export const SignUpText = styled.Text`
    margin-bottom: 15px;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
`

export const SignInButton = styled.TouchableOpacity`
    margin-top: 10px;
`

export const SignInText = styled.Text`
    color: #fff;
    padding-bottom: 12px;
    font-size: 15px;
`