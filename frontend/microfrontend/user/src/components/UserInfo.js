import React from "react";
export default function UserInfo() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [imageStyle, setImageStyle] = React.useState({});
  const onEditAvatar = () => {}
  const onEditProfile = () => {}
  const onAddPlace = () => {}
  return (
    <section className="profile page__section">
      <h1>Блок с пользовательской информацией</h1>
      {/*<div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>*/}
      {/*<div className="profile__info">*/}
      {/*  <h1 className="profile__title">{currentUser.name}</h1>*/}
      {/*  <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>*/}
      {/*  <p className="profile__description">{currentUser.about}</p>*/}
      {/*</div>*/}
      {/*<button className="profile__add-button" type="button" onClick={onAddPlace}></button>*/}
    </section>
  )
}