import React from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginForm(props) {
  return (
    <form className="loginForm col-lg-3 col-md-6 col-8 mx-auto ">
      <div className="position-relative mb-3">
        <input
          type="text"
          name="identifiant"
          id="identifiant"
          className="w-100 form-control background3 border-input"
          placeholder="Pseudo ou email"
          required
        />
        <span className="position-absolute top-50 end-0 translate-middle-y me-2">
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
      <div className="position-relative mb-5">
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
      <button
        type="submit"
        className="col-12 mb-3 px-3 py-2 background3 border-0 main-color fw-bold rounded login-btn"
      >
        CONNEXION
      </button>
      <button
        className="col-12 mb-3 main-color fw-bold rounded py-2 signup-btn "
        onClick={props.onPropChange}
      >
        INSCRIPTION
      </button>
    </form>
  );
}
