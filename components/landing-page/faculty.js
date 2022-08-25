import { useRouter } from "next/router";
import FacultyCard from "./cards/facultyCard";

export default function FacultyInfo(props) {
  const { push } = useRouter();
  if (props.currentOption == "FACULTY") {
    push("/faculty");
  }
}
