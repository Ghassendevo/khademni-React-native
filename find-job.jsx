import { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { mainstyle } from "./khademni-style"
import Feather from 'react-native-vector-icons/Feather'
import Font from 'react-native-vector-icons/FontAwesome'
import Evil from 'react-native-vector-icons/EvilIcons'
import Ant from 'react-native-vector-icons/AntDesign'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
export const FindJob = () => {
    const NUM_OF_LINES = 4;
    const [selected, setSeletcted] = useState('all')
    const [isloading, setisLoading] = useState(false)
    const [showMore, setShowMore] = useState(null);
    const [numOfLines, setNumOfLines] = useState(4);
    const num = [1, 2, 3];
    const onTextLayout = useCallback(e => {
        if (e.nativeEvent.lines.length >= numOfLines) setNumOfLines(e.nativeEvent.lines.length), setShowMore(true)
        else setShowMore(null)
    });
    const setFindBy = (e) => {
        setSeletcted(e);
    }
    useEffect(() => {
        //fetch server to get information
    }, [selected])
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <SafeAreaView style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                <ScrollView style={{ width: '100%', marginTop: 10, }}>
                    {/* <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <TouchableOpacity style={mainstyle.search}>
                            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Evil name="search" color={'#a8b9c1'} size={20} />
                                <TextInput placeholder="Search" style={mainstyle.searchinput} />
                            </View>
                        </TouchableOpacity>
                    </View> */}
                    <View style={{ marginTop: 20, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ fontWeight: '500', letterSpacing: 0.3, marginBottom: 10 }}>Categories</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 150 }}>
                                <TouchableOpacity style={{ ...mainstyle.cat, borderColor: selected == 'all' ? '#0066ff' : 'white', borderWidth: 1 }} onPress={() => setFindBy('all')}>
                                    <Image source={require('./assets/job-opportunities.png')} style={{ width: 60, height: 60 }} />
                                    <Text style={{ marginTop: 10, color: 'black', fontWeight: '600' }}>
                                        All
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ ...mainstyle.cat, borderColor: selected == 'daily' ? '#0066ff' : 'white', borderWidth: 1 }} onPress={() => setFindBy('daily')}>
                                    <Image source={require('./assets/working.png')} style={{ width: 60, height: 60 }} />
                                    <Text style={{ marginTop: 10, color: 'black', fontWeight: '600' }}>
                                        Daily work
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ ...mainstyle.cat, borderColor: selected == 'company' ? '#0066ff' : 'white', borderWidth: 1 }} onPress={() => setFindBy('company')}>
                                    <Image source={require('./assets/building.png')} style={{ width: 60, height: 60 }} />
                                    <Text style={{ marginTop: 10, color: 'black', fontWeight: '600' }}>
                                        Company
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={mainstyle.cat}>
                                    <Text>
                                        All
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                            <Text style={{ fontWeight: '500', letterSpacing: 0.3, marginBottom: 10 }}>Offres</Text>
                        </View>
                        <View style={{ width: '100%', paddingBottom: 10, paddingTop: 10, borderColor: '#80808061', borderWidth: 1 }}>
                            <Text style={{ letterSpacing: 0.3, lineHeight: 20, width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>Browse jobs that matchs your experience to a client's hiring preferences</Text>
                        </View>
                        {
                            num.map((val, index) => {
                                return (
                                    <TouchableOpacity style={{ backgroundColor: 'white', height: 'auto', alignItems: 'center', paddingBottom: 30, paddingTop: 20, borderBottomColor: '#80808061', borderBottomWidth: 1 }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                                            <Text style={{ color: '#0066ff', fontSize: 18, letterSpacing: 0.3, fontWeight: '800', maxWidth: '87%' }}>Build AI and ML product Recmmmendation system and AI chat app for an existing web app</Text>
                                            <TouchableOpacity style={{ backgroundColor: '#80808012', height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                                <Feather name='bookmark' size={22} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: '90%', marginTop: 10, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <Text style={{ letterSpacing: 0.3 }}>Budget $10 - $250</Text>
                                            <TouchableOpacity style={{ backgroundColor: '#80808012', height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                                <Ant name='like2' size={22} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: '90%', }}>
                                            <View style={{ width: '25%', flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ width: '90%', marginTop: -10, fontWeight: '600' }}>
                                                    3 Bids
                                                </Text>
                                                <Text style={{ width: '90%', marginTop: -10, fontWeight: '600' }}>
                                                    <Material name='map-marker-radius-outline' size={20} />Tunisia
                                                </Text>
                                            </View>

                                        </View>
                                        <View style={{ width: '90%', marginTop: 10, }}>
                                            <Text style={{ letterSpacing: 0.2 }} onTextLayout={onTextLayout} numberOfLines={numOfLines} >
                                                Wthe scroll view along theaxisew bounces when it reaches the end of the content if the content is larger than the scroll view along the the  d of the content if the content is larger than the scroll view along the the  d of the content if the content is larger than the scroll view along the the  d of the content if the content is larger than the scroll view along the the  d of the content if the content is larger than the scroll view along the the  d of the content if the content is larger than the scroll view along the the  d of the content if the content is larger than the scroll view along the fthe

                                            </Text>
                                            {

                                                showMore && <Text style={{ color: '#0066ff' }} onPress={e => { setNumOfLines('auto'), setShowMore(false) }}>More</Text>
                                                ||
                                                <Text style={{ color: '#0066ff' }} onPress={e => setNumOfLines(4)}>Less</Text>

                                            }
                                        </View>
                                        <View style={{ width: '90%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Font name='star' size={25} color='#fab007' />
                                                <Font name='star' size={25} color='#fab007' />
                                                <Font name='star' size={25} color='#fab007' />
                                                <Font name='star' size={25} color='#fab007' />
                                                <Font name='star' size={25} color='#cccccc' />
                                                <Text style={{ marginLeft: 10, fontSize: 16 }}>4.9</Text>
                                            </View>
                                            <Text>
                                                3 hours ago
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            })
                        }
                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
    )
}