# Ionic React TypeScript Full Stack Course 

1. Requirements 
   

2. To start using this application 
   
 - Signup at [](https://www.back4app.com)
 - Update API Keys in App.tsx 
 -  
   ```
    const PARSE_APPLICATION_ID = "";
    const PARSE_HOST_URL = "https://parseapi.back4app.com/";
    const PARSE_JAVASCRIPT_KEY = "";
   ```


## Tasks Done 
#### Part 1 Setting up the project and register page
1.  
   - Small Demo [x]
   - Requirements [x]
   - Setting up ionic project with Yarn instead of npm [x]
   - Explainning basic project files [x]
   - Creating backend with parse lowcode backend back4app [x]
   - Creating Basic Project Structure [x]
   - Setting up Pages Routing [Login, Register, Home] [x]
   - Setting up GUI Register (styling) [x]
   - Setting up function to handle register of user from api [x]
   - setting up user inputs dynamically [x]
   - passing properties to the front end (Connecting frontend with backend) [x]
   - Fixing Initialze Error by passing the api url [x]
  ```
   const PARSE_HOST_URL = "https://parseapi.back4app.com/";
  ```

- Part 1 References 
  1. [Signing Up Typescipt back-4app api docs](https://dashboard.back4app.com/apidocs?typescript#signing-up)
  2. [back-4appdocs ](https://www.back4app.com/docs)
  3. [Responsive Grid ionic6](https://ionicframework.com/docs/layout/grid)
  4. [Config ionic to start project with yarn](https://forum.ionicframework.com/t/how-can-i-start-a-new-ionic-project-with-yarn/217365)
  5. [Back4app api typescript docs](https://dashboard.back4app.com/apidocs?typescript#introduction)
  6. [Ionic docs ionic-button](https://ionicframework.com/docs/api/button)


#### Part 2 Login and restricting only logged in users
   - Added Login GUI [x]
   - Added Login Dynamic Inputs using useState Hook [x]
   - Added handleLogin async arrow function to handle login request from backend[x]
  - Restricting Access Only to LoggedIn User []
  - Remove Login Page Content if user is logged in [] 
  
- Part 2 References 
- 1. [(Limpitsouni,K & Gesoulis,A , 2022 ) Undraw Open Source SVG Elements© 2022 · Katerina Limpitsouni · All rights reserved ](https://undraw.co/search)
- 2. [Animated SVG icons Loaf](https://getloaf.io/)
- 3. [Cloudinary Image CDN](https://cloudinary.com/)
- 4. [Back4app Docs Login](https://dashboard.back4app.com/apidocs#logging-in)
- 5. [Async arrow function javascript MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)
- 6. [Async arrow function typescript docs](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html#asyncawait-support-in-es6-targets-node-v4)



#### Part 3 getCurrentUser


- Added Redirect to Home when user Logs in  [✔️]
// 1 //setCurrent user as an object , user acts like an object in back4app
// var [currentUser, setCurrentUser] = useState<Parse.Object | null>(null);
// 1. add an async arrow function getCurrentUser to logout that currentUser [✔️]
// 1.1 this function will return a Promise interface to complete the async operation[✔️]
// 1.2 pass in the namespace <Parse.User | null> [✔️]
// 1.3 create a new const currentUser: Parse.User | null = await Parse.User.current(); [✔️]
// 1.4 Pass the currentUser state variable to the state setCurrentUser(currentUser) [✔️]
// 1.5 return the currentUser to update it ; [✔️]

- Added Restricing if statement of the Parse User object when someone trys to acces /login uri [✔️]
//utilizng a checkCurrentUser async function that is going to check if the currentUser is empty or not
- passing the function into a useEffect and calling it inside the useEffect .[✔️]

### PT3 III - References
1. [react-slack-clone-app-Back4AppDocs](http://docs2.back4app.com/docs/react/templates/react-slack-clone-app)
2. [react-routerdom - api Hooks - useHistory V5](https://reactrouter.com/docs/en/v6/upgrading/v5)
3. [react-routerdom - api Hooks - useNavigate V6](https://reactrouter.com/docs/en/v6/upgrading/v5)
4. [asyncstorage](https://reactnative.dev/docs/asyncstorage)
5. [working-with-users/react-login -Back4App Docs](https://www.back4app.com/docs/react/working-with-users/react-login)




### ART WORK 
1. [(Limpitsouni,K & Gesoulis,A , 2022 ) Undraw Open Source SVG Elements© 2022 · Katerina Limpitsouni · All rights reserved ](https://undraw.co/search)
2. []()










