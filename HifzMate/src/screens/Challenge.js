//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

import COLORS from '../../assets/constants/colors';
import icons from '../../assets/constants/icons';

import Header from '../components/Header';
import BottomTab from '../components/BottomTab';
// create a component
const Challenge = () => {

    function RenderHeader() {
        return (
            <Header
                title="Hifz Mate"
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
                            source={icons.menu}
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

    function RenderBottomtab() {
        return (
            <BottomTab
                titleStyle={{}}
                leftComponent={
                    <Pressable
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 45,
                            width: 45,
                            borderRadius: 25,
                            backgroundColor: COLORS.inactive,
                            marginEnd: 30
                        }}

                    >
                        <Image
                            source={icons.menu}
                            resizeMode='stretch'
                            style={{
                                width: 22,
                                height: 11,
                                tintColor: COLORS.secondary
                            }}
                        />
                    </Pressable>
                }
                middleComponent={
                    <Pressable
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 45,
                            width: 45,
                            borderRadius: 25,
                            backgroundColor: COLORS.inactive
                        }}

                    >
                        <Image
                            source={icons.reader}
                            resizeMode='stretch'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.secondary
                            }}
                        />
                    </Pressable>
                }
                rightComponent={
                    <Pressable
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 75,
                            width: 75,
                            borderRadius: 35,
                            backgroundColor: COLORS.secondary,
                            marginStart: 30
                        }}

                    >
                        <Image
                            source={icons.challenge}
                            resizeMode='stretch'
                            style={{
                                width: 35,
                                height: 45,
                                tintColor: COLORS.active_icon
                            }}
                        />
                    </Pressable>
                }
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {RenderHeader()}

            <ScrollView>
                <LinearGradient
                    colors={[COLORS.primary, COLORS.secondary2]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={{

                        marginTop: 25,
                        marginHorizontal: 25,
                        borderRadius: 12,
                        height: 126,
                    }}>

                    <View style={{
                        margin: 25
                    }}>
                        <Text style={{
                            fontSize: 26,
                            fontWeight: '800',
                            color: COLORS.white
                        }}>Verse Guess</Text>
                         <Text style={{
                            fontSize: 18,
                            marginTop: 5,
                            color: COLORS.white
                        }}>Guess the previous and the next verse</Text>

                    </View>
                    <Image
                        source={icons.quran}
                        resizeMode='stretch'
                        style={{
                            width: 284,
                            height: 87,
                            right: 0,
                            bottom: 2,
                            position: 'absolute',
                            opacity: 0.1
                        }}
                    />
                </LinearGradient >
                <LinearGradient
                    colors={[COLORS.primary, COLORS.secondary2]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={{

                        marginTop: 25,
                        marginHorizontal: 25,
                        borderRadius: 12,
                        height: 126,
                    }}>

                    <View style={{
                        margin: 25
                    }}>
                        <Text style={{
                            fontSize: 26,
                            fontWeight: '800',
                            color: COLORS.white
                        }}>Number Guess</Text>
                         <Text style={{
                            fontSize: 18,
                            marginTop: 5,
                            color: COLORS.white
                        }}>Guess the number of the verse in the surah</Text>

                    </View>
                    <Image
                        source={icons.quran}
                        resizeMode='stretch'
                        style={{
                            width: 284,
                            height: 87,
                            right: 0,
                            bottom: 2,
                            position: 'absolute',
                            opacity: 0.1
                        }}
                    />
                </LinearGradient >
            </ScrollView>
            {RenderBottomtab()}
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
});

//make this component available to the app
export default Challenge;
