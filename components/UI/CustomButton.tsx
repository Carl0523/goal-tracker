import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function CustomButton(props)
{
    return (
        <TouchableOpacity onPress={props.action}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        width: '50%',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#7B8FE5'
    },
    buttonText : {
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
