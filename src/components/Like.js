import { useState } from "react"
export default function Like(){
    const [like, setLike]= useState(0)
    const [dislike, setDislike]=useState(0)

    return(
<div className="like">
      <div> <button > <i style={{fontSize:"30px",color:'blue'}} className="fa fa-thumbs-up"  onClick={() => setLike(like+1)} >{like}</i></button> </div>

      <div>  <button><i style={{fontSize:"30px" ,color:'red'}}  className="fa fa-thumbs-down" onClick={() => setDislike(dislike+1)}>{dislike}</i></button></div>

        </div>
        
    )
}