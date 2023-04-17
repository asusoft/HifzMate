//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Modal, StyleSheet, Pressable, Image } from 'react-native';

import COLORS from '../../assets/constants/colors';
import icons from '../../assets/constants/icons';

// create a component
const VerseModal = ({modalVisible, closeModal, verse}) => {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
               >
                <Pressable onPress={closeModal} style={styles.container}>
                    <View style={styles.modalView}>
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
                    </View>
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
      },
      textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
});

//make this component available to the app
export default VerseModal;
