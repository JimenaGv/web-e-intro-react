import { Tweet } from "./Tweet";

// Contenedor que agrupa y muestra todos los Tweets (lista)

export const TweetList = ({ tweets, onLike }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
      ))}
    </div>
  );
};

// De padre a hijos: Home > TweetForm > TweetList > Tweet
// Optimización: utilizar un contecto (useContext) en lugar de darle a TweetList parámetros que sólo necesita Tweet.
