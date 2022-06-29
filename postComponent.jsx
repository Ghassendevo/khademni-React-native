import React, { useState, useMemo, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, Checkbox } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from "react-native-safe-area-context";
import Materialicons from 'react-native-vector-icons/MaterialIcons'
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
export const Post = () => {
    const [checked, setChecked] = React.useState(false);
    const [validate, setValidate] = useState('')
    const [categorie, setCategorie] = useState('')
    const [title, setTitle] = useState('');
    const [budgetFrom, setBudgetfrom] = useState('');
    const [budgetTo, setBudgetTo] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('')
    const isValidate = useSelector(state => state.validate)
    const ispostclick = useSelector(state => state.ispostclick)
    const dispatch = useDispatch();
    const cvalidate = (e) => {
        return {
            type: 'isValidate',
            payload: e,
        }
    }

    const postvalue = (e) => {
        return {
            type: 'POSTVALUE',
            payload: e,
        }
    }
    useMemo(() => {
        if (categorie !== '' && title !== '' && budgetFrom !== '' && budgetTo !== '' && place !== '' && description !== '' && description !== ' ') {
            const postData = {
                categorie:categorie,
                title:title,
                budgetFrom:budgetFrom,
                budgetTo:budgetTo,
                place:place,
                description:description,
                date: new Date(),
            }
            dispatch(cvalidate(true))
            dispatch(postvalue(postData));
        } else dispatch(cvalidate(false));
    }, [categorie, title, budgetFrom, budgetTo, place, description])
    return (

        <View style={{ flex: 1, backgroundColor: 'white', position: 'absolute', width: '100%', height: '100%' }}>
            <KeyboardAvoidingView style={{ height: '100%', }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <Image source={require('./assets/logo.jpg')} style={{ opacity: 0.05, height: '50%', width: '70%', position: 'absolute', alignSelf: 'center', alignItems: 'center', top: '10%' }} />

                <Text style={{ fontWeight: '600', fontSize: 16.5, width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>Create post with just few steps</Text>

                <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column', height: '75%', justifyContent: 'space-around' }}>
                    <View>
                        <Text style={{ marginTop: 20, }}>
                            <Text style={{ color: 'black', fontSize: 18 }}>
                                1. Select Categories
                            </Text>
                        </Text>
                        <View>
                            <RNPickerSelect
                                onValueChange={e => setCategorie(e)}
                                items={[
                                    { label: 'Daily work', value: 'dailywork', },
                                    { label: 'Company', value: 'company' },
                                ]}

                                style={{
                                    value: {
                                        color: '#0066ff',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                    },
                                    placeholder: {
                                        color: '#0066ff',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{}}>
                            <Text style={{ color: 'black', fontSize: 18 }}>
                                2. Add title
                            </Text>
                        </Text>
                        <TextInput
                            mode="outlined"
                            label="Title"
                            outlineColor="#0066ff"
                            activeOutlineColor="#0066ff"
                            onChangeText={e => setTitle(e)}
                        />
                    </View>

                    <View>
                        <Text style={{}}>
                            <Text style={{ color: 'black', fontSize: 18 }}>
                                3. Choose Budget
                            </Text>
                        </Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <TextInput
                                mode="outlined"
                                label="From"
                                outlineColor="#0066ff"
                                activeOutlineColor="#0066ff"
                                style={{ width: '45%' }}
                                right={<TextInput.Icon name="currency-usd" />}
                                keyboardType="numeric"
                                onChangeText={e => setBudgetfrom(e)}
                            />
                            <TextInput
                                mode="outlined"
                                label="To"
                                outlineColor="#0066ff"
                                activeOutlineColor="#0066ff"
                                style={{ width: '45%' }}
                                right={<TextInput.Icon name="currency-usd" />}
                                keyboardType="numeric"
                                onChangeText={e => setBudgetTo(e)}
                            />
                        </View>
                    </View>
                    <View>
                        <Text>
                            <Text style={{ color: 'black', fontSize: 18 }}>
                                3. Choose Place
                            </Text>
                        </Text>
                        <TextInput
                            mode="outlined"
                            label="Place"
                            outlineColor="#0066ff"
                            activeOutlineColor="#0066ff"
                            onChangeText={e => setPlace(e)}
                        />
                    </View>

                    <View>
                        <Text >
                            <Text style={{ color: 'black', fontSize: 18 }}>
                                4. Add Description
                            </Text>
                        </Text>
                        <TextInput
                            mode="outlined"
                            label="Place"
                            outlineColor="#0066ff"
                            activeOutlineColor="#0066ff"
                            multiline={true}
                            onChangeText={e => setDescription(e)}
                        />
                    </View>
                </View>

            </KeyboardAvoidingView>
        </View>
    )
}