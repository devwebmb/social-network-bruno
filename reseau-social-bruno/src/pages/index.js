import Image from "next/image";
import { useEffect } from "react";
import Logo from "../../public/images/logo.webp";
import axios from "axios";
import Login from "../components/connect/Login";
import Signup from "../components/connect/Signup";

export default function Home() {
  // useEffect(() => {
  //   axios
  //     .post(`http://127.0.0.1:3333/user/create`, {
  //       username: "TestCreate",
  //       email: "test_create@test.com",
  //       password: "test",
  //     })
  //     .then((data) => console.log(data));
  // });
  return (
    <div className="home d-flex align-items-center flex-column">
      <div className="col-lg-3 col-md-6 col-8 mx-auto d-flex justify-content-center my-5 ">
        <div className=" logo">
          <Image
            alt="Logo de Code Watchtower"
            src={Logo}
            layout="responsive"
          ></Image>
        </div>
      </div>
      <Login></Login>
      <Signup></Signup>
    </div>
  );
}
