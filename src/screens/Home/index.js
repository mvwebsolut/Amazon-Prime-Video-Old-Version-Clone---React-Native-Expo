import { ScrollView, FlatList, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { MOVIESCRIME } from '../../utils/moviesCrimes';   
import { MOVIESWATCH } from '../../utils/moviesWatch';   
import { MOVIESWATCHING } from '../../utils/moviesWatching';   

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';
import MovieTheWellOfTime from '../../assets/movies/the_wheel_of_time.png';
import { MovieCard } from "../../components/MovieCard";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={PrimeVideoLogo} style={styles.primeLogoImg}/>
                <Image source={AmazonLogo} style={styles.amazonLogoImg}/>
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryLabel}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryLabel}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryLabel}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryLabel}>Kids</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.spotMovieThumbnail}>
                <Image source={MovieTheWellOfTime} style={styles.spotMovieImg}/>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
                <Text style={styles.sectionLabelText}>Continue Watching</Text>
                <FlatList 
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id }
                    renderItem={({ item }) => <MovieCard movieURL={item.moviesURL}/> }
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.sectionLabelText}>Crime Movies</Text>
                <FlatList 
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id }
                    renderItem={({ item }) => <MovieCard movieURL={item.moviesURL}/> }
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.sectionLabelText}>Watch in your language</Text>
                <FlatList 
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id }
                    renderItem={({ item }) => <MovieCard movieURL={item.moviesURL}/> }
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },
    categoryLabel: {
        fontSize: 14,
        fontWeight: "700",
        color: "#fff",
    },
    sectionLabelText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#232F3E',
        alignItems: "flex-start",
    },
    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },
    spotMovieThumbnail: {
        width: '100%',
        alignItems: 'center',
    },
    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },
});