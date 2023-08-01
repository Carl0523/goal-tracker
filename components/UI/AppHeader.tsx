import {StyleSheet, View, Image, Text} from 'react-native';


export default function AppHeader()
{
    return (
        <View style={styles.appTitle}>
          <Image
            source={require("../../assets/logo.png")}
            alt="Logo"
            style={styles.logo}
          />
          <Text style={styles.appName}>GoalTracker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    appTitle: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      },
      logo: {
        width: 125,
        height: 125,
        marginRight: 10,
      },
      appName: {
        fontSize: 30,
        color: "#7B8FE5",
        fontWeight: "bold",
        fontFamily: "",
      },
})