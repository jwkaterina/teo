import { Reactish, ReactishEntity } from "../reactish";
import { Hub, Auth as AmplifyAuth } from "aws-amplify";

export const Auth = (props: any): ReactishEntity => {
  Reactish.useEffect([], () => {
    const listener = async (data) => {
      if (data.payload.event == "signOut") {
        console.log("user signed out");
      }
    };

    return Hub.listen("auth", listener);
  });

  const checkUser = async () => {
    try {
      const user = await getUser();
      if (user) {
        processUser(user);
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

  return <>
    <button onclick={() => AmplifyAuth.federatedSignIn()}> Login </button>
    <button onclick={() => {
        (async () => {
            try {
                await AmplifyAuth.signOut();
            } catch (err) {
                console.log('error signing out: ', err);
            }
        })();
    }}> Logout </button>
  </>;
};
