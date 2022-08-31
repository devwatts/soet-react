import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-full mt-52">
        <div className="text-center justify-center ">
          <h1 className="text-5xl">Oooops....</h1>
          <h2 className="text-2xl mt-2">That page cannot be found</h2>
          <p className="flex items-center justify-center text-gray-500 mt-1">
            Go back to the
            <Link href="/">
              <span className="text-blue-600 underline ml-0.5 cursor-pointer">
                Homepage
              </span>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
