import styled from "styled-components";
import {Avatar} from "@mantine/core"
import { getAuth, GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth"
import { showNotification } from "@mantine/notifications"

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  text-align: center;  

  .profile {
    position: absolute;
    right: 0;
    top: 0;
  }
`

const Navbar = ({ isAuth, setIsAuth, profile, setProfile }) => {
  const onClickHandler = () => {
    const auth = getAuth();
    
    if (isAuth) {
      showNotification({
        title: "Logout Successful",
        color: "blue"
      })

      signOut(auth);
      setIsAuth(false);
      setProfile({});
    } else {
      const provider = new GoogleAuthProvider();
        
      signInWithPopup(auth, provider)
        .then(userCredential => {
          const user = userCredential.user;
          console.log({ user });

          setProfile(user);
          setIsAuth(true);

            showNotification({
              title: "Login Successful",
              color: "green"
            })
        })
        .catch(err => {
          console.error(err);

          showNotification({
            title: "Login Error",
            color: "red"
          })
        })
    }
  }

  return (
    <StyledNav>
      <h1>#todo</h1>
      <div className="profile">
        <Avatar src={profile?.photoURL} onClick={onClickHandler} radius="md" />
      </div>
    </StyledNav>
  )
}

export default Navbar;