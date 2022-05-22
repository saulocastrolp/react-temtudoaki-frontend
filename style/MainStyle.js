import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerMask: {
        flexDirection: "row",
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    maskedInput: {
        flexGrow: 1,
        height: 40,
        fontSize: 18,
        borderBottomColor: "#999",
        borderBottomWidth: 1,

    },
    errorInputMessage: {
        alignSelf: "flex-start",
        marginLeft: 10,
        color: "#f00",
        fontSize: 12,

    }
});

export default mainStyles;