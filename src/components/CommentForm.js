import { useState } from 'react';

    const CommentForm= ({ addComment}) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    console.log(comment)

    const onClickHandler=() => {
        setComments((comments) => [...comments, comment]);
    }

        const handleSubmit = (e)=> {
            e.preventDefault();
            if (comment.trim()!== ""){
                alert(comment)
                addComment(comment)
                setComment('')
            }

        }
    // const Onsubmit =(e) =>{
    //     console.log(comment)
    // }
        return(
            <div >
    <form className='Comment-form' onSubmit={handleSubmit}>
    <textarea
        className="comment-textarea"
        placeholder="Enter your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className='main-container'>
            {comments.map((text) => (
                <div className='comment-container'>{text}</div>
            ))}
        </div>
        <div className='comment-container'>{comment}</div>
        <button className="comment-button" type="submit"onClick={onClickHandler} >Comment</button>
</form>
        </div>

        )
        }
    

export default CommentForm;