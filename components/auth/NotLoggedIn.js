import { useState, useEffect } from "react";
import Router from "next/router";

import { isAuth } from "../../actions/auth";

const NotLoggedIn = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isAuth()) {
      Router.push(`/`);
    } else {
      setShow(true);
    }
  }, []);

  return <>{show && children}</>;
};

export default NotLoggedIn;
