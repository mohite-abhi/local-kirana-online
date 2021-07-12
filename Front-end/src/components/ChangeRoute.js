import { useHistory } from "react-router-dom";

const ChangeRoute = (path) => {
  const history = useHistory();
  history.push("path");
};

export default ChangeRoute;
