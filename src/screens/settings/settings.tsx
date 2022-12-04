import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

import SettingsStyles from './style';

const Settings = ({navigation}:any) => {

    const [green, setGreen] = useState<string | number>(0);
    const [yellow, setYellow] = useState<string | number>(0);
    const [red, setRed] = useState<string | number>(0);

    const onChangeNumber = async () => {
        await AsyncStorage.multiRemove(['user_green_value', 'user_yellow_value', 'user_red_value']);
        await AsyncStorage.setItem('user_green_value', JSON.stringify(green));
        await AsyncStorage.setItem('user_yellow_value', JSON.stringify(yellow));
        await AsyncStorage.setItem('user_red_value', JSON.stringify(red));

        return true;
    }

    return (
        <View style={SettingsStyles.body}>
            <View>
                <Text style={SettingsStyles.header}>Enter Traffic Light Settings</Text>
            </View>
            <View style={SettingsStyles.colorSection}>
                <Text style={SettingsStyles.textboxLabel}>Green light number:</Text>
                <TextInput
                    style={SettingsStyles.input}
                    onChangeText={number => {setGreen(number); }}
                    // value={number}
                    placeholder="i.e. 5"
                    keyboardType="numeric"
                />
            </View>

            <View style={SettingsStyles.colorSection}>
                <Text style={SettingsStyles.textboxLabel}>Yellow light number:</Text>
                <TextInput
                    style={SettingsStyles.input}
                    onChangeText={number => {setYellow(number); }}
                    // value={number}
                    placeholder="i.e. 5"
                    keyboardType="numeric"
                />
            </View>

            <View style={SettingsStyles.colorSection}>
                <Text style={SettingsStyles.textboxLabel}>Red light number:</Text>
                <TextInput
                    style={SettingsStyles.input}
                    onChangeText={number => {setRed(number); }}
                    // value={number}
                    placeholder="i.e. 5"
                    keyboardType="numeric"
                />
            </View>

            <View>
                <TouchableOpacity style={SettingsStyles.btn} accessibilityRole="button" onPress={() => {onChangeNumber(); navigation.navigate('Home')}}>
                    <Text style={SettingsStyles.btnText}>Set Traffic Light</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Settings;