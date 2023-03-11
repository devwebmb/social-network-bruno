import Image from "next/image";
import { useEffect } from "react";
import Logo from "../../public/images/logo.webp";
import axios from "axios";
import Login from "../components/connect/Login";

export default function Home() {
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3333/user/7/profile`)
      .then((data) => console.log(data));
  });
  return (
    <div className="home d-flex align-items-center flex-column">
      <div className="col-lg-3 col-md-6 mx-auto d-flex justify-content-center my-5 ">
        <div className="w-50">
          <Image
            alt="Logo de Code Watchtower"
            src={Logo}
            layout="responsive"
          ></Image>
        </div>
      </div>
      <Login></Login>
    </div>
  );
}
