import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  //HOOKS
  useSound,
  //FILES
  click1,
} from "./index";

const NotificationCenter = ({ notificationCenter, setNotificationCenter }) => {
  const { sound, theme } = useGlobalContext();

  const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?tags=front_page";

  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchInfo = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data.hits);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo(API_ENDPOINT);

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

  if (isLoading) {
    return (
      <>
        <section
          className={`${
            notificationCenter
              ? "container-back-notification notification-move"
              : `container-back-notification ${isClosed}`
          }`}
        >
          <div className="container-notification">
            <button
              className="close-modal-btn-notification"
              onClick={sound ? () => soundAction() : () => notificationClose()}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {theme === "light" ? (
              <img
                className="loading"
                src="https://art.pixilart.com/010daff759faae6.png"
                alt=""
              />
            ) : (
              <img
                className="loading"
                src="https://art.pixilart.com/abe4c798bd975be.png"
                alt=""
              />
            )}
          </div>
        </section>
      </>
    );
  }

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
            const { title, url, points, num_comments, author } = item;
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
                <h3 className="title title-back">Hacker News</h3>
                <h4 className="news-title">{title}</h4>
                <p>By {author} </p>
                <p>
                  {" "}
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--dark-high)" }}
                  >
                    Read More
                  </a>
                </p>
                <p className="info">
                  {points} points | {num_comments} comments
                </p>
              </article>
            );
          })}
          <button
            className="btn-next-notification"
            onClick={() => setIndex(index + 1)}
          >
            Show More News
          </button>
        </div>
      </section>
    </>
  );
};

export default NotificationCenter;
