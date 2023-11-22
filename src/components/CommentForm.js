import { useState } from 'react';

    const CommentForm= ({ addComment}) => {
    const [comment, setComment] = useState('');
    console.log(comment)

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
            <div>
    <form className='Comment-form' onSubmit={handleSubmit}>
    <textarea
        className="comment-textarea"
        placeholder="Enter your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button className="comment-button" type="submit" >Comment</button>
</form>
        </div>
        )
        }
    

export default CommentForm;