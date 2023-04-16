//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

import COLORS from '../../assets/constants/colors';
import icons from '../../assets/constants/icons';

import Header from '../components/Header';

// create a component
const ChallengeInfo = () => {

    function RenderHeader() {
        return (
            <Header
                title="Verse Guess"
                containerStyle={{
                    height: 50,
                    marginHorizontal: 20,
                }}
                titleStyle={{}}
                leftComponent={
                    <Pressable
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 35,
                            width: 35,
                        }}

                    >
                        <Image
                            source={icons.back}
                            style={{
                                width: 22,
                                height: 11,
                                tintColor: COLORS.icons
                            }}
                        />
                    </Pressable>
                }
                rightComponent={<View style={{ width: 40 }} />}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {RenderHeader()}

            <View style={{
                margin: 25
            }}>
                    <Text style={{fontSize: 15, marginBottom: 5}}>1. Choose the Surah you want to play the challenge for.</Text>
                    <Text style={{fontSize: 15, marginBottom: 5}}>2. Click on  "Start Challenge" to start a new game.</Text>
                    <Text style={{fontSize: 15, marginBottom: 5}}>3. The app will display a Quranic verse and prompt you to guess the previous and next verse.</Text>
                    <Text style={{fontSize: 15, marginBottom: 5}}>4. Select your answer for both the previous and the next verse and hit "submit".</Text>
                    <Text style={{fontSize: 15, marginBottom: 5}}>5. If you answer correctly, you will earn points and move on to the next verse. If you answer incorrectly,  a point will be deducted from your score.</Text>
                    <Text style={{fontSize: 15, marginBottom: 5}}>6. The game will continue until you have completed all the verses for the selected surah, or until you choose to end the challenge.</Text>
                    <Text style={{fontSize: 15, marginBottom: 5}}>7. You can view your score and performance statistics at the end of the game.</Text>
                    <Text style={{fontSize: 15, marginBottom: 5}}></Text>
                    <Text style={{fontSize: 15, marginBottom: 5}}></Text>
                    <Text style={{fontSize: 15, marginBottom: 5, fontWeight: '600'}}>Note:</Text>
                    <Text style={{fontSize: 15, marginBottom: 5, marginLeft: 20}}>Numbers on the options are not the of verses in the surah.</Text>
                    <Text style={{fontSize: 15, marginBottom: 5, marginLeft: 20}}>Click on  each option to read the full verse. </Text>
                
            </View>

             {/* Footer */}
             <Pressable style={styles.Footer}>
                <Text style={{ fontSize: 24, color: COLORS.white, fontWeight: "800" }}> Start Challenge</Text>
            </Pressable>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    Footer: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        alignItems: "center",
        bottom: 50,
        right: 30,
        left: 30,
        height: 80,
        backgroundColor: COLORS.secondary2,
        borderRadius: 20
    }
});

//make this component available to the app
export default ChallengeInfo;
