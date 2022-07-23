import { useState, useEffect } from "react";
import Router from "next/router";

import { isAuth } from "../../actions/auth";

const FacultyLoggedIn = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isAuth() || isAuth().role !== 0) {
      window.alert("You need to be logged in to view this page.");
      Router.push(`/`);
    } else {
      setShow(true);
    }
  }, []);

  return <>{show && children}</>;
};

export default FacultyLoggedIn;
