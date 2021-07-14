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

  const API_ENDPOINT_EN = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4634deb7f29438dab5ca9206fca8c24`;
  const API_ENDPOINT_SP = `https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=f4634deb7f29438dab5ca9206fca8c24`;

  const [info, setInfo] = useState([]);

  const fetchInfo = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data.articles);
  };

  useEffect(() => {
    fetchInfo(API_ENDPOINT_EN);
  }, []);

  useEffect(() => {
    if (language === "english") {
      fetchInfo(API_ENDPOINT_EN);
    } else {
      fetchInfo(API_ENDPOINT_SP);
    }
    // eslint-disable-next-line
  }, [language]);

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
            const {
              author,
              title,
              source: { name },
              urlToImage,
              url,
              description,
            } = item;
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
                <img
                  src={urlToImage ? urlToImage : notFound}
                  alt={title}
                  className="news-image"
                />
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
                <p>
                  {language === "english"
                    ? `By ${author} | Source: ${name}`
                    : `Por ${author} | Fuente: ${name}`}
                </p>
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
