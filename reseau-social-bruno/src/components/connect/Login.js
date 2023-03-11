import React from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginForm() {
  return (
    <form className="loginForm col-lg-3 col-md-6 mx-auto ">
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
      <div className="position-relative">
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
    </form>
  );
}
