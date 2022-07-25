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
import { ParseOptions } from "querystring";
import React, { useState, useEffect } from "react";
import "./Login.css";

const Parse = require("parse");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //
  //console.log("Email is :"+email, "Password Is" + password )

  // async arrow function to handleLoginRequestFromAPI

  const handleLogin = async function () {
    try {
      //console.log("adding functionality for login now")
      let user = (Parse.User = await Parse.User.logIn(email, password));
      console.log("Logged In User", user);
    } catch (error) {
      alert("Error has been found" + error);
    }
  };

  // Login Pt 2

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
              <IonImg src="https://res.cloudinary.com/du9aympvd/image/upload/v1658734322/code/typescript/todolist-back4app-ionic/Login/undraw_mobile_login_re_9ntv_hsyble.svg" />
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
            </IonCol>
          </IonRow>
        </IonGrid>
        {/** Input password  */}
      </IonContent>
    </IonPage>
  );
};

export default Login;
