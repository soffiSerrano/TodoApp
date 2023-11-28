import { Stack } from "expo-router";
import HomeScreen from "./task/[id]";

export default()=>{
    return(
        <Stack>
            <Stack.Screen name="tabs" component={tabs}
        </Stack>
    )
}