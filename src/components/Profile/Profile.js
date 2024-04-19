import React, {useEffect, useState} from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
import useForm from "../../hooks/useForm";
import {useCurrentUser} from "../../contexts/CurrentUserContext";


export default function Profile({  handleUpdateUser, handleSignout }) {
  const currentUser = useCurrentUser();

  const { enteredValues, handleChange, isFormValid, resetForm, errors } = useForm();

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotChanged = (currentUser.name === enteredValues.name && currentUser.email === enteredValues.email);
    if (isNotChanged ) {
      setIsEditing(false);
      return;
    };

    setIsEditing(false);
    handleUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  };

  useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [currentUser, resetForm]);

  return (
    <section className="profile">
      <div className={"profile__content"}>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form">
        <div className="profile__formElement">
          <p>Имя</p>
          <input
            id="name"
            name="name"
            type="text"
            value={enteredValues.name || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile__formInput"
            placeholder="Ваше имя"
            required
            minLength={2}
            maxLength={30}
          />

        </div>
        {
          errors.name && <p className="auth__error">{errors.name }</p>
        }
        <div className="profile__formSeparator"></div>
        <div className="profile__formElement">

          <p>E-mail</p>
          <input
            id="email"
            name="email"
            type="email"
            value={enteredValues.email || ""}
            onChange={handleChange}
            disabled={!isEditing}
            minLength={6}
            maxLength={30}
            className="profile__formInput"
            placeholder="Email"
            required
          />

        </div>
        {
          errors.email && <p className="auth__error">{errors.email }</p>
        }
      </form>

      <div className="profile__buttons">
        {isEditing ? (
          <button type="submit" className="profile__edit_submit" onClick={handleSubmit}
                  disabled={!isFormValid}>
            Сохранить
          </button>
        ) : (
          <button className="profile__edit" onClick={(e) => {
            e.preventDefault();
            setIsEditing(true)
          }}>Редактировать</button>
        )}
        <button className="profile__exit" onClick={handleSignout}>Выйти из аккаунта</button>
      </div>
      </div>
    </section>
  );
}
