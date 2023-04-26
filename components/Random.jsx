import { useContext } from "react";
import { StyleSheet, View, Text ,TouchableOpacity } from "react-native";
import { RestaurantContext} from "../App";

export default function Random ({ navigation, foodList}) {

    const {setSelectedRestaurant} = useContext(RestaurantContext)

    const chooseRandom = () => {
        const index = Math.floor(Math.random() * foodList.length)
        setSelectedRestaurant(foodList[index])
        navigation.navigate('Details')
    }
    return(
        <TouchableOpacity onPress={chooseRandom}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>🎲</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    fabText: {
        fontSize: 40,
        
    },
    



    fab: {

        //display: for iphone
        position: 'absolute',
        bottom: 30,
        left: 176,
        backgroundColor: '#15317E',
        padding: 5,
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'whitesmoke',
        elevation: 4,
        //shadowColor:'black'  for Iphones,
        //shadowOffset: {width1 :1, height: 2},
        //shadowOpacity: 0.4,
        //shadowRadius: 3,
    }

})