import React from 'react'
import { Marker } from 'react-native-maps'
import { Image } from 'react-native'

function MarkerCarSocial(chauffeur) {
    return(
        <>
            {chauffeur.data.map((items)=>{
                return(
                    <Marker
                        coordinate={{"latitude": parseFloat(items.coords.latitude), "longitude": parseFloat(items.coords.longitude)}}
                        title={items.name}
                        description={items.description}>
                        <Image source={items.profile === 'user'? require('../../assets/user.png'): require('../../assets/car.png')} style={{height:40, width:20}} />
                    </Marker>
                )
            })}
        </>
    )
}

export default MarkerCarSocial