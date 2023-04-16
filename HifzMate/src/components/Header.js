import React from 'react';
import { View, Text, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import COLORS from '../../assets/constants/colors';

const Header = ({
    title,
    containerStyle,
    leftComponent,
    rightComponent,
    titleStyle,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {/* Left */}
            {leftComponent}
            {/* Title */}
                <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
            {/* Right */}
            {rightComponent}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
    },
    containerTitle: {
        flex: 1,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle: {
        marginTop: 5,
        marginLeft: 12,
        color: COLORS.secondary,
        fontSize: 20,
        fontWeight: "800",
    },
});
