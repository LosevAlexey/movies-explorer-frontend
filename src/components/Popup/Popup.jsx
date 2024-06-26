import successImage from "../../images/success.svg";
import deniedImage from "../../images/denied.svg";
import { useCallback, useEffect } from "react";
import "./Popup.css"
const Popup = ({ info, onClose }) => {
  const handleCloseByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleCloseByEsc);
    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [handleCloseByEsc]);

  const { success, message = "Сообщение", isOpen } = info;

  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
          className="popup__close"
        ></button>
        <img
          className="popup__icon"
          src={success ? successImage : deniedImage}
          alt="Статус модального окна"
        />
        <h3 className="popup__title">{message}</h3>
      </div>
    </div>
  );
};

export default Popup;
