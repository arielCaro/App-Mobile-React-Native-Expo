import { Touchable, TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../constants/colors";
const Button = (props) => {
    const filledBgColor = props.color || COLORS.LoginButton;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;
    return (
        <TouchableOpacity   style={{
                                    ...styles.button, 
                                    ...{ backgroundColor:bgColor }, 
                                    ...props.styles
                                }}
                            onPress={props.onPress}>
            <Text style={{fontSize:18, ...{ color: textColor }}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBotton: 16,
        paddingVertical:10,
        borderColor: COLORS.LoginButton,
        borderWidth: 2, 
        borderRadius: 25,
        alignItems:'center',
        justifyContent: 'center'
    }
})

export default Button;