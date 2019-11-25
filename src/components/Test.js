import React from "react";
import {
    Container,
    Header,
    Content,
    Form,
    View,
    Input,
    Text,
    Button,
    Thumbnail,
    StyleProvider,
    DeckSwiper,
    Card,
    CardItem,
    Left,
    Body,
    Icon,
} from 'native-base';
import { FlatList } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MainComponent from './MainComponent'


class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: "Pestashu",cost:"300$",goodPic:require('../assets/media/img/pest.jpg'),color1:'#f5ed08',color2:'#f5ed08',color3:'#f5ed08',color4:'#656563',color5:'#656563',heightPic:hp('13.6%'),widthPic:hp('20%'), header: true },
                { name: "Zaffron",cost:"700$",goodPic:require('../assets/media/img/z.png'),color1:'#f5ed08',color2:'#f5ed08',color3:'#f5ed08',color4:'#f5ed08',color5:'#656563',heightPic:hp('15%'),widthPic:hp('22%'), header: false },
                { name: "Carpet",cost:"800$",goodPic:require('../assets/media/img/carpet.png'),color1:'#f5ed08',color2:'#f5ed08',color3:'#f5ed08',color4:'#f5ed08',color5:'#f5ed08',heightPic:hp('17%'),widthPic:hp('17.5%'), header: false },
                { name: "Pot",cost:"350$",goodPic:require('../assets/media/img/pot.jpg'),color1:'#f5ed08',color2:'#f5ed08',color3:'#656563',color4:'#656563',color5:'#656563',heightPic:hp('17%'),widthPic:hp('17%'), header: false },

            ],
            stickyHeaderIndices: []
        };
    }
    componentWillMount() {
        var arr = [];
        this.state.data.map(obj => {
            if (obj.header) {
                arr.push(this.state.data.indexOf(obj));
            }
        });
        arr.push(0);
        this.setState({
            stickyHeaderIndices: arr
        });
    }
    renderItem = ({ item }) => {

            return (

                    <View style={{
                        marginTop:hp('3%'),

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
                                height: hp('6%'),
                                width: wp('37%'),
                                flexDirection: 'row',
                                marginTop: hp('2.5%'),
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <View style={{
                                    backgroundColor: '#5992cf',
                                    height: hp('5.5%'),
                                    width: wp('10%'),
                                    alignItems: 'center',
                                    justifyContent: 'center'
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
                                }}><Text style={{fontSize: hp('2.4%')}}>ADD TO CART</Text>
                                </View>
                            </View>

                        </View>
                    </View>

            )







    //     if (item.header) {
    //         return (
    //             <ListItem itemDivider>
    //                 <Left />
    //                 <Body style={{ marginRight: 40 }}>
    //                 <Text style={{ fontWeight: "bold" }}>
    //                     {item.name}
    //                 </Text>
    //                 </Body>
    //                 <Right />
    //             </ListItem>
    //         );
    //     } else if (!item.header) {
    //         return (
    //             <ListItem style={{ marginLeft: 0 }}>
    //                 <Body>
    //                 <Text>{item.name}</Text>
    //                 </Body>
    //             </ListItem>
    //         );
    //     }
    };
    render() {
        return (
<Container >
    <MainComponent navigation={this.props.navigation} menu={true}/>
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.name}
                numColumns={2}
                // stickyHeaderIndices={this.state.stickyHeaderIndices}
            />
</Container>
        );
    }
}
export {Test}