//import liraries
import React from 'react';
import { View, Text, Modal, StyleSheet, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../../assets/constants/colors';
import icons from '../../assets/constants/icons';

// create a component
const VerseModal = ({ modalVisible, closeModal, verse }) => {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <Pressable onPress={closeModal} style={styles.container}>
                    <LinearGradient
                        colors={[COLORS.primary, COLORS.secondary2]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.modalView}>
                        <Text style={styles.modalText}>{verse.arabic_text}</Text>
                        <Pressable onPress={closeModal}>
                            <Image
                                source={icons.cancel}
                                resizeMode='stretch'
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: COLORS.secondary
                                }}
                            />
                        </Pressable>

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
                </Pressable>
            </Modal>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: COLORS.background,
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
        fontSize: 18,
        textAlign: 'center',
        color: COLORS.white
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

//make this component available to the app
export default VerseModal;
