import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  
} from "react-native";
import firebase from "firebase";

export default class SignupLoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  userLogin = async (emailId, password) => {
    if (emailId && password) {
      await firebase
        .auth()
        .signInWithEmailAndPassword(emailId, password)
        .then(() => {
          return Alert.alert("login Successfully");
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorCode+" - "+errorMessage);

        })
        }
    }

    userSignUp = async (emailId, password) => {
        if (emailId && password) {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(emailId, password)
            .then(() => {
              return Alert.alert("Created User Successfully");
            })
            .catch((error)=>{
                var errorCode=error.code;
                var errorMessage=error.message;
                return Alert.alert(errorCode+" - "+errorMessage);
                
            })
            }
        }


  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Barter System</Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboard}
          >
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />

            <TextInput
              style={styles.loginBox}
              placeholder="Enter Password"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this.userLogin(this.state.emailId, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this.userSignUp(this.state.emailId, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  title: {
    marginTop: 25,
    fontSize: 45,
    textAlign: "center",
    fontWeight: "bold",
  },
  keyboard: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    borderWidth: 1.5,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
  },
  loginBox: {
    backgroundColor:"yellow",
    borderWidth: 2,
    width: 300,
    height: 50,
    padding: 10,
    margin: 8,
  },
});
