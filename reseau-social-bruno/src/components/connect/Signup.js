import React, { useState } from "react";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signup } from "@/services/connect";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

export default function Signup(props) {
  const [password, setPassword] = useState("");
  

  /*schema de validation yup*/
  const validationSchema = Yup.object().shape({
    pseudo: Yup.string().required("veuillez entrer un nom de famille"),
    email: Yup.string()
      .email("Veuillez entrer une adresse mail valide")
      .required("Veuillez entrer une adresse email"),
    password: Yup.string()
      .required("Veuillez entrer un mot de passe")
      .matches(/([0-9])/, "Le mot de passe doit contenir un chiffre au moins")
      .matches(
        /[a-z]/,
        "le mot de passe doit comporter une lettre en minuscule"
      )
      .matches(
        /[A-Z]/,
        "le mot de passe doit comporter une lettre en majuscule"
      )
      .matches(
        /[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/,
        "Le mot de passe doit comporter un caractère spécial"
      )
      .min(8, "Le mot de passe doit comporter 8 caractères minimum")
      .max(50, "Le mot de passe ne doit pas comporter plus de 50 caractères"),
  });

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const { isSubmitting } = formState;

  /*vérification du password*/
  const passwordHasValidLength = password.length >= 8;
  const passwordHasLowercaseLetter = /[a-z]/.test(password);
  const passwordHasUppercaseLetter = /[A-Z]/.test(password);
  const passwordHasSpecialCharacter =
    /[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(password);
  const passwordHasNumber = /[0-9]/.test(password);

  /*soumission du signup*/
  const onSubmit = (data) => {
    signup(data.pseudo, data.email, data.password).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <form
      className="signupForm col-lg-3 col-md-6 col-8 mx-auto "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="position-relative mb-3">
        <input
          type="text"
          name="pseudo"
          id="pseudo"
          className="w-100 form-control background3 border-input"
          placeholder="Pseudo"
          {...register("pseudo")}
          required
        />
        <span className="position-absolute top-50 end-0 translate-middle-y me-2">
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
      <div className="position-relative mb-3">
        <input
          type="email"
          name="email"
          id="email"
          className="w-100 form-control background3 border-input"
          placeholder="Email"
          {...register("email")}
          required
        />
        <span className="position-absolute top-50 end-0 translate-middle-y me-2">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      </div>
      <div className="position-relative mb-3">
        <input
          type="password"
          name="password"
          id="password"
          className="w-100 form-control background3 border-input"
          placeholder="Mot de passe"
          {...register("password")}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          required
        />
        <span className="position-absolute top-50 end-0 translate-middle-y me-2">
          <FontAwesomeIcon icon={faLock} />
        </span>{" "}
      </div>
      <div className="form-text">
        <ul>
          <li className={passwordHasUppercaseLetter ? "green" : "red"}>
            Une majuscule
          </li>
          <li className={passwordHasLowercaseLetter ? "green" : "red"}>
            Une minuscule
          </li>
          <li className={passwordHasNumber ? "green" : "red"}>Un chiffre</li>
          <li className={passwordHasSpecialCharacter ? "green" : "red"}>
            Un caractère spécial
          </li>
          <li className={passwordHasValidLength ? "green" : "red"}>
            8 caractères minimum
          </li>
        </ul>
      </div>
      <div className="position-relative mb-3">
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="w-100 form-control background3 border-input"
          placeholder="Confirmer le mot de passe"
          required
        />
        <span className="position-absolute top-50 end-0 translate-middle-y me-2">
          <FontAwesomeIcon icon={faLock} />
        </span>
      </div>
      <div className="mb-4 form-check">
        <input
          type="checkbox"
          className="form-check-input ms-1"
          id="exampleCheck1"
        />
        <label className="form-check-label main-color fw-bold ms-1">
          Acceptez les CGU
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="col-12 mb-3 px-3 py-2 background3 border-0 main-color fw-bold rounded login-btn"
      >
        INSCRIPTION
      </button>
      <p className="text-center">
        Vous possédez déjà un compte?&nbsp;
        <a className="fw-bold cursor-pointer" onClick={props.onPropChange}>
          Connexion
        </a>
      </p>
    </form>
  );
}
