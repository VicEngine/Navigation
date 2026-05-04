import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function accountlog() {
    const navigation = useNavigation()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <Text style={styles.title}>Log into {'\n'}your account</Text>

                {/* Username*/}
                <View style={styles.usercontainer}>
                    <TextInput style={{ fontSize:18,}}
                        placeholder='Username/Email'
                        placeholderTextColor={"white"}
                        />
                </View>

                <View style={styles.passwordcontainer}>
                    
                        <TextInput style={{ fontSize:18,height:55, width:"80%"}}
                            placeholder='Password'
                            placeholderTextColor={"white"}
                            secureTextEntry={true}
                        />
                        <Text>Forget</Text>  
                </View>
            <View style={{marginTop:25,flexDirection:"row",alignItems:"center",alignSelf:"flex-start",}}>
                <Ionicons name="checkbox" size={24} color="#fff" />
                <Text style={{marginLeft:10,fontSize:18,color:"#fff"}}>Remenber Me</Text>
            </View>

            <TouchableOpacity activeOpacity={0.6}
             style={{marginTop:30,height:50,width:"85%",backgroundColor:"black",borderRadius:20,justifyContent:"center",alignItems:"center",}}
             onPress={() => navigation.navigate('DeliveryTask')}>
                <Text style={{color:"#FFF", fontSize:20,}}>Log In</Text>
            </TouchableOpacity>

            
            <TouchableOpacity activeOpacity={0.6} style={{marginTop:30,height:50,width:"85%",backgroundColor:"#FFF",borderRadius:20,justifyContent:"center",alignItems:"center",
                flexDirection:"row",
            }}>
                <EvilIcons name="sc-facebook" size={24} color="black" />
                <Text style={{color:"black", fontSize:20,}}>Log In with Facebook</Text>
            </TouchableOpacity>

       
            <Text style={{color:"#FFF", marginTop:35,paddingRight:"32%"}}>Don't have an account? Sign Up</Text>
      

            </SafeAreaView>
        </SafeAreaProvider>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        //alignItems: "center",
        paddingHorizontal:20
        
    },

    title: {
        fontSize: 28,
        color: "fff",
      paddingRight:"48%",
        marginBottom: 50,
    },

    usercontainer:{
     height: 40,
    width: "85%",
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
  
    },

passwordcontainer:{
    width: "85%",
   height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    marginTop: 20,
    },
    
})