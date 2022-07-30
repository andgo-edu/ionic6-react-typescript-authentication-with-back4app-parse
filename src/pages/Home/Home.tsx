import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
//import ExploreContainer from '../../components/ExploreContainer';
import "./Home.css";

import { logOutOutline } from "ionicons/icons";

const Parse = require("parse");

const Home: React.FC = () => {
  const history = useHistory();

  //1. getCurrentUser -> object for the currentUser
  //2. history , useHistory from react-router-dom v5 -
  //3. checkfor the current User utilizing an async function and utilzing useEffect for

  // getCurrentUser Async function start
  //PT3 get Current User
  //TASKS

  //setCurrent user as an object , user acts like an object in back4app
  const [currentUser, setCurrentUser] = useState<Parse.Object | null>(null);
  //Debug current user state
  //console.log(currentUser);

  //history is apart of react-router-dom v5 that enables to push to the rendered location you want if something doest not happen for example
  useEffect(() => {
    const checkCurrentUser = async (): Promise<Boolean> => {
      try {
        const user: Parse.User | null = await Parse.User.currentAsync();
        if (user === null || user === undefined) {
          history.push("/login");
        } else {
          if (currentUser === null) {
            setCurrentUser(user);
          }
        }
        return true;
      } catch (_error: any) {}
      return false;
    };
    checkCurrentUser();
  });

  /*** getCurrentUser Start  */
  // Function that will return current user and also update current username works like a state in js but types must be mentioned
  const getCurrentUser = async function (): Promise<Parse.User | null> {
    let currentUser: Parse.User = await Parse.User.current();
    if (currentUser !== null) {
      alert(`${currentUser.get("username")} is the current user!`);
    } else {
      alert(`There was no user found please login`);
    }
    //console.log(currentUser);
    return currentUser;
  };

  const handleLogOut = async function (): Promise<boolean> {
    try {
      await Parse.User.logOut();
      //verify if the current user is empty
      const currentUser: Parse.User = await Parse.User.current();
      if (currentUser === null) {
        alert("Success! No user is logged in anymore!");
      }
      //
      getCurrentUser();
      return true;
    } catch (error) {
      console.log("Error has been found in handleLogOut" + error);
    }
    return false;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>Home Page</IonText>
        <IonButton onClick={handleLogOut} color={"danger"} expand="block">
          <IonIcon icon={logOutOutline} />
          LogOut
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
