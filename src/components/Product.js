import React from "react";
import {
    Container,
    View,
    Text,
    Thumbnail,
    Icon,
} from 'native-base';
import { FlatList } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MainComponent from './MainComponent'

//badan bayad b khode main component margin bottom bedam k in margin haye tak tak ro nadam inja...manzuram MB va MT has  &

class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: "iphone xr",cost:"850$",goodPic:require('../assets/media/img/iphone-xr.png'),color1:'#f5ed08',color2:'#f5ed08',color3:'#f5ed08',color4:'#f5ed08',color5:'#656563',heightPic:hp('17%'),widthPic:hp('15%'),MT:hp('2.9%'),MB:hp('0%') , header: true },
                { name: "huawei y6",cost:"235$",goodPic:require('../assets/media/img/huaweiy6.png'),color1:'#f5ed08',color2:'#f5ed08',color3:'#f5ed08',color4:'#f5ed08',color5:'#656563',heightPic:hp('17%'),widthPic:hp('13%'),MT:hp('2.9%'),MB:hp('0%') , header: false },
                { name: "surface pro 6",cost:"1000$",goodPic:require('../assets/media/img/surface-pro-6.png'),color1:'#f5ed08',color2:'#f5ed08',color3:'#f5ed08',color4:'#f5ed08',color5:'#f5ed08',heightPic:hp('13%'),widthPic:hp('20%'),MT:hp('2.9%'),MB:hp('2.9%'), header: false },
                { name: "HTC Flyer Tablet",cost:"800$",goodPic:require('../assets/media/img/flyer-htc-tablet.webp'),color1:'#f5ed08',color2:'#f5ed08',color3:'#f5ed08',color4:'#656563',color5:'#656563',heightPic:hp('13%'),widthPic:hp('20%'),MT:hp('2.9%'),MB:hp('2.9%'), header: false },
            ]
        };
    }

    componentDidMount=()=>{

    }




    renderItem = ({ item }) => {
        return (
            <View style={{
                marginTop:item.MT,
                marginBottom:item.MB,
                marginLeft:wp('5.5%'),
                borderWidth: .1,
                alignItems: 'center',
                height: hp('49%'),
                width: wp('42%'),
                borderRadius: hp('1%')
            }}>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: hp('1%'),
                    elevation: 6,
                    shadowColor: '#000000',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <Thumbnail square={true}
                               style={{height:item.heightPic, width: item.widthPic, marginTop: hp('2.5%')}}
                               source={item.goodPic}/>
                    <Text style={{textAlign: 'center', marginTop: hp('1.4%')}}>{item.name}</Text>
                    <View style={{flexDirection: 'row', marginTop: hp('2.5%')}}>
                        <Icon name={'star'} style={{color: item.color1}}/>
                        <Icon name={'star'} style={{color: item.color2}}/>
                        <Icon name={'star'} style={{color: item.color3}}/>
                        <Icon name={'star'} style={{color: item.color4}}/>
                        <Icon name={'star'} style={{color: item.color5}}/>
                    </View>
                    <Text style={{color: '#5992cf', fontSize: hp('4%'), marginTop: hp('1.5%')}}>{item.cost}</Text>

                    <View style={{
                        height: hp('4.3%'),
                        width: wp('37%'),
                        flexDirection: 'row',
                        marginTop: hp('2.5%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            backgroundColor: '#5992cf',
                            height: hp('5.5%'),
                            width: wp('10%'),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}><Thumbnail style={{height: hp('4.6%'), width: wp('8.5%')}}
                                      source={require('../assets/media/img/bag.png')}/>
                        </View>
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: hp('5.6%'),
                            width: wp('28%'),
                            backgroundColor: '#f2f2f2',
                        }}><Text style={{fontSize: hp('2.2%')}}>ADD TO CARD</Text>
                        </View>
                    </View>

                </View>
            </View>

        )

    };
    render() {
        return (
            <Container >
                <MainComponent navigation={this.props.navigation} menu={true} >
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.name}
                    numColumns={2}
                />
                </MainComponent>
            </Container>
        );
    }
}
export {Product}
