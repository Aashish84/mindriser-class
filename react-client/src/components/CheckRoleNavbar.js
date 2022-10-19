import { useSelector } from "react-redux";

export default function CheckRoleNavbar(props) {
  const { isLoggedIn, user } = useSelector((store) => store.user);

  if (isLoggedIn) {
    if (user.role === props.role) {
      return props.children;
    }
    return null;
  }

  return null;
}
