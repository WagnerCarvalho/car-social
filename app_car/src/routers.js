import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Preload from './pages/Preload'
import Profile from './pages/Profile'
import Ride from './pages/Ride'

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Sign: createSwitchNavigator({
                Preload,
                SignIn,
                SignUp
            }),
            App: createBottomTabNavigator({
                Profile,
                Ride
            }, {
                tabBarOptions: {
                    showLabel: false,
                    activeTintColor: '#fff',
                    style: {
                        backgroundColor: '#330066'
                    }
                }   
            })
        },
    ),
)

export default Routes