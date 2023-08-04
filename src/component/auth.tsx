import { Reactish, ReactishEntity } from "../reactish";
import { Hub, Auth as AmplifyAuth } from "aws-amplify";
import { AuthContext } from "../context";


import "./auth.css";

export const Auth = (props: any): ReactishEntity => {
  const {logged, setLogged} = Reactish.useContext(AuthContext);

  Reactish.useEffect([], () => {
    const listener = async (data) => {
      if (data.payload.event == "signOut") {
        console.log("user signed out");
      }
    };

    Hub.listen("auth", listener);

    checkUser()
    .catch((err) => console.log("Cannot check for current user:", err));
  });

  const checkUser = async () => {
    try {
      const user = await getUser();
      if (user) {
        setLogged(true);
        // processUser(user);
      } else {
        setLogged(false);
      }
    } catch (err) {
      console.log("Cannot check for current user:", err);
    }
  };

  const getUser = async () => {
    return await AmplifyAuth.currentAuthenticatedUser();
  };

  const processUser = (user) => {
    const groups = parseUserGroups(user);
    if (!hasApproved(groups)) {
      console.log("uninvited user signed in");
      return;
    }

    fetchUsers().then(() => /*load photos*/null);

    console.log(`an invited user signed in`);
  };

  const parseUserGroups = (user) => {
    return user.signInUserSession.accessToken.payload["cognito:groups"];
  }

  const hasApproved = (groups) => {
    return !groups ? false : groups.includes('invited');
  }

  const fetchUsers = (): Promise<any> => {
    // const userInfo = new UserInfoService();
    // const usersPromise = userInfo.listUsers()
    // .then(users => {
    //   users = users.reduce((acc, currentUser) => {
    //     acc[currentUser.id] = currentUser
    //     return acc;
    //   }, {});
    // })
    // .catch(error => console.log('Cannot fetch users:', error));

    // const editorsPromise = userInfo.listEditors()
    // .then(editors => {
    //   editors = editors.reduce((acc, currentEditor) => {
    //     acc[currentEditor.id] = currentEditor
    //     return acc;
    //   }, {});
    // })
    // .catch(error => console.log('Cannot fetch editors:', error));

    // usersLoadedPromise = Promise.all([usersPromise, editorsPromise]);

    // return usersLoadedPromise;
    return Promise.resolve();
  }

  let button = (<button class="btn-log" onclick={() => AmplifyAuth.federatedSignIn()}> Login </button>);
  if (logged) {
    button = (<button class="btn-log" onclick={() => {
      (async () => {
          try {
              await AmplifyAuth.signOut();
          } catch (err) {
              console.log('error signing out: ', err);
          }
      })();
    }}> Logout </button>);
  }

  return <div id="auth">
    {button}
    </div>;
}
