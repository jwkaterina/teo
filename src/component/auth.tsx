import { Reactish, ReactishEntity } from "../reactish";
import { Auth as AmplifyAuth } from "aws-amplify";
import { AuthContext } from "../context";


import "./auth.css";

export const Auth = (): ReactishEntity => {
  const {logged, setLogged} = Reactish.useContext(AuthContext);

  Reactish.useEffect([], () => {
    checkUser()
    .catch((err) => console.log("Cannot check for current user:", err));
  });

  const checkUser = async () => {
    try {
      const user = await getUser();
      if (user) {
        setLogged(true);
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
