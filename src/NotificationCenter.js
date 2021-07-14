import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  //HOOKS
  useSound,
  //FILES
  click1,
  notFound,
} from "./index";

const NotificationCenter = ({ notificationCenter, setNotificationCenter }) => {
  const { sound, language } = useGlobalContext();

  const API_ENDPOINT_NEWS =
    "http://api.mediastack.com/v1/news?access_key=1ce706cf258a138d239bf5e814dc3baf";

  const [info, setInfo] = useState([]);

  const fetchInfo = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data.data);
  };

  useEffect(() => {
    fetchInfo(API_ENDPOINT_NEWS);

    // eslint-disable-next-line
  }, [setNotificationCenter]);

  const [index, setIndex] = useState(0);
  const [isClosed, setIsClosed] = useState("");

  const [play] = useSound(click1, { volume: 0.5 });

  const notificationClose = () => {
    setNotificationCenter(false);
    setIsClosed("notification-back");
  };

  const soundAction = () => {
    play();
    setNotificationCenter(false);
    setIsClosed("notification-back");
  };
  return (
    <>
      {" "}
      <section
        className={`${
          notificationCenter
            ? "container-back-notification notification-move"
            : `container-back-notification ${isClosed}`
        }`}
      >
        <div className="container-notification">
          {info.map((item, itemIndex) => {
            const { title, image, url, author, description } = item;
            let position = "nextSlide";
            if (itemIndex === index) {
              position = "activeSlide";
            }
            if (index >= info.length) {
              setIndex(0);
            }
            if (index < 0) {
              setIndex(info.length - 1);
            }
            return (
              <article
                key={itemIndex}
                className={position}
                style={{ color: "var(--dark-low)", padding: "10px" }}
              >
                <button
                  className="close-modal-btn-notification"
                  onClick={
                    sound ? () => soundAction() : () => notificationClose()
                  }
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <h5 className="news-title">{title}</h5>
                <p>By {author} </p>
                <p>
                  {description}{" "}
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--dark-high)" }}
                  >
                    {language === "english" ? "Read more" : "Leer más"}
                  </a>
                </p>
                <img
                  src={image ? image : notFound}
                  alt={title}
                  className="news-image"
                />
              </article>
            );
          })}
          <button
            className="btn-next-notification"
            onClick={() => setIndex(index + 1)}
          >
            {language === "english" ? "Show more news" : "Mostrar más noticias"}
          </button>
        </div>
      </section>
    </>
  );
};

export default NotificationCenter;
