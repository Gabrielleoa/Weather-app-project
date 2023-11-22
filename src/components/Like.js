import { useState } from "react"
export default function Like(){
    const [like, setLike]= useState(0)
    const [dislike, setDislike]=useState(0)

    return(
<div>
        <button> <i style={{fontSize:"30px"}} className="fa fa-thumbs-up"  onClick={() => setLike(like+1)} >{like}</i></button>
        <button><i style={{fontSize:"30px"}} class="fa fa-thumbs-down" onClick={() => setDislike(dislike+1)}>{dislike}</i></button>

        </div>
        
    )
}