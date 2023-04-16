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
const Home = () => {
    const [chapters, setChapters] = useState([])

    React.useEffect(() => {
        axios.get(`https://api.quran.com/api/v4/chapters?language=en`)
            .then(res => {
                const chapters = res.data;
                setChapters(chapters.chapters);
            })
    }, []);


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

    function RenderSurah(chapters) {
        return (

            <View>
                {chapters.map((chapter) => (
                    <View
                        key={chapter.id}
                        style={{
                            marginHorizontal: 25,
                            marginBottom: 20,
                            height: 62,
                            flexDirection: 'row',
                            borderBottomWidth: 0.2,
                            borderBottomColor: COLORS.gray
                        }}>
                        <Image
                            source={icons.ayah}
                            resizeMode='stretch'
                            style={{
                                width: 36,
                                height: 36,
                                position: 'absolute',
                                tintColor: COLORS.secondary
                            }}
                        />
                        <View style={{
                            width: 36,
                            height: 36,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                fontSize: 14,
                            }}>{chapter.id}</Text>
                        </View>

                        <View style={{
                            marginLeft: 50
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '600'
                            }}>{chapter.name_simple}</Text>
                            <Text style={{
                                marginTop: 5,
                                fontSize: 14,
                                opacity: 0.5,
                                fontWeight: '600',
                                textTransform: 'capitalize'
                            }}>{chapter.revelation_place} • {chapter.verses_count} Verses</Text>
                        </View>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: '600',
                            position: 'absolute',
                            right: 0,
                            textAlign: 'right',
                            writingDirection: 'rtl',
                            color: COLORS.secondary,
                            fontFamily: 'Amiri_700Bold',
                        }}>{chapter.name_arabic}</Text>
                    </View>
                ))}
            </View>
        )
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
                            height: 70,
                            width: 70,
                            borderRadius: 35,
                            backgroundColor: COLORS.secondary
                        }}

                    >
                        <Image
                            source={icons.reader}
                            resizeMode='stretch'
                            style={{
                                width: 45,
                                height: 35,
                                tintColor: COLORS.active_icon
                            }}
                        />
                    </Pressable>
                }
                rightComponent={
                    <Pressable
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 45,
                            width: 45,
                            borderRadius: 25,
                            backgroundColor: COLORS.inactive,
                            marginStart: 30
                        }}

                    >
                        <Image
                            source={icons.challenge}
                            resizeMode='stretch'
                            style={{
                                width: 20,
                                height: 25,
                                tintColor: COLORS.secondary
                            }}
                        />
                    </Pressable>
                }
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {RenderHeader()}
                <View style={{
                    justifyContent: "center",
                    marginHorizontal: 25,
                }}>
                    <Text style={{
                        opacity: 0.5,
                        fontSize: 18,
                    }}>Assalamualaikum</Text>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 700
                    }}>Abubakar Umar</Text>
                </View >

                <LinearGradient
                    colors={[COLORS.primary, COLORS.secondary2]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        justifyContent: "center",
                        marginTop: 25,
                        marginHorizontal: 25,
                        borderRadius: 12,
                        height: 131
                    }}>

                    <View style={{
                        justifyContent: "center",
                        marginHorizontal: 25,
                        flexDirection: "row"
                    }}>
                        <View style={{
                            marginHorizontal: 5,
                            width: "50%"
                        }}>
                            <View style={{
                                flexDirection: "row",
                                margin: 20
                            }}>
                                <Image
                                    source={icons.quranSmall}
                                    resizeMode='stretch'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.white
                                    }}
                                />
                                <Text style={{
                                    color: COLORS.white,
                                    fontSize: 14,
                                    fontWeight: '500',
                                    marginLeft: 10
                                }}>
                                    Last Read
                                </Text>
                            </View>
                            <View style={{
                                justifyContent: "center",
                                marginHorizontal: 25,
                            }}>
                                <Text style={{
                                    color: COLORS.white,
                                    fontSize: 18,
                                    fontWeight: 700
                                }}>Al-Fatiha</Text>
                                <Text style={{
                                    marginTop: 6,
                                    color: COLORS.white,
                                    fontSize: 14,
                                }}>Ayah No: 1</Text>

                            </View >

                        </View >
                        <Image
                            source={icons.quran}
                            resizeMode='stretch'
                            style={{
                                marginTop: 20,
                                width: 206,
                                height: 106,
                            }}
                        />
                    </View >
                </LinearGradient >

                <View style={{
                    justifyContent: "center",
                    marginTop: 30,
                    marginHorizontal: 25,
                    height: 52,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    justifyContent: "space-between",
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: COLORS.secondary
                    }}>Surah</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: COLORS.gray
                    }}>Parah</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: COLORS.gray
                    }}>Page</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: COLORS.gray
                    }}>Hizb</Text>
                </View>
                {RenderSurah(chapters)}
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
export default Home;
