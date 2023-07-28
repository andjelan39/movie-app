import React from "react";
import "../style/FAQ.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState, useEffect } from "react";

const FAQ = () => {

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item" key={item.id}>
              <div className="item-title" onClick={() => toggle(i)}>
                <h3>{item.question}</h3>
                <span>
                  {selected === i ? (
                    <>
                      <SlArrowUp />
                    </>
                  ) : (
                    <>
                      <SlArrowDown />
                    </>
                  )}
                </span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    question: "What is Flicks?",
    answer:
      "Flicks is a streaming app designed to provide a seamless and immersive movie-watching experience. With high-definition streaming and user-friendly navigation, you can easily browse, search, and enjoy your favorite movies on any device, anytime, and anywhere. It also allows you to book tickets and watch movies in your closest cinema.",
  },
  {
    id: 2,
    question: "How does the streaming app work?",
    answer:
      "Our streaming app allows you to watch movies on-demand. Simply sign up for an account, browse through our extensive movie library, and select the movie you want to watch. You can stream the movie instantly on your device of choice.",
  },
  {
    id: 3,
    question: "Is there a cost to use the streaming app?",
    answer:
      "No, there is no subscription cost associated with our streaming app. All you need to do is sign up, using our registration form. The only thing you have to pay is a movie ticket at your local cinema, if you decide to book a movie. Details about ticket pricing can be found at your local cinema.",
  },
  {
    id: 4,
    question: "Can I watch movies offline?",
    answer:
      "No, our app does not offer an offline viewing feature. But you can book a movie and see it in your closest flicks cinema. Open a movie you wish to watch and click on Book button.",
  },
  {
    id: 5,
    question: "Can I watch movies on multiple devices?",
    answer:
      "Absolutely! You can access our streaming app on multiple devices, including smartphones, tablets, smart TVs, and computers. Simply log in to your account on any compatible device, and your movie library and progress will be synced across all devices.",
  },
  {
    id: 6,
    question: "Are subtitles available for movies?",
    answer:
      "Yes, we offer subtitles for a wide range of movies. You can customize the language and display settings for subtitles based on your preferences. This feature enhances accessibility and ensures a great viewing experience for all users.",
  },
  {
    id: 7,
    question: "Can I provide feedback or suggest movies?",
    answer:
      "Absolutely! We value user feedback and suggestions. You can provide feedback by reaching out to our customer support team. We also have dedicated channels where you can suggest movies or request specific titles for our movie library.",
  },
  {
    id: 8,
    question: "How do I book a movie to watch it in cinema?",
    answer:
      "All you have to do it open a movie you want to watch and click on Book button. Once you click on it, it will open a form, where you have to pick a date and a movie you want to see. Once you click on Submit, you successfully booked a movie and secured your tickets. The tickets can be bought at your local cinema. If an issue occurs, you can always contact us by reaching out to our customer support team.",
  },
  {
    id: 9,
    question: "How do I create a Flicks account?",
    answer:
      "Click on Register button in the navigation bar. It will open a form that you have to fill with your name, email and password. Once you click on register, you're all set and you can log in to stream unlimited movies.",
  },
];

export default FAQ;
