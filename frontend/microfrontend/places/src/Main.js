import React from "react";
import api from "./utils/api";
import store from "./store/store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import Card from "./components/Card";
import './blocks/places/places.css';
import './blocks/card/card.css';
import './blocks/profile/profile.css';

function Main() {
  const [email, setEmail] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [imageStyle, setImageStyle] = React.useState({});
  const dispatch = useDispatch()
  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cardData, userData]) => {
        setEmail(userData.email);
        if (window.GlobalStore) {
          const {Places, User} = window.GlobalStore.getStoresList(['User', 'Places'])
          debugger
          const {save: saveCards} = Places.actions;
          const {save: saveUser} = User.actions;
          dispatch(saveCards(cardData));
          dispatch(saveUser(userData))
        }
        setCurrentUser(userData);
        setCards(cardData);
        setImageStyle({ backgroundImage: `url(${userData.avatar})` });
      })
      .catch((err) => console.log(err));
  }, []);

  const onCardClick = () => {
  }
  const onCardLike = () => {}
  const onCardDelete = () => {}
  const onEditAvatar = () => {}
  const onEditProfile = () => {}
  const onAddPlace = () => {}
  const onSignOut = () => {}

  return (
    <Provider store={store}>
      <main className="content">
        <section className="profile page__section">
          <div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="places page__section">
          <ul className="places__list">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}
          </ul>
        </section>
      </main>
    </Provider>
  )
}

export default Main;