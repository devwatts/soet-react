import { useEffect, useState } from "react";
import { isAuth } from "../../../actions/auth";
import { useRouter } from "next/router";

const FacultyLogin = () => {
  const Router = useRouter();
  const [values, setValues] = useState({
    email: "",
    forgot_email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    forgot: false,
  });

  const {
    email,
    forgot_email,
    password,
    error,
    loading,
    message,
    showForm,
    forgot,
  } = values;

  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  // fns to show progress
  const showLoading = () =>
    loading ? (
      <div className="border border-yellow-400 bg-yellow-300 text-yellow-900 py-2 text-center">
        Loading...
      </div>
    ) : (
      ""
    );
  const showError = () =>
    error ? (
      <div className="border border-red-400 bg-red-300 text-red-900 py-2 text-center">
        Error!
        <br />
        {error}
      </div>
    ) : (
      ""
    );
  const showMessage = () =>
    message ? (
      <div className="border border-green-400 bg-green-300 text-green-900 py-2 text-center">
        {message}
      </div>
    ) : (
      ""
    );
  // fns to handle change & submit
  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
    console.log(values);
  };
  const handleForgot = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({ ...values, loading: true, error: false });
    const data = { email: forgot_email };
    // forgotPassword(data).then((data) => {
    //   if (!data) {
    //     setValues({
    //       ...values,
    //       error: "Something went wrong. Server sent empty response",
    //       loading: false,
    //     });
    //     return;
    //   }
    //   if (data.error) {
    //     setValues({ ...values, error: data.error, loading: false });
    //     return;
    //   } else {
    //     setValues({
    //       ...values,
    //       error: false,
    //       loading: false,
    //       message: "Password reset link sent to this email successfully",
    //     });
    //   }
    // });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };
    axios.post();
    // signin(user).then((data) => {
    //   if (!data) {
    //     setValues({
    //       ...values,
    //       error: "Something went wrong. Server sent empty response",
    //       loading: false,
    //     });
    //     return;
    //   }
    //   if (data.error) {
    //     setValues({ ...values, error: data.error, loading: false });
    //     return;
    //   } else {
    //     setTimeout(() => {
    //       setStatus(true);
    //       window.location.reload(true);
    //     }, 1000);
    //     authenticate(data, () => {
    //       if (isAuth()) {
    //         setValues({
    //           ...values,
    //           error: false,
    //           loading: false,
    //           message: "Logged in successfully",
    //         });
    //       }
    //     });
    //   }
    // });
  };
  const signinForm = () => {
    return (
      <div
        style={{ "z-index": "1" }}
        className="z-10 bg-white shadow-md rounded w-full max-w-screen-xl mx-auto pt-8 px-5"
      >
        <h1 className="text-4xl text-center">Login</h1>
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2 text-left ml-3">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:border-blue-300"
              type="email"
              placeholder="jane@example.com"
              value={email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2 text-left ml-3">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:border-blue-300"
              type="password"
              placeholder="Must be at least 6 characters"
              value={password}
              onChange={handleChange("password")}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-[#ed3237] hover:bg-[#ed3237] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => {
                setValues({ ...values, forgot: true });
              }}
              className="inline-block align-baseline font-bold text-sm text-[#ed3237] hover:text-[#ed3237]"
            >
              Forgot Password?
            </button>
          </div>
        </form>
        {forgot && (
          <form className="px-8 pt-6 pb-8 mb-4">
            <h1 className="text-center text-3xl">Forgot Password?</h1>
            <p className="text-gray-600 my-3">
              We will send a link to your registered email address. Use that
              link to generate a new password
            </p>
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-2 text-left ml-3">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:border-blue-300"
                type="email"
                placeholder="jane@example.com"
                value={forgot_email}
                onChange={handleChange("forgot_email")}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#ed3237] hover:bg-[#ed3237] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleForgot}
              >
                Send link
              </button>
            </div>
          </form>
        )}
      </div>
    );
  };

  return (
    <>
      {signinForm()} {showError()}
      {showLoading()}
      {showMessage()}
    </>
  );
};
export default FacultyLogin;
