import React from 'react';
import { View, Text, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import COLORS from '../../assets/constants/colors';

const BottomTab = ({
    middleComponent,
    containerStyle,
    leftComponent,
    rightComponent,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                {/* Left */}
                {leftComponent}
                {/* Middle */}
                {middleComponent}
                {/* Right */}
                {rightComponent}
            </View>

        </View>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        height: 110,
        width: '100%',
        bottom: -5,
        backgroundColor: COLORS.background,
        shadowOpacity: 0.09,
    }
});
