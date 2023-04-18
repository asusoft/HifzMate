//import liraries
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

import COLORS from '../../assets/constants/colors';
import icons from '../../assets/constants/icons';
import VerseModal from '../components/VerseModal';

// create a component
const NumberGuess = () => {
    const navigation = useNavigation();
    const [verse, setVerse] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    React.useEffect(() => {
        axios.get(`https://quranenc.com/api/v1/translation/aya/english_saheeh/2/255`)
            .then(res => {
                const verse = res.data.result;
                setVerse(verse);
                console.log(verse)
            })
    }, []);

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.background,
            opacity: modalVisible ? 0.2 : 1
        }}>
            <LinearGradient
                colors={[COLORS.primary, COLORS.secondary2]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={{
                    marginTop: 25,
                    marginHorizontal: 25,
                    borderRadius: 12,
                    height: 257,
                }}>

                <View style={{
                    alignItems: 'center'
                }}>
                    <View
                        style={{
                            alignItems: 'center',
                            marginVertical: 10
                        }}>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 26,
                            fontWeight: '600',
                            color: COLORS.white
                        }}>Number Guess</Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            marginVertical: 10
                        }}>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 26,
                            fontWeight: '600',
                            color: COLORS.white
                        }}>Al- Fatiha</Text>
                        <Text style={{
                            marginTop: 5,
                            fontSize: 16,
                            color: COLORS.white
                        }}>The Opener</Text>
                    </View>
                    <Image
                        source={icons.divider}
                        style={{
                            marginVertical: 15,
                            width: 200,
                            tintColor: COLORS.white
                        }}
                    />

                    <Text style={{
                        marginTop: 5,
                        fontSize: 16,
                        fontWeight: '600',
                        color: COLORS.white,
                        textTransform: 'uppercase'
                    }}>Remaining Verses • 7</Text>
                </View>
                <Image
                    source={icons.quran}
                    resizeMode='stretch'
                    style={{
                        width: 314,
                        height: 180,
                        right: 0,
                        bottom: 2,
                        position: 'absolute',
                        opacity: 0.1
                    }}
                />
            </LinearGradient>
            <View style={{
                marginTop: 15,
                marginHorizontal: 25,
                borderRadius: 12,
                height: 85,
                flexDirection: 'row',
                backgroundColor: COLORS.secondary,
                paddingHorizontal: 20
            }}>
                <Pressable
                    onPress={() => setModalVisible(true)}
                    style={{
                        right: 0,
                        marginStart: 30,
                        justifyContent: 'center'
                    }}>
                    <Text numberOfLines={1} style={{
                        fontSize: 24,
                        fontWeight: '600',
                        color: COLORS.white,
                        fontFamily: 'Amiri_700Bold',
                    }}>{verse.arabic_text}</Text>
                </Pressable>
            </View>

            <View style={{
                marginTop: 25,
                marginHorizontal: 25,
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Guess the number of the Verse:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Your Input"
                    keyboardType="numeric"
                />
            </View>

            <VerseModal modalVisible={modalVisible} verse={verse} closeModal={closeModal} />
            {/* Footer */}
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.Footer}>
                <Text style={{ fontSize: 24, color: COLORS.white, fontWeight: "800" }}> Submit</Text>
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
    },
    input: {
        height: 73,
        width: 150,
        margin: 12,
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.primary2,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});

//make this component available to the app
export default NumberGuess;
