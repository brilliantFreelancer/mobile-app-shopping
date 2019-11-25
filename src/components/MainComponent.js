import React from "react";
import {Text,Icon,Header,View} from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class MenuButton extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
     menu:true
        }
    }
//besyar kasif va tahavo avar! bayad poshte Icon bashe faqat ama sare style bade man nashode feelan !
    render()
    {
        return(
            this.props.menu ?
                <View>
                    <Header style={{backgroundColor:'#6FA7E4',alignItems:'center',height:hp('10%')}}>
                        <Icon  name="md-menu" style={{left:wp('-31%'),color:'white'}} onPress={()=>this.props.navigation.toggleDrawer()}/>
                        <Text style={{color:'white',fontSize:hp('4.2%'),fontWeight:'bold',left:wp('-2.9%')}}>Shop</Text>
                    </Header>
                    {this.props.children}
                </View>
                :
                <View>
                    <Header style={{backgroundColor:'#6FA7E4',alignItems:'center',justifyContent:'center',height:hp('10%')}}>
                        <Text style={{color:'white',fontSize:hp('4.2%'),fontWeight:'bold'}}>Shop</Text>
                    </Header>
                    {this.props.children}
                </View>
        )
    }

}
