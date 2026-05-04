import EvilIcons from '@expo/vector-icons/EvilIcons';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function deliveryTaskbank() {
  const bankItems = [
    {
      id: 1,
      bankName: "Chase Bank",
      bankNumber: "***4567"

    },
    {
      id: 2,
      bankName: "Bank of America",
      bankNumber: "****7890"

    },

  ]

  const renderbankItem = ({ item }) => {
    return (
      <View style={{
        height: 80, borderWidth: 1, marginTop: 8, borderRadius: 15, padding: 20, marginHorizontal: 20
      }}>
        <View style={{ marginTop: 3, }}>
          <Text style={{ fontWeight: "bold", fontSize: 19 }}>{item.bankName}</Text>
        </View>
        <View style={{ marginTop: 5, }}>
          <Text>- {item.bankNumber}</Text>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <Text style={styles.title}>Withdraw</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <EvilIcons name="bell" size={24} color="black" />
            <Image source={require("../assets/image/vic.png")}
              style={{ width: 30, height: 30, borderRadius: 30 }} />
          </View>
        </View>

        <View style={{ width: "100%", height: 80, backgroundColor: "#959393", justifyContent: "center", padding: 20, }}>
          <Text style={{ fontSize: 15, marginBottom: 8 }}>Available Balance</Text>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#11290f" }}>&euro; 1,234.56</Text>
        </View>

        <View style={{ marginBottom: 9 }}>

          <Text style={{ fontSize: 16, fontWeight: "bold", padding: 10 }}>Recent used banks</Text>
          <FlatList
            data={bankItems}
            renderItem={renderbankItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bankinputcontainer}>
            <TextInput style={styles.bankinput}
              placeholder='&euro; Enter amount'
              placeholderTextColor={"black"} />

          </View>

          <View style={styles.bankinputcontainer}>
            <TextInput style={styles.bankinput}
              placeholder='Enter account number'
              placeholderTextColor={"black"} />

          </View>

          <View style={styles.bankinputcontainer}>
            <TextInput style={styles.bankinput}
              placeholder='Enter sort code'
              placeholderTextColor={"black"} />

          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#Fff",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  bankinputcontainer: {
    width: "90%",
    height: 60,
    backgroundColor: "#959393",
    borderRadius: 15,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginHorizontal: 20

  },
})