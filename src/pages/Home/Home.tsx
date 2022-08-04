import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
//import ExploreContainer from '../../components/ExploreContainer';
import "./Home.css";

import { add,  logOutOutline } from "ionicons/icons";

const Parse = require("parse");

const Home: React.FC = () => {
  const history = useHistory();
  // Set State Variable and the State Action
  const [currentUser, setCurrentUser] = useState<Parse.Object | null>(null);
  //setCurrent user as an object , user acts like an object in back4app
  const [newToDoObject, setNewToDoObject] = useState({
    ToDo: {
      title: "",
      description: "",
      task: "",
      timeCreated: new Date(),
      updatedAt: new Date(),
    },
  });


//1. 
  const createNewToDo = async function () {
    // ToDo is a classname in your back4app db
    const newToDoParseObj = new Parse.Object("ToDo", newToDoObject);
    newToDoParseObj.set({
      ToDo: {
        title: "",
        description: "",
        task: "",
        timeCreated: new Date(),
        updatedAt: new Date(),
      },
    })

    //console.log(newToDoParseObj);
    console.log(newToDoObject);
  };

 const handleNewToDoChange = (event : any) => {
  setNewToDoObject((previous)=> ({
    ...previous,
    [event.target.name]: event.target.value, 

  }))
 }
 
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
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonLabel>Title</IonLabel>
              {/*//key value for passing the props and knowing which props to pass */}
              <IonInput
                name="title"
                placeholder="Title.."
                type="text"
                className="home__app-input"
                onIonChange={handleNewToDoChange}
              />
            </IonCol>
            <IonCol size="6">
              <IonLabel>Task</IonLabel>

              <IonInput
                name="task"
                placeholder="Task.."
                type="text"
                className="home__app-input"
                onIonChange={handleNewToDoChange}
              />
            </IonCol>
            <IonCol size="9">
              <IonLabel>Description</IonLabel>

              <IonTextarea
                name="decription"
                placeholder="Description.."
                className="home__app-textarea"
                onIonChange={handleNewToDoChange}
              ></IonTextarea>
            </IonCol>
            <IonCol size="3">
              <IonButton onClick={createNewToDo} color={"success"} expand="block">
              
              <IonIcon
              icon={add}
              />

              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton onClick={handleLogOut} color={"danger"} expand="block">
          <IonIcon icon={logOutOutline} />
          LogOut
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
