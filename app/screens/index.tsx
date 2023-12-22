import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./(tabs)/home";
import DetailScreen from "./(tabs)/details";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { loadTasks } from "../../redux/action";

const Stack = createStackNavigator();

const StartPage = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Detail" component={DetailScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default StartPage;
