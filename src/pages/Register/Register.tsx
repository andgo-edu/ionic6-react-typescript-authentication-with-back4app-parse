import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Register.css";

const Parse = require("parse");

const Register = () => {
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //console.log("Strings", name,email,password);
  //console.log("setStateActions",setName, setEmail,setPassword);

  // function for handling registerRequestFromAPI

  const handleRegisterReqfromAPI = async function () {
    const user = (Parse.User = new Parse.User());
    user.set("username", username);
    user.set("email", email);
    user.set("firstName", name);
    user.set("password", password);

    try {
      let userResults = (Parse.User = await user.signUp());
      console.log("Registered Succesfully as", userResults);
    } catch (error: any) {
      console.log("Error has been found:", error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonInput
                placeholder="Name"
                className="ion__input"
                type="text"
                onIonChange={(event?: any) => {
                  setName(event.detail.value!);
                }}
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                placeholder="UserName"
                className="ion__input"
                type="text"
                onIonChange={(event?: any) => {
                  setUserName(event.detail.value!);
                }}
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                placeholder="Email"
                className="ion__input"
                onIonChange={(event?: any) => {
                  setEmail(event.detail.value!);
                }}
                type="text"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                placeholder="Password"
                className="ion__input"
                onIonChange={(event?: any) => {
                  setPassword(event.detail.value!);
                }}
                type="password"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton
          expand="block"
          color={"tertiary"}
          onClick={handleRegisterReqfromAPI}
        >
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;

/**
     *   user.set('username', 'A string');
        user.set('email', 'A string');
        user.set('firstName', 'A string');
        //https://dashboard.back4app.com/apidocs#signing-up
     */
