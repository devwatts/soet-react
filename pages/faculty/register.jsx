import React, { useState } from "react";
import Layout from "../../components/Faculty2.0/Layout";
import {
  baseUrl,
  facultyRegister,
} from "../../utils/constants/routes.constants";
import axios from "axios";
import { loginUser } from "../../utils/constants/actions.constants";
import { useRouter } from "next/router";
import NotLoggedIn from "../../components/auth/NotLoggedIn";

const register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  return (
    <NotLoggedIn>
      <Layout>
        <section class="h-screen">
          <div class="px-6 h-full text-gray-800">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  class="w-full"
                  alt="Sample image"
                />
              </div>
              <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const { data } = await axios.post(
                      baseUrl + facultyRegister,
                      values
                    );
                    if (data?.success) {
                      console.log(data?.data);
                      loginUser(data?.data, router);
                    } else {
                      window.alert(data?.message);
                    }
                  }}
                >
                  <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p class="text-center font-semibold mx-4 mb-0">
                      Register Here
                    </p>
                  </div>

                  {/* <!-- Name input --> */}
                  <div class="mb-6">
                    <input
                      type="text"
                      value={values.name}
                      onChange={(e) => {
                        setValues({ ...values, name: e.target.value });
                      }}
                      required
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Full Name"
                    />
                  </div>

                  {/* <!-- Email input --> */}
                  <div class="mb-6">
                    <input
                      type="email"
                      value={values.email}
                      onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                      }}
                      required
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div class="mb-6">
                    <input
                      type="password"
                      value={values.password}
                      onChange={(e) => {
                        setValues({ ...values, password: e.target.value });
                      }}
                      required
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Password"
                    />
                  </div>

                  <div class="text-center lg:text-center">
                    <button
                      type="submit"
                      class="inline-block w-full px-4 py-3 bg-blue-600 text-white font-medium text-base leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Register
                    </button>
                    <p class="lg:text-left text-sm font-semibold mt-2 pt-1 mb-0">
                      Already Registered?
                      <a
                        href="/faculty/login"
                        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 ml-0.5 transition duration-200 ease-in-out"
                      >
                        Login
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </NotLoggedIn>
  );
};

export default register;
