import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MarckerCarSocial from '../../components/Marcker'
import { Background, Container } from './styles'
import api from '../../services/apis'

function MapRender(coords) {
    let origin = []
    const [chauffeur, chauffeurSet] = useState(origin)
    const [renderMap, setRenderMap] = useState(false)
    
    async function getChauffeur() {
        await api.get(`/rides/v1/near?distance=5000&latitude=${coords.data.latitude}&longitude=${coords.data.longitude}`)
        .then((res)=>{
            res.data.map((item)=>{
                let car = {key: item.id, coords:{latitude: item.coords.latitude, longitude: item.coords.longitude}, name: item.name, description: `${item.car.model} - ${item.car.plate}`, profile:"chauffeur", recepient: coords }
                origin.push(car)
            })
            chauffeurSet(origin)
        })
        .catch((err)=>{alert(err)})
    }    

    useEffect(()=>{
        if (coords.data !== null) {
            getChauffeur()
            setRenderMap(true)
        }
    },[coords])

    return(
        <Background>
            <Container>
                { renderMap? (
                    <MapView
                        showsUserLocation
                        followsUserLocation
                        provider={PROVIDER_GOOGLE}
                        showsTraffic={true}
                        style={styles.map}
                        region={{
                            latitude: coords.data.latitude,
                            longitude: coords.data.longitude,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                            }}>
                        <MarckerCarSocial data={chauffeur}/>          
                    </MapView>
                ): null }
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