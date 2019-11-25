import React from "react";
import {
    Content,
    View,
    Text,
    Button,
    Thumbnail,
    DeckSwiper,
    Card,
    CardItem,
} from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MainComponent from './MainComponent'

const cards=[{number:1,txt:'Samsung Galaxy S9',txt2:'Wonderful cellphone !',imag:require('../assets/media/img/third.jpg')},
    {number:2,txt:'IPhone 8',txt2:'You have the Best !',imag:require('../assets/media/img/Apple-iOS-11-Leaks-iPhone-X-iPhone-8-Nomenclatures-Ditching-S-Suffix.jpg')},
    {number:3,txt:'HTC Desire',txt2:'You have the state of art !',imag:require('../assets/media/img/htc-u11-2q4d100-original-imaf24fftx8nsdrc.jpeg')},

]

class Home extends React.Component {
    constructor(props) {
        super(props)
        //left and right work same!!!! &
        //i write 2 useless model :))  &
        this.state = {
            dovomi:2
        }
    }
    dovom=()=> // not worked (i remember ref stuff helped deckswiper work out of there)
    {
        //add change button color in future (but it's still awful cause you cant go to specific slide + above problems)
        this._deckSwiper._root.swipeLeft()
    }


    render() {
        return (

            <Content>
                <MainComponent navigation={this.props.navigation} menu={true}>
                <View style={{width:wp('90%'),alignSelf:'center'}}>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={cards}
                        renderItem={item =>

                            <Card  transparent={true} noShadow={true} style={{elevation: 6,borderRadius:hp('3%'),marginTop:hp('5.3%')}}>

                                <CardItem style={{justifyContent:'center'}}>
                                    <Thumbnail style={{flex:1,borderRadius:hp('1.1%'),height:hp('35%'),marginTop:hp('-2%'),marginBottom:hp('-2.1%'),marginLeft:wp('-4.7%'),marginRight:wp('-4.7%'),width:wp('30%') }} source={item.imag}></Thumbnail>
                                    <Text style={{position:'absolute',color:'white',top:hp('23.5%'),fontWeight:'bold',fontSize:hp('3%')}}>{item.txt}</Text>
                                    <Text style={{position:'absolute',color:'white',top:hp('27.5%'),fontSize:hp('2.5%')}}>{item.txt2}</Text>
                                    <View style={{position:'absolute',flexDirection:'row'}}>

                                        <Button transparent={true} style={{top:hp('15.2%'),height:0}} onPress={() => this._deckSwiper._root.swipeLeft()}><View style={{height:hp('1%'),width:wp('8.5%'),backgroundColor:'#6FA7E4'}}></View></Button>
                                        <Button transparent={true} style={{top:hp('15.2%'),height:0,marginLeft:hp('1%')}} onPress={() => this._deckSwiper._root.swipeLeft()}><View style={{height:hp('1%'),width:wp('8.5%'),backgroundColor:'#888'}}></View></Button>
                                        <Button transparent={true} style={{top:hp('15.2%'),height:0,marginLeft:hp('1%')}} onPress={() => this._deckSwiper._root.swipeRight()}><View style={{height:hp('1%'),width:wp('8.5%'),backgroundColor:'#888'}}></View></Button>
                                        {/*<Button transparent={true} style={{marginLeft:hp('1%') ,top:hp('15.2%'),height:0}} onPress={()=>item.number===this.state.dovomi ?  this._deckSwiper._root.swipeLeft(): this.dovom.bind(this)}><View style={{height:hp('1%'),width:wp('8.5%'),backgroundColor:'#888'}}></View></Button>*/}
                                        {/*<Button transparent={true} style={{marginLeft:hp('1%') ,top:hp('15.2%'),height:0}} onPress={()=>item.number==3 ? true : (item.number==2 ? this._deckSwiper._root.swipeRight() : this._deckSwiper._root.swipeLeft()) }><View style={{height:hp('1%'),width:wp('8.5%'),backgroundColor:'#888'}}></View></Button>*/}
                                    </View>

                                </CardItem>

                            </Card>
                        }
                    />


                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:hp('50%'),width:wp('90%'),alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{elevation:4,backgroundColor:'yellow',shadowColor:'#000000',height:hp('5%'),width:wp('27%')}}><Thumbnail square={true} style={{height:hp('10%'),width:wp('28%'),marginTop:hp('-4.8%'),borderRadius:hp('.8%')}} source={require('../assets/media/img/home1.png')}/></View>
                    <View style={{elevation:4,backgroundColor:'yellow',shadowColor:'#000000',height:hp('5%'),width:wp('27%')}}><Thumbnail square={true} style={{height:hp('10%'),width:wp('28%'),marginTop:hp('-4.8%'),borderRadius:hp('.8%')}} source={require('../assets/media/img/home2.png')}/></View>
                    <View style={{elevation:4,backgroundColor:'yellow',shadowColor:'#000000',height:hp('5%'),width:wp('27%')}}><Thumbnail square={true} style={{height:hp('10%'),width:wp('28%'),marginTop:hp('-4.8%'),borderRadius:hp('.8%')}} source={require('../assets/media/img/home3.png')}/></View>
                </View>
                <View>
                    <Text style={{marginTop:hp('5%'),marginLeft:wp('6%'),fontSize:hp('3.5%'),borderLeftWidth:3.5,borderColor:'#6FA7E4',paddingLeft:wp('3%')}}>Services</Text>
                </View>

                {/*bellow Services*/}
                <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('90%'),alignSelf:'center',marginTop:hp('2.5%')}}>
                    <View style={{borderWidth:.1,alignItems:'center',height:hp('30%'),width:wp('42%'),borderRadius:hp('1%')}}>
                        <View style={{backgroundColor:'white',borderRadius:hp('1%'),elevation:6,shadowColor:'#000000',height:'100%',width:'100%',alignItems:'center'}}>
                            <Thumbnail style={{marginTop:hp('2%')}} source={require('../assets/media/img/android.png')}/>
                            <Text>Android</Text>
                            <Text style={{fontSize:hp('2%'),marginTop:hp('2%'),textAlign: 'center',color:'gray',marginLeft:wp('1.5%'),marginRight:wp('1.5%')}}>Suppose shyness say ten behaved morning</Text>
                        </View>
                    </View>
                    <View style={{borderWidth:.1,alignItems:'center',height:hp('30%'),width:wp('42%'),borderRadius:hp('1%')}}>
                        <View style={{backgroundColor:'white',borderRadius:hp('1%'),elevation:6,shadowColor:'#000000',height:'100%',width:'100%',alignItems:'center'}}>
                            <Thumbnail style={{marginTop:hp('2%')}} source={require('../assets/media/img/apple.png')}/>
                            <Text>Apple</Text>
                            <Text style={{fontSize:hp('2%'),marginTop:hp('2%'),textAlign: 'center',color:'gray',marginLeft:wp('1.5%'),marginRight:wp('1.5%')}}>Suppose shyness say ten behaved morning</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,width:wp('90%'),alignSelf:'center',marginBottom:hp('3.4%')}}>
                    <View style={{borderWidth:.1,alignItems:'center',height:hp('30%'),width:wp('42%'),borderRadius:hp('1%')}}>
                        <View style={{backgroundColor:'white',borderRadius:hp('1%'),elevation:6,shadowColor:'#000000',height:'100%',width:'100%',alignItems:'center'}}>
                            <Thumbnail style={{marginTop:hp('2%')}} source={require('../assets/media/img/web.png')}/>
                            <Text>Apple</Text>
                            <Text style={{fontSize:hp('2%'),marginTop:hp('2%'),textAlign: 'center',color:'gray',marginLeft:wp('1.5%'),marginRight:wp('1.5%')}}>Suppose shyness say ten behaved morning</Text>
                        </View>
                    </View>
                    <View style={{borderWidth:.1,alignItems:'center',height:hp('30%'),width:wp('42%'),borderRadius:hp('1%')}}>
                        <View style={{backgroundColor:'white',borderRadius:hp('1%'),elevation:6,shadowColor:'#000000',height:'100%',width:'100%',alignItems:'center'}}>
                            <Thumbnail style={{marginTop:hp('2%')}} source={require('../assets/media/img/windows.png')}/>
                            <Text>Apple</Text>
                            <Text style={{fontSize:hp('2%'),marginTop:hp('2%'),textAlign: 'center',color:'gray',marginLeft:wp('1.5%'),marginRight:wp('1.5%')}}>Suppose shyness say ten behaved morning</Text>
                        </View>
                    </View>
                </View>
                </MainComponent>
            </Content>

        );
    }
}

export {Home}