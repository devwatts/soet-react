import React from "react";
import FacultyLogin from "../../../components/auth/Faculty/FacultyLogin";
import FacultyLoggedIn from "../../../components/auth/FacultyLoggedIn";
import NotLoggedIn from "../../../components/auth/NotLoggedIn";

const login = () => {
  return (
    <NotLoggedIn>
      <div className="flex min-h-full flex-col items-center justify-center py-2 w-full h-[100vh]">
        <FacultyLogin />
      </div>
    </NotLoggedIn>
  );
};

export default login;
