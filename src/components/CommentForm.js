import { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [nickName, setNickName] = useState('');

  const onClickHandler = () => {
    setComments((comments) => [...comments, {nickName: nickName, comment: comment }]);
    setComment('');
    setNickName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '' && nickName.trim() !== "") {
      alert("commented");
      addComment(comment);
      setComment('');
      setNickName('')
    }
  };

  return (
    <div>
      <form className='Comment-form' onSubmit={handleSubmit}>
        <textarea
          className="comment-textarea"
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <textarea
          className='comment-textarea'
          placeholder='enter your name'
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        ></textarea>
        <div className='main-container'>
          {comments.map((entry, index) => (
            <div key={index} className='comment-container'>
              <span>{entry.nickName} - {entry.comment}</span>
            </div>
          ))}
        </div>
        <button className="comment-button" type="submit" onClick={onClickHandler}>
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
