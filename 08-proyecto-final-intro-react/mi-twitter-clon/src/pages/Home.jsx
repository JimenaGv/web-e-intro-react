import { useState, useEffect } from "react";
import { TweetForm } from "../components/TweetForm";
import { TweetList } from "../components/TweetList";

// Página principal del usuario autenticado con listado de tweets y formulario para publicarlos
export const Home = ({ user }) => {
  const [tweets, setTweets] = useState([]);

  // Recuperar tweets almacenados
  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(storedTweets);
  }, []);

  // Guardar tweets cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  // Función para añadir Tweets
  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text, // Es lo mismo que text: text
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  // Función para añadir likes
  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4">Twitter 🐦</h1>
        {user && <p className="fw-bold">¡Hola, {user.username}!</p>}
        <TweetForm onAddTweet={addTweet} />
        <TweetList tweets={tweets} onLike={likeTweet} />
      </div>
    </>
  );
};
