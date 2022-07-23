import { getCookies, setCookies } from "cookies-next";

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookies("token");
        if (cookieChecked) {
            if (localStorage.getItem("user")) {
                let ab = JSON.parse(localStorage.getItem("user"));
                if (ab.role === 0) {
                    ab["user_type"] = "Faculty";
                } else if (ab.role === 1) {
                    ab["user_type"] = "Student";
                }
                return ab;
            } else {
                return undefined;
            }
        } else {
            return undefined;
        }
    }
    return undefined;
};
