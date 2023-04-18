import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ChapterList from "../screens/ChapterList";
import Chapter from "../screens/Chapter";
import Challenge from "../screens/Challenge";
import ChallengeInfo from "../screens/ChallengeInfo";
import VerseGuess from "../screens/VerseGuess";
import NumberGuess from "../screens/NumberGuess";


const ReaderStack = createNativeStackNavigator();

const ReaderStackNavigator = () => {
    return (
        <ReaderStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName= "List"
        >
            <ReaderStack.Screen
                name="List"
                component={ChapterList}
            />
            <ReaderStack.Screen
                name="Chapter"
                component={Chapter}
            />
        </ReaderStack.Navigator>
    );
};


const ChallengeStack = createNativeStackNavigator();

const ChallengeStackNavigator = () => {
    return (
        <ChallengeStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName= "Challenge"
        >
            <ChallengeStack.Screen
                name="Challenge"
                component={Challenge}
            />
            <ChallengeStack.Screen
                name="Info"
                component={ChallengeInfo}
            />
            <ChallengeStack.Screen
                name="NumberGuess"
                component={NumberGuess}
            />
            <ChallengeStack.Screen
                name="VerseGuess"
                component={VerseGuess}
            />
        </ChallengeStack.Navigator>
    );
};


const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName= "Home"
        >
            <HomeStack.Screen
                name="Home"
                component={ReaderStackNavigator}
            />
            <HomeStack.Screen
                name="Game"
                component={ChallengeStackNavigator}
            />
        </HomeStack.Navigator>
    );
};


export default HomeStackNavigator;