import { useNavigate } from "react-router-dom";
import "./NotFound.css";
export default function NotFound () {
  const navigate = useNavigate();

  function handleClickBack() {
    navigate(-1);
  }

  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message">Страница не найдена</p>
      <button type="button" className="error__button link" onClick={handleClickBack}>
        Назад
      </button>
    </section>
  );
};

