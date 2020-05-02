import React from 'react'
import { Marker } from 'react-native-maps'
import { Image, View } from 'react-native'

function MarkerCarSocial(chauffeur) {
    return(
        <>
            {chauffeur.data.map((items)=>{
                return(
                    <Marker
                        coordinate={items.coords}
                        title={items.title}
                        description={items.description}>
                        <Image source={items.profile === 'user'? require('../../assets/user.png'): require('../../assets/car.png')} style={{height:40, width:20}} />
                    </Marker>
                )
            })}
        </>
    )
}

export default MarkerCarSocial