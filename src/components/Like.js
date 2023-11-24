import { useState } from "react";

export default function Like() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [activeBtn, setActiveBtn] = useState('none');
  const [sparkles, setSparkles ] = useState(false);

  const handleLikeClick = () => {
    setSparkles(true);
    setTimeout(() => setSparkles(false), 3000);

    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }
    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }
    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDislikeClick = () => {
    setSparkles(true);
    setTimeout(() => setSparkles(false), 3000);

    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }
    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }
    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };

  return (
    <div className="button-container">
      <button className={`like-button thumbs-up ${activeBtn === "like" ? 'active' : ''} ${sparkles ? 'sparkles-animation' : ''}`} onClick={handleLikeClick}>
        <i className="fa fa-thumbs-up"></i>
        {likeCount}
      </button>
      <button className={`like-button thumbs-down ${activeBtn === "dislike" ? 'active' : ''} ${sparkles ? 'sparkles-animation' : ''}`} onClick={handleDislikeClick}>
        <i className="fa fa-thumbs-down"></i>
        {dislikeCount}
      </button>
    </div>
  );
}
