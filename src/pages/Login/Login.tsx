import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonInput,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Login.css";

const Parse = require("parse");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<Parse.Object | null>(null);

  //1. getCurrentUser -> object for the currentUser
  //2. history , useHistory from react-router-dom v5 -
  //3. checkfor the current User utilizing an async function and utilzing useEffect for

  // getCurrentUser Async function start
  //PT3 get Current User
  //TASKS

  const history = useHistory();

  useEffect(() => {
    //assigning an async function
    const checkCurrentUser = async () => {
      try {
        const user = await Parse.User.currentAsync(currentUser);
        if (user != null || user === undefined) {
          history.push("/home");
          //
          setCurrentUser(user);
        }
        return true;
      } catch (error) {
        console.log("Error has been found in checkCurrentUser:" + error);
      }
      return false;
    };

    //refreshing the checkCurrentUser over here using useEffect
    checkCurrentUser();
  });

  const getCurrentUser = async function (): Promise<Parse.User | null> {
    const currentUser: Parse.User | null = await Parse.User.current();
    setCurrentUser(currentUser);
    //DEBUG
    console.log(currentUser);
    return currentUser;
  };

  //
  //console.log("Email is :"+email, "Password Is" + password )

  // async arrow function to handleLoginRequestFromAPI
  //2.1
  const handleLogin = async function () {
    //2.2MENTION THE VALUES HERE
    //EXAMPLE const emailval: string = email;
    //NOTE: that the values here are the state variables mentioned top
    try {
      //console.log("adding functionality for login now")
      let user = (Parse.User = await Parse.User.logIn(email, password));
      console.log("Logged In User", user);
    } catch (error) {
      alert("Error has been found" + error);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/** Input Username */}

        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeLg="6" sizeMd="8">
              <IonImg
                src="https://res.cloudinary.com/du9aympvd/image/upload/v1658734322/code/typescript/todolist-back4app-ionic/Login/undraw_mobile_login_re_9ntv_hsyble.svg"
                className="login__jumbotron"
              />
            </IonCol>

            <IonCol size="12" sizeLg="3">
              <IonInput
                value={email}
                placeholder="Enter Username here..:D"
                type="text"
                className="ion__input"
                onIonChange={(event?: any) => {
                  setEmail(event.detail.value!);
                }}
              />
            </IonCol>
            <IonCol size="12" sizeLg="3">
              <IonInput
                placeholder="Enter password here..!"
                type="password"
                value={password}
                className="ion__input"
                onIonChange={(event?: any) => {
                  setPassword(event.detail.value!);
                }}
              />
            </IonCol>
            <IonCol size="12" sizeLg="6" sizeMd="4">
              <IonImg
                className="login__animated__arrow__btn"
                src="https://res.cloudinary.com/du9aympvd/image/upload/v1658734966/code/typescript/todolist-back4app-ionic/Login/arrow-down-2_udwfpf.svg"
              />
            </IonCol>
            <IonCol size="12" sizeLg="6">
              <IonButton expand="block" color={"success"} onClick={handleLogin}>
                Login
              </IonButton>
              <IonText>
                Dont have an account?
                <IonRouterLink href="/register">RegisterNow</IonRouterLink>
              </IonText>

              <IonButton onClick={getCurrentUser}>GET USER</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/** Input password  */}
      </IonContent>
    </IonPage>
  );
};

export default Login;
