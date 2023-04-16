//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

import COLORS from '../../assets/constants/colors';
import icons from '../../assets/constants/icons';

import Header from '../components/Header';

import {
    useFonts,
    Amiri_400Regular,
    Amiri_400Regular_Italic,
    Amiri_700Bold,
    Amiri_700Bold_Italic,
} from '@expo-google-fonts/amiri';

// create a component
const Chapter = () => {

    let [fontsLoaded] = useFonts({
        Amiri_400Regular,
        Amiri_400Regular_Italic,
        Amiri_700Bold,
        Amiri_700Bold_Italic,
    });

    const [chapterID, setChapterID] = useState(2);
    const [chapter, setChapter] = useState([]);
    const [verses, setVerses] = useState([])

    const fetchVerse = async (verseNumber) => {
        try {
            const response = await fetch(`https://quranenc.com/api/v1/translation/aya/english_saheeh/${verseNumber}`);
            const data = await response.json();
            const verse = {
                number: data.result.aya,
                text: data.result.arabic_text,
                translation: data.result.translation
            };
            return verse
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    React.useEffect(() => {
        axios.get(`https://api.quran.com/api/v4/chapters/${chapterID}?language=en`)
            .then(res => {
                const chapter = res.data;
                setChapter(chapter.chapter);
            })
    }, [chapterID]);

    React.useEffect(() => {
        const fetchVerses = async () => {
            try {
                const allVerses = [];

                const fetchPromises = [];

                for (let i = 1; i < chapter.verses_count + 1; i++) {
                    const versePromise = fetchVerse(`${chapter.id}/${i}`);
                    fetchPromises.push(versePromise);
                }

                const verses = await Promise.all(fetchPromises);
                setVerses(verses)
                allVerses.push(...verses);
            } catch (error) {
                console.error(error);
            }
        };
        fetchVerses();
    }, [chapter]);


    function RenderHeader() {
        return (
            <Header
                title={chapter.name_simple}
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

    function RenderVerses(verses) {
        return (
            <View
                style={{
                    marginTop: 35,
                }}>
                    {verses.map((verse) => (
                     <View key={verse.number}>
                     <View style={{
                        marginTop: 10,
                        marginHorizontal: 25,
                        borderRadius: 12,
                        height: 47,
                        backgroundColor: COLORS.inactive
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
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                fontSize: 14,
                                color: COLORS.secondary
                            }}>{verse.number}</Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 12,
                        marginHorizontal: 25,
                        borderBottomWidth: 0.2,
                        borderBottomColor: COLORS.gray
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            right: 0,
                            textAlign: 'right',
                            writingDirection: 'rtl',
                            fontFamily: 'Amiri_700Bold',
                        }}>
                            {verse.text} </Text>
                        <Text style={{
                            fontSize: 16,
                            marginTop: 10,
                            marginBottom: 20,
                        }}> {verse.translation}</Text>
                    </View>
                    </View>
                ))}
            </View>
        )
    }

    if (!fontsLoaded) {
        return (
            <View><Text>LOADING...</Text></View>);
    } else {
        return (
            <SafeAreaView style={styles.container}>
                {RenderHeader()}
                <ScrollView showsVerticalScrollIndicator={false}>
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
                            }}>{chapter.name_simple}</Text>
                            <Text style={{
                                marginTop: 5,
                                fontSize: 16,
                                color: COLORS.white
                            }}>{chapter.name_simple}</Text>
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
                        }}>{chapter.revelation_place} • {chapter.verses_count} Verses</Text>
                        <Image
                            source={icons.bismillah}
                            resizeMode='stretch'
                            style={{
                                marginTop: 35,
                                width: 214,
                                height: 48,
                            }}
                        />
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
                </LinearGradient >
                {RenderVerses(verses)}
                </ScrollView>
            </SafeAreaView>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
});

//make this component available to the app
export default Chapter;
