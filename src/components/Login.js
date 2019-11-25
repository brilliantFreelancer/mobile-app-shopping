import React from "react";
import {
    Container,
    Content,
    Item,
    Input,
    Text,
    Button,
    Thumbnail, Toast,
} from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MainComponent from './MainComponent'
import {Provider} from "react-redux";
import {createStore} from 'redux'
import reducer from '../Reducer/index'
import {userChange} from "../Action/index";
import {passChange} from "../Action/index";
import {connect} from 'react-redux'


const mapStateToProps =(state)=>{return{
    username:state.auth.username,
    password:state.auth.password
}}


// const lck = require('../assets/media/img/lock.png')
// const unlck = require('../assets/media/img/unlock.png')


class Login extends React.Component {

    constructor(props) {
        super(props)
    }


onUserChange=(text)=>{
    this.props.userChange(text)
}

onPassChange=(text)=>{
    this.props.passChange(text)
}




    authenticate=()=> {
        // if (this.props.username==='Hamed' && this.props.password==='Hamed' )
        // if (1==1)
            this.props.navigation.navigate('Home')

            
    }








    // lckOrNot = () => {
    //     this.setState({
    //         secureOrNot: !this.state.secureOrNot,
    //     })
    //     if (this.state.icon == lck) {
    //         this.setState({
    //             icon: unlck
    //         })
    //     } else {
    //         this.setState({
    //             icon: lck
    //         })
    //     }
    // }




    render() {
        return (
            <Provider store={createStore(reducer)}>
            <Container >

                {/*alignItems to father(header) => justify vertically text in header*/}

                <Content >
                    <MainComponent menu={false}>
                    <Text style={{textAlign:'center',fontSize:hp('4%'),margin:hp('4%')}}>Login</Text>
                    {/*<Form style={{marginTop:hp('2%'),flex:1}}>*/}
                        <Item style={{
                            width:wp('90%'),
                            alignSelf:'center'
                        }}>
                            <Input style={{
                                borderWidth:.7,
                                borderColor:'#c7c2c2',
                                borderRadius:hp('.4%'),
                                marginBottom:hp('2%'),
                                height:hp('7%')
                            }}
                                placeholder="username"
                                onChangeText={this.onUserChange.bind(this)}
                                value={this.props.username}
                            />
                        </Item>
                        <Item style={{width:wp('90%'),alignSelf:'center'}}>
                            <Input style={{borderWidth:.7,
                                borderColor:'#c7c2c2',
                                borderRadius:hp('.4%'),
                                height:hp('7%')}}
                                placeholder="password"
                                secureTextEntry={true}
                                onChangeText={this.onPassChange.bind(this)}
                                value={this.props.password}
                            />
                        </Item>
                    {/*</Form>*/}
                        {/*chera ba justify content doros shod??*/}
                        <Text style={{marginTop:hp('2%'),marginLeft:wp('5%'),marginRight:wp('2%')}}>Forgot password?</Text>
                        <Button  style={{height:hp('6%'),justifyContent:'center', backgroundColor:'#5197E2',width:wp('90%'),alignSelf:'center',margin:hp('3%'),alignItems:'center',}} onPress={this.authenticate}><Text style={{fontSize:hp('2.5%')}}>Login</Text></Button>


                    <Text style={{alignSelf:'center',marginRight:wp('2%'),color:'#c7c2c2'}}>Not Registered?<Text> Create an account</Text></Text>
                    {/*inke width bishtare chon mige x darsade arz => chon arz kuchektar pas bara inke andaze ertefa behesh arz bedim bayad ...*/}
                    {/*<Thumbnail style={{alignSelf:'center',height:hp('25%'),width:wp('50%'),marginTop:hp('5%')}} source={require('../assets/media/img/logo.png')}/>*/}
                    <Thumbnail style={{alignSelf:'center',height:hp('25%'),width:wp('50%'),marginTop:hp('5%')}} source={require('../assets/media/img/Shop-icon.png')}/>
                    </MainComponent>
                </Content>
            </Container>
            </Provider>
        );
    }
}


export default connect (mapStateToProps,{userChange,passChange})(Login)
// export {Login}
