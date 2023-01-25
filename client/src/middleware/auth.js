import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Auth({ children }) {
  const { user } = useSelector((state) => state.results);
  if (!user) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }
  return children;
}
