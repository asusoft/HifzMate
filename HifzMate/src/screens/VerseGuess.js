//import liraries
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

import COLORS from '../../assets/constants/colors';
import icons from '../../assets/constants/icons';
import VerseModal from '../components/VerseModal';

// create a component
const VerseGuess = () => {
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
                        }}>Verse Guess</Text>
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
                height: 47,
                flexDirection: 'row',
                backgroundColor: COLORS.inactive,
                paddingHorizontal: 20
            }}>
                <Image
                    source={icons.ayah}
                    resizeMode='stretch'
                    style={{
                        width: 36,
                        top: 5,
                        left: 5,
                        height: 36,
                        position: 'absolute',
                        tintColor: COLORS.secondary
                    }}
                />
                <View style={{
                    width: 36,
                    top: 5,
                    left: 5,
                    height: 36,
                    position: 'absolute',
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text
                        style={{
                            fontSize: 14,
                            color: COLORS.secondary,

                        }}>
                        {verse.aya}
                    </Text>
                </View>
                <View style={{ right: 0, marginStart: 30, justifyContent: 'center' }}>

                    <Text numberOfLines={1} style={{
                        fontSize: 20,
                        fontWeight: '600',
                        fontFamily: 'Amiri_700Bold',
                    }}>{verse.arabic_text}</Text>
                </View>
            </View>
            <View style={{
                marginTop: 25,
                marginHorizontal: 25,
            }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Options:</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: '48%',
                        height: 35,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        backgroundColor: COLORS.primary2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            height: 20,
                            width: 20,
                            marginLeft: 10,
                            marginHorizontal: 5,
                            borderRadius: 10,
                            position: 'absolute',
                            left: -5,
                            backgroundColor: COLORS.secondary,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: COLORS.white
                            }}>1</Text>

                        </View>
                        <Text numberOfLines={1} style={{
                            fontSize: 12,
                            fontWeight: '600',
                            fontFamily: 'Amiri_700Bold',
                        }}>{verse.arabic_text}</Text>
                    </View>
                    <View style={{
                        width: '48%',
                        height: 35,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        backgroundColor: COLORS.primary2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            height: 20,
                            width: 20,
                            marginLeft: 10,
                            marginHorizontal: 5,
                            borderRadius: 10,
                            position: 'absolute',
                            left: -5,
                            backgroundColor: COLORS.secondary,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: COLORS.white
                            }}>2</Text>

                        </View>
                        <Text numberOfLines={1} style={{
                            fontSize: 12,
                            fontWeight: '600',
                            fontFamily: 'Amiri_700Bold',
                        }}>{verse.arabic_text}</Text>
                    </View>

                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: '48%',
                        height: 35,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        backgroundColor: COLORS.primary2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            height: 20,
                            width: 20,
                            marginLeft: 10,
                            marginHorizontal: 5,
                            borderRadius: 10,
                            position: 'absolute',
                            left: -5,
                            backgroundColor: COLORS.secondary,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: COLORS.white
                            }}>3</Text>

                        </View>
                        <Text numberOfLines={1} style={{
                            fontSize: 12,
                            fontWeight: '600',
                            fontFamily: 'Amiri_700Bold',
                        }}>{verse.arabic_text}</Text>
                    </View>
                    <View style={{
                        width: '48%',
                        height: 35,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        backgroundColor: COLORS.primary2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            height: 20,
                            width: 20,
                            marginLeft: 10,
                            marginHorizontal: 5,
                            borderRadius: 10,
                            position: 'absolute',
                            left: -5,
                            backgroundColor: COLORS.secondary,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: COLORS.white
                            }}>4</Text>

                        </View>
                        <Text numberOfLines={1} style={{
                            fontSize: 12,
                            fontWeight: '600',
                            fontFamily: 'Amiri_700Bold',
                        }}>{verse.arabic_text}</Text>
                    </View>

                </View>
            </View>
            <View style={{
                marginTop: 25,
                marginHorizontal: 25,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Previous:</Text>
                <View style={{
                    height: 30,
                    width: 30,
                    marginLeft: 15,
                    marginHorizontal: 5,
                    borderRadius: 15,
                    backgroundColor: COLORS.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3
                }}>
                    <Text style={{
                        color: COLORS.white
                    }}>1</Text>

                </View>
                <View style={{
                    height: 30,
                    width: 30,
                    marginLeft: 15,
                    marginHorizontal: 5,
                    borderRadius: 15,
                    backgroundColor: COLORS.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3
                }}>
                    <Text style={{
                        color: COLORS.white
                    }}>2</Text>

                </View>
                <View style={{
                    height: 30,
                    width: 30,
                    marginLeft: 15,
                    marginHorizontal: 5,
                    borderRadius: 15,
                    backgroundColor: COLORS.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3
                }}>
                    <Text style={{
                        color: COLORS.white
                    }}>3</Text>

                </View>
                <View style={{
                    height: 30,
                    width: 30,
                    marginLeft: 15,
                    marginHorizontal: 5,
                    borderRadius: 15,
                    backgroundColor: COLORS.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3
                }}>
                    <Text style={{
                        color: COLORS.white
                    }}>4</Text>

                </View>
            </View>
            <View style={{
                marginTop: 25,
                marginHorizontal: 25,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Next Verse:</Text>
                <View style={{
                    height: 30,
                    width: 30,
                    marginLeft: 15,
                    marginHorizontal: 5,
                    borderRadius: 15,
                    backgroundColor: COLORS.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3
                }}>
                    <Text style={{
                        color: COLORS.white
                    }}>1</Text>

                </View>
                <View style={{
                    height: 30,
                    width: 30,
                    marginLeft: 15,
                    marginHorizontal: 5,
                    borderRadius: 15,
                    backgroundColor: COLORS.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3
                }}>
                    <Text style={{
                        color: COLORS.white
                    }}>2</Text>

                </View>
                <View style={{
                    height: 30,
                    width: 30,
                    marginLeft: 15,
                    marginHorizontal: 5,
                    borderRadius: 15,
                    backgroundColor: COLORS.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3
                }}>
                    <Text style={{
                        color: COLORS.white
                    }}>3</Text>

                </View>
                <View style={{
                    height: 30,
                    width: 30,
                    marginLeft: 15,
                    marginHorizontal: 5,
                    borderRadius: 15,
                    backgroundColor: COLORS.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3
                }}>
                    <Text style={{
                        color: COLORS.white
                    }}>4</Text>

                </View>
            </View>
            <VerseModal modalVisible={modalVisible} verse={verse} closeModal={closeModal} />
            {/* Footer */}
            <Pressable onPress={() => navigation.goBack()} style={styles.Footer}>
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
    modalView: {
        top: '50%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

//make this component available to the app
export default VerseGuess;
