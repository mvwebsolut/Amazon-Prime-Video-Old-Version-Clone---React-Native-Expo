import { StyleSheet, TouchableOpacity, Image } from "react-native";

export const MovieCard = (props) => {

    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL} />
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    img: {
        marginRight: 20,
    },
});