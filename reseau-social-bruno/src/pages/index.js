import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../public/images/logo.webp";
import Login from "../components/connect/Login";
import Signup from "../components/connect/Signup";

export default function Home() {
  const [connectDisplay, setConnectDisplay] = useState(true)
  console.log(process.env.API_URL);

  const changeDisplay = () => {
    setConnectDisplay(!connectDisplay)
  }

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
      {!connectDisplay ? (
        <Login onPropChange={changeDisplay}></Login>
      ) : (
        <Signup onPropChange={changeDisplay}></Signup>
      )}
    </div>
  );
}
