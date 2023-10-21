import { useState } from "react";
import {
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Touchable
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { icons, SIZES } from "../../../constants";

const concertTypes = ["Open Seating", "Stadium/Arena", "Mixed Use"];

const Welcome = () => {
  const router = useRouter();
  const[activeConcertType, setActiveConcertType] = useState('Full-time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Greg</Text>
        <Text style={styles.welcomeMessage}>Find your perfect concert buddy.</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What type of concert are you searching for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
 
      <View style={styles.tabsContainer}>
        <FlatList
          data={concertTypes}
          renderItem={({item})=> (
            <TouchableOpacity
              style={styles.tab(activeConcertType, item)}
              onPress={() => {
                setActiveConcertType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeConcertType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
        />

      </View>
    </View>
  )
}

export default Welcome