import React, { useEffect, useState, } from 'react';
import { SafeAreaView, StatusBar, ScrollView, useColorScheme, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import IndexStyles from './style';
import AsyncStorage from "@react-native-async-storage/async-storage";


const HomeScreen = () => {
    interface UserValue {
        green: number;
        yellow: number;
        red: number;
    }
    type NumberArray = Array<number>;
    type MyBool = true | false;
    type ColourTypes = "green" | "yellow" | "red" | "";
    type ColourArrays = Array<ColourTypes>;

    const [getValueState, setValueState] = useState<NumberArray>([5,3,5]);
    const [startTimer, setStartTimer] = useState<MyBool>(false);
    const [activeLight, setActiveLight] = useState<ColourTypes>('');
    const [activeLightNumber, setActiveLightNumber] = useState<number>(0);
    const [getValues, setValues] = useState<NumberArray>( getValueState );
    const [getColours, setColours] = useState<ColourArrays>([ 'green', 'yellow', 'red' ] );
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    let firstStartTimerValues = [0,0,0];


    const getUserInput = async (): Promise<UserValue> => {
        let green = await AsyncStorage.getItem('user_green_value');
        let yellow = await AsyncStorage.getItem('user_yellow_value');
        let red = await AsyncStorage.getItem('user_red_value');
        let userGreen = green? green : `${getValueState[0]}`;
        let userYellow = yellow? yellow : `${getValueState[1]}`;
        let userRed = red? red : `${getValueState[2]}`;

        userGreen = JSON.parse(userGreen);
        userYellow = JSON.parse(userYellow);
        userRed = JSON.parse(userRed);

        return { green: userGreen? Number(userGreen) : 0, yellow: userYellow? Number(userYellow) : 0, red: userRed? Number(userRed) : 0 };
    }


    useEffect(() => {
        let inputs = getUserInput();
        inputs.then( obj => {
            let values = [obj.green, obj.yellow, obj.red];
            firstStartTimerValues = values;
        });
    }, [startTimer])
   
    
    useEffect(() => {
        
        let interval = setInterval(() => {
            if (startTimer) {
                let currentTimer = 0;
                let currentLight = getColours[0];
                if (firstStartTimerValues[0]) {
                    currentTimer = firstStartTimerValues[0];    //Data assignment
                } else {                    
                    currentTimer = getValues[0];    //Data assignment
                }
    
                if (currentLight === 'green') {
                    // yellow, red, green           1
                    if (firstStartTimerValues[0]) {
                        setValues([firstStartTimerValues[1], firstStartTimerValues[2], firstStartTimerValues[0]]);
                    } else {                    
                        setValues([getValues[1], getValues[2], getValues[0]]);
                    }
                    setColours([getColours[1], getColours[2], getColours[0]]);
                } else if (currentLight === 'yellow' && getColours[1] == 'green') {
                    // green, yellow, red           4
                    setValues([getValues[1], getValues[0], getValues[2]]);
                    setColours([getColours[1], getColours[0], getColours[2]]);
                } else if (currentLight === 'yellow' && getColours[1] == 'red') {
                    // red, yellow, green           2
                    setValues([getValues[1], getValues[0], getValues[2]]);
                    setColours([getColours[1], getColours[0], getColours[2]]);
                } else if (currentLight === 'red' ) {
                    // yellow, green, red           3
                    setValues([getValues[1], getValues[2], getValues[0]]);
                    setColours([getColours[1], getColours[2], getColours[0]]);
                }

                let intervalObject = setInterval(() => {
                    setActiveLight(currentLight);
                    setActiveLightNumber(currentTimer);

                    (function sleep(secs = 1000) {
                        var now = new Date().getTime();
                        while (now + secs >= new Date().getTime()) {
                        }
                    })();

                    currentTimer--;

                    if (currentTimer === -1) {
                        clearInterval(intervalObject);
                    }
                }, 1);

                (function sleep(secs = 10) {
                    var now = new Date().getTime();
                    while (now + secs >= new Date().getTime()) {
                    }
                })();

            } else {
                setColours([ 'green', 'yellow', 'red' ]);
                setActiveLight('');
                setActiveLightNumber(0);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [startTimer, activeLightNumber, firstStartTimerValues]);



    return (
        <SafeAreaView style={[{flex:1, justifyContent: 'center', alignItems: 'center'}]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <View style={IndexStyles.body}>
                        <View style={[IndexStyles.circle, {backgroundColor: activeLight == 'green'? '#02f006' : '#141412'}]}>
                            <Text style={IndexStyles.timerTexts}>
                                {activeLight == 'green'? activeLightNumber : ''}
                            </Text>
                        </View>
                        <View style={[IndexStyles.circle, {backgroundColor: activeLight == 'yellow'? '#faf205' : '#141412', marginVertical: 20}]}>
                            <Text style={IndexStyles.timerTexts}>
                                {activeLight == 'yellow'? activeLightNumber : ''}
                            </Text>
                        </View> 
                        <View style={[IndexStyles.circle, {backgroundColor: activeLight == 'red'? '#eb4034' : '#141412'}]}>
                            <Text style={IndexStyles.timerTexts}>
                                {activeLight == 'red'? activeLightNumber : ''}
                            </Text>
                        </View>  
                    </View>

                    <View style={IndexStyles.button}>
                        <TouchableOpacity style={IndexStyles.btnStart} accessibilityRole="button"  onPress={() => { setStartTimer(!startTimer); }}>
                            <Text style={IndexStyles.btnText}>
                                {startTimer? "Stop" : "Start"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
      );
}

export default HomeScreen;