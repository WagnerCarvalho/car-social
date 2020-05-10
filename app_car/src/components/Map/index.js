import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MarckerCarSocial from '../../components/Marcker'
import { Background, Container } from './styles'

function MapRender() {
    let origin = [{key:0, coords:{latitude: -23.5492243, longitude:-46.5813785}, title:"Eu (Wagner)", description:"Aguardando Motorista", profile:"user"}]
    const [chauffeur, chauffeurSet] = useState(origin)

    useEffect(()=>{
        function getChauffeur() {
            origin.push(
                {key:origin.length+1, coords:{latitude: -23.550055011589965, longitude:-46.58256232738495}, title:"Motorista Feliz", description:"Gol 1.6 - Placa OHL 2010", profile:"chauffeur"},
                {key:origin.length+2, coords:{latitude: -23.542083917796194, longitude:-46.58601097762585}, title:"Motorista com Reliz", description:"Uno 1.0 - Placa FBC 3422", profile:"chauffeur"},
                {key:origin.length+3, coords:{latitude: -23.554676881238755, longitude:-46.58105693757534}, title:"Motorista com Triste", description:"Golf 2.0 - Placa GFE 0022", profile:"chauffeur"},
                {key:origin.length+4, coords:{latitude: -23.54350395985448, longitude:-46.577389016747475}, title:"Motorista com Triste", description:"Satana 2.0 - Placa REJ 2072", profile:"chauffeur"},
                {key:origin.length+5, coords:{latitude: -23.554676881238755, longitude:-46.586420349776745}, title:"Motorista com Triste", description:"KA 2.0 - Placa GGE 0342", profile:"chauffeur"},
                {key:origin.length+6, coords:{latitude: -23.54670606768003, longitude:-46.58456426113844}, title:"Motorista com Triste", description:"Fiesta 2.0 - Placa IFM 1234", profile:"chauffeur"}
            )
            chauffeurSet(origin)
        }
        getChauffeur()
    },[])

    return(
        <Background>
            <Container>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    showsTraffic={true}
                    style={styles.map}
                    region={{
                        latitude: -23.5492243,
                        longitude: -46.5813785,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                        }}>
                    <MarckerCarSocial data={chauffeur}/>          
                </MapView>
            </Container>
        </Background>
    )
}

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});

export default MapRender