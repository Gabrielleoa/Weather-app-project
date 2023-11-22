import { useState } from "react"
export default function Like(){
    const [likeCount, setLikeCount]= useState(0)
    const [dislikeCount, setDislikeCount]=useState(0)
    const [activeBtn, setActiveBtn] = useState('none');
    const[comment, setComment] = useState("")
    const onChangeHandler = (e) =>
    setComment(e.target.value); {

    }

    const handleLikeClick = () => {
        if (activeBtn === "none"){
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            return;
        }
        if (activeBtn === "like"){
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
        }
        if (activeBtn === "dislike"){
            setLikeCount(likeCount + 1);
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("like");
        }
    };

    const handleDislikeClick = () => {
        if(activeBtn === "none"){
            setDislikeCount(dislikeCount + 1);
            setActiveBtn("dislke");
            return;
        }
        if (activeBtn === "dislike"){
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("none");
            return;
        }
        if (activeBtn === "like"){
        setDislikeCount(dislikeCount + 1);
        setLikeCount(likeCount - 1);
        setActiveBtn("dislike");
        }
    };

    return(
<div className="like">
      <div> <button > <i style={{fontSize:"30px",color:'blue'}} className="fa fa-thumbs-up"  onClick={handleLikeClick}></i>Likes:{likeCount}</button> </div>

      <div>  <button><i style={{fontSize:"30px" ,color:'red'}}  className="fa fa-thumbs-down" onClick={handleDislikeClick}></i>Dislikes:{dislikeCount}</button></div>

        </div>
        
    )
}