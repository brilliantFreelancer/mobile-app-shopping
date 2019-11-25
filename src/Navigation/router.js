import React from "react"
import {createAppContainer,createDrawerNavigator } from "react-navigation";   //previously:createBottomTabNavigator
import {Login,Home, Product,Test} from "../components/index"
import MenuDrawer from '../components/MenuDrawer'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// const DrawerConfig={initialRouteName: "Login",drawerPosition: 'right',
// contentComponent:({navigation})=> {return (<MenuDrawer />)}
//  }

const Draw=createDrawerNavigator({

        Login: {
            screen: Login,
            navigationOptions:{
                drawerLockMode: 'locked-closed'
            }
        },
        Home: {
            screen: Home,
            navigationOptions:{
                drawerLockMode: 'locked-closed'
            }
        },
        Product: {
            screen: Product,
            navigationOptions:{
                drawerLockMode: 'locked-closed'
            }
        },
    // Test:{
    //         screen:Test
    // }
// },{initialRouteName: "Login",drawerPosition: 'right'},DrawerConfig
//     },{contentComponent: props => <MenuDrawer {...props} /> , drawerPosition: 'right'}
},{
    initialRouteName: "Login",
    drawerWidth:wp('83%'),
    drawerBackgroundColor: "#6FA7E499",
    contentComponent: props => <MenuDrawer {...props}  />
})

export default createAppContainer(Draw);
