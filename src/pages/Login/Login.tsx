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
  
//PT3 LogOut 
//TASKS
//0 Change the Login Arrow Component to a FunctionalComponent FC<{}> = (): ReactElement =>{}
// 0.1 //setCurrent user as an object , user acts like an object in back4app
// var [currentUser, setCurrentUser] = useState<Parse.Object | null>(null);
// 1. add an async arrow function getCurrentUser to logout that currentUser [✔️]
// 1.1 this function will return a Promise interface to complete the async operation[✔️]
// 1.2 pass in the namespace <Parse.User | null> [X]
// 1.3 create a new const currentUser: Parse.User | null = await Parse.User.current(); [✔️]
// 1.4 Pass the currentUser state variable to the state setCurrentUser(currentUser) [✔️]
// 1.5 return the currentUser to update it ; [✔️]


// 2. update the handleLogin asyncfunction  to complete the Promise [✔️]
// 2.1 pass a Promise interface to handle the async operation completion 
// with a boolean attribute to check if the currentUser is logged in or not  [✔️]
// 2.2  add a small if to alert the user when the inputs are empty
/**
 *    if (usernametVal === "" || passwordVal === "") {
      alert("Please enter your username and password!");
      return false;
    }
    [✔️]
**/ 
//2.3 update user to logged in with the namespace Parse and the extension of the interface User
/**
 * const loggedInUser: Parse.User = await Parse.User.logIn(
        usernameValue,
        passwordValue,
        // using post true
        { usePost: true }
 */
// 2.4 To verify that this is in fact the current user, `current` can be used
// 2.5  Clear input fields
// 2.6 Update state variable holding current user and return true 

/**
 *   setEmail("");
      setPassword("");
      getCurrentUser();

 */

// 5. map the login inputs with the currentUser === null and display with && operator
//REFERENCE : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

//TODO :






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
              <IonImg src="https://res.cloudinary.com/du9aympvd/image/upload/v1658734322/code/typescript/todolist-back4app-ionic/Login/undraw_mobile_login_re_9ntv_hsyble.svg" 
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
            </IonCol>
          </IonRow>
        </IonGrid>
        {/** Input password  */}
      </IonContent>
    </IonPage>
  );
};

export default Login;
