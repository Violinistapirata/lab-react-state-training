import "./LikeButton.css";
import { useState } from 'react';

function LikeButton() {
    const [likes, setLikes] = useState(0);

  return <button className="like-button" onClick={() => setLikes(likes +1)}>{likes + ' Likes'}</button>;
}

export default LikeButton;
