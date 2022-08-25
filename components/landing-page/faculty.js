import { useRouter } from "next/router";

export default function FacultyInfo(props) {
  const { push } = useRouter();
  if (props.currentOption == "FACULTY") {
    push("/faculty");
  }
}
