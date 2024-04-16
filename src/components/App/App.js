import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
 import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register'
import Profile from '../Profile/Profile'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
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

const navigate = useNavigate();

function handleLogIn () {
  setIsAuth(true);
  navigate("/movies")
}

  return (
    <div className="App">
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
              // <ProtectedRoute isAuth={isAuth} loading={loading}>
                  <Wrap>
                      <Movies />
                  </Wrap>
              // </ProtectedRoute>
          }
      />
        <Route
            path="/saved-movies"
            element={
                // <ProtectedRoute isAuth={isAuth} loading={loading}>
                    <Wrap>
                        <SavedMovies/>
                    </Wrap>
                // </ProtectedRoute>
            }
        />
         <Route
            path="/profile"
            element={
                // <ProtectedRoute isAuth={isAuth} loading={loading}>
                    <Wrap footer={false}>
                        <Profile />
                    </Wrap>
                // </ProtectedRoute>
            }
        />
         <Route
            path="/signin"
            element={<Login isAuth={isAuth} onSubmit={handleLogIn}/>}
        />
        <Route
            path="/signup"
            element={<Register isAuth={isAuth}  onSubmit={handleLogIn}/>}
        />
         <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
