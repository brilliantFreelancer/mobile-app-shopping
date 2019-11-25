import React from "react";
import {
    View,
    Icon,
    Button,
    Container,
    Header,
    Content,
    Text,
    Thumbnail,
    Badge
} from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class MenuDrawer extends React.Component{

    navLink=(nav,text)=>{
        return(
            <Button transparent={true} onPress={()=> this.props.navigation.navigate(nav)}>
                <Text style={{color:'white'}}>{text}</Text>
            </Button>
        )
    }
    render()
    {
        return(
            <View style={{flex:1,width: wp('100%')}}>

                <View style={{flexDirection:'row',marginLeft:wp('7%'),marginTop:hp('2.8%'),width:wp('80%')}}>
                    <Thumbnail style={{height:hp('16%'),width:wp('30%'),marginLeft:wp('2.5%')}} source={require('../assets/media/img/man.png')}/>
                    <View style={{marginTop:hp('6%'),marginLeft:wp('7.5%'),alignItems:'center',marginRight:wp('1%')}}>
                        <Text style={{color:'white',fontSize:wp('5.2%'),fontWeight:'bold',marginLeft:wp('0%')}}>Alan Turner</Text>
                        <Text style={{color:'white',fontSize:wp('4.7%'),marginLeft:wp('0%')}}>Customer</Text>
                    </View>
                </View>

                <View style={{marginLeft:wp('6.5%'),marginTop:hp('2.9%')}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name="home" style={{color:'white'}}/>
                        {this.navLink('Home','Home')}
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name="cart" style={{color:'white'}}/>
                        {this.navLink('Product','Shop')}
                        <Badge style={{alignSelf:'center',marginLeft:wp('30%')}}><Text>4</Text></Badge>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name="log-out" style={{color:'white'}}/>
                        {this.navLink('Login','Log Out')}
                    </View>


                </View>


            </View>
        )
    }
}