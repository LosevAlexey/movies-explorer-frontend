import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register'
import Profile from '../Profile/Profile'
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainApi from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Popup from "../Popup/Popup";

function App() {

  const Wrap = ({children, footer = true}) => {
    return (
      <>
        <Header isAuth={isAuth}/>
        <>
          {children}
        </>
        {
          footer && <Footer/>
        }
      </>
    );
  };

  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  const [popupInfo, setPopupInfo] = useState({
    message: "",
    isOpen: false,
    success: false,
  });

  const navigate = useNavigate();

  const mainApi = new MainApi(`Bearer ${localStorage.getItem("jwt")}`);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setLoading(true);
      mainApi
        .checkToken(jwt)
        .then(() => {
          setIsAuth(true);
          console.log(window.location.pathname)
          navigate(window.location.pathname);
        })
        .catch((err) => {
          console.log(`${err}`);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  function onClosePopup() {
    setPopupInfo({...popupInfo, isOpen: false});
  }

  function handleUpdateUser(body) {
    const jwt = localStorage.getItem("jwt");
    mainApi
      .updateUser(body, jwt)
      .then(() => {
        setCurrentUser({
          ...currentUser,
          name: body.name,
          email: body.email,
        });
        setPopupInfo({
          message: "Профиль успешно обновлен!",
          isOpen: true,
          success: true,
        });
      })
      .catch((error) => {
        setPopupInfo({
          message: "Что-то пошло не так! Попробуйте ещё раз.",
          isOpen: true,
          success: false,
        })
      })
  }

  function onLogin(data) {
    mainApi
      .authorize(data.email, data.password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          setIsAuth(true);
          navigate("/movies", {replace: true});

          setPopupInfo({
            message: "Вы успешно вошли в аккаунт!",
            isOpen: true,
            success: true,
          });
        }
      })
      .catch((error) => {
        setPopupInfo({
          message: "Что-то пошло не так! Попробуйте ещё раз.",
          isOpen: true,
          success: false,
        });
      });
  }

  function onRegister(data) {
    mainApi
      .register(data.name, data.email, data.password)
      .then((res) => {
        if (res._id) {
          onLogin(data);
        }
      })
      .catch((error) => {
        setPopupInfo({
          message: "Что-то пошло не так! Попробуйте ещё раз.",
          isOpen: true,
          success: false,
        });
      });
  }

  function onSignout() {
    setIsAuth(false);
    localStorage.clear();
    navigate("/", {replace: true});
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt && isAuth) {
      mainApi
        .checkToken(jwt)
        .then((userData) => {
          setCurrentUser(userData.data);
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
        });
    }
  }, [isAuth]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Wrap>
                <Main/>
              </Wrap>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute isAuth={isAuth} loading={loading}>
                <Wrap>
                  <Movies/>
                </Wrap>
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isAuth={isAuth} loading={loading}>
                <Wrap>
                  <SavedMovies/>
                </Wrap>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuth={isAuth} loading={loading}>
                <Wrap footer={false}>
                  <Profile handleSignout={onSignout} handleUpdateUser={handleUpdateUser}/>
                </Wrap>
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={<Login isAuth={isAuth} onLogin={onLogin}/>}
          />
          <Route
            path="/signup"
            element={<Register isAuth={isAuth} onRegister={onRegister}/>}
          />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Popup info={popupInfo} onClose={onClosePopup}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
