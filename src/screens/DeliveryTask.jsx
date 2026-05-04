import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const details = ["All", "Today", "This Week", "This Month"]

const OrderHistory = [
  {
    id: 'DD-2401-1234',
    status: 'On-time',
    timeRange: '14:30 - 15:18',
    address: '123 Main St, Downtown',
    rating: 5,
    review: 'Excellent service, very professional',
  },
  {
    id: 'DD-2401-1233',
    status: 'Late',
    timeRange: '13:15 - 14:00',
    address: '456 Park Ave, Uptown',
    rating: 4,
    review: 'Delivery was delayed but item was in good condition',
  },
  {
    id: 'DD-2401-1232',
    status: 'Failed',
    timeRange: '11:45 - 12:30',
    address: '789 Oak Rd, Midtown',
    rating: 2,
    review: 'Package damaged during delivery',
  },
];

const StarRating = ({ rating, max = 5 }) => (
  <View style={styles.starsRow}>
    {Array.from({ length: max }).map((_, index) => (
      <Text key={index} style={[styles.star, { color: index < rating ? '#F4C430' : '#D1D5DB' }]}>
        ★
      </Text>
    ))}
  </View>
);

const renderOrderHistory = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", }}>{item.id}</Text>

        <View style={{ backgroundColor: "#aaa", justifyContent: "center", alignItems: "center", height: 20, width: 50, borderRadius: 8, }}>
          <Text>{item.status}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="black" />
        <Text style={{fontSize:18}}>{item.timeRange}</Text>
      </View>
      <Text style={{ fontSize: 18, }}>{item.address}</Text>

      <StarRating rating={item.rating} />

      <Text>{item.review}</Text>

    </View>
  )
}

export default function DeliveryTask() {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        {/* Header*/}

        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
          <Text style={{ fontSize: 25, color: "black" }}>Delivery Task</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <EvilIcons name="bell" size={24} color="black" />
            <Image source={require("../assets/image/IMG_6112.jpg")}
              style={{ width: 30, height: 30, borderRadius: 30 }} />
          </View>
        </View>

        {/* Orders*/}

        <View style={styles.ordercontainer}>
          <TouchableOpacity style={styles.newOrders}
          onPress={() => navigation.navigate('deliveryTaskbank')}>
            <Text style={styles.title}> New Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orderHistory}>
            <Text style={{ fontSize: 24, color: "#fff" }}> Order History</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:1}}>
          <FlatList
            data={details}
            renderItem={({ item }) => (
              <TouchableOpacity style={{
                backgroundColor: "#b1b3b5", borderRadius: 30, width: 87, height: 30, alignItems: "center", justifyContent: "center", marginRight: 15,
              }}>
                <Text style={{ fontSize: 18 }}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <FlatList
            data={OrderHistory}
            renderItem={renderOrderHistory}
          showsVerticalScrollIndicator={false}
          />
        </View>
        
        {/* <TouchableOpacity style={{ height: 50, width: "100%", backgroundColor: "#044e35", borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 20 }}
        onPress={() => navigation.navigate('deliveryTask')}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Load More</Text>
        </TouchableOpacity> */}
        
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,

  },

  ordercontainer: {
    backgroundColor: '#dcdfe1',
    flexDirection: 'row',
    height: 50, width: 310,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 10,
  },

  newOrders: {
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    color: "#797b7d",
  },

  orderHistory: {
    width: 150,
    height: 40,
    alignItems: "center",
    backgroundColor: "#044e35",
    borderRadius: 5,
    justifyContent: "center"
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    gap: 15,
  },
  starsRow:{
    flexDirection:"row",
    },
})