import { Image, StyleSheet, Platform ,Text, TextInput, View, Button, Pressable, Dimensions} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
export default function SignUpScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'black', dark:'black' }}
      headerImage={
        <Image
          source={require('@/assets/images/WhatsApp Image 2024-07-22 at 00.44.54.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sign Up</ThemedText>
        <Text style={{color: "white", textAlign: "center", fontWeight: "normal",fontSize:20}}>Create A New Account</Text>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Text style={{color: "white", textAlign: "center", fontWeight: "bold",fontSize:20,alignItems:"center"}}>Email</Text>
      <TextInput keyboardType="email-address" style={styles.inputstyles}placeholder='Enter email'  placeholderTextColor={"grey"} />
      <Text style={{color: "white", textAlign: "center", fontWeight: "bold",fontSize:20,alignItems:"center"}}>Password</Text>
      <TextInput keyboardType="visible-password" style={styles.inputstyles} placeholder='password' placeholderTextColor={"grey"} />
      </ThemedView>
      <Pressable style={styles.buttonStyle}>
        <Text style={{ color: "white", textAlign: "center", fontWeight: "normal",backgroundColor:'black',fontSize:20 }}>Sign Up</Text>
      </Pressable>
      <Link href={"/signup.tsx"}>
        <Text style={{ fontWeight: "500",color:"white",paddingLeft:10 }}>
          Already have an Account:
        </Text>
        <Text style={{ fontWeight: "bold",color:"white",paddingBottom:10 }}> Login</Text>
      </Link>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    flex:1,
    alignItems: 'center',
    paddingTop:20,
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 500,
    top: 0,
    left: 0,
    position: 'absolute',
    flex:1,
  },
  inputstyles:{
    height:40,
    width:300,
    borderColor:"white",
    borderWidth: 2, 
    borderRadius: 10,
    textAlign:'center',
    marginBottom:20,
    color:"white"
  },
  buttonStyle:{
    color:'black',
    height:35,
    width:300,
    left:0,
    textAlign:'center',
    borderColor:"white",
    borderWidth:2,
    alignItems: 'center',
    borderRadius: 10,
  },
  
});
