import React from "react";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Signup(props) {
  console.log(props);

   return (
    <form className="signupForm col-lg-3 col-md-6 col-8 mx-auto ">
      <div className="position-relative mb-3">
        <input
          type="text"
          name="pseudo"
          id="pseudo"
          className="w-100 form-control background3 border-input"
          placeholder="Pseudo"
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
          required
        />
        <span className="position-absolute top-50 end-0 translate-middle-y me-2">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      </div>
      <div className="position-relative mb-3">
        <input
          type="text"
          name="password"
          id="password"
          className="w-100 form-control background3 border-input"
          placeholder="Mot de passe"
          required
        />
        <span className="position-absolute top-50 end-0 translate-middle-y me-2">
          <FontAwesomeIcon icon={faLock} />
        </span>
      </div>
      <div className="position-relative mb-3">
        <input
          type="text"
          name="password"
          id="password"
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
        className="col-12 mb-3 px-3 py-2 background3 border-0 main-color fw-bold rounded login-btn"
      >
        INSCRIPTION
      </button>
      <p className="text-center">
        Vous possédez déjà un compte?&nbsp;
        <a className="fw-bold cursor-pointer" onClick={props.onPropChange} >
          Connexion
        </a>
      </p>
    </form>
  );
}
