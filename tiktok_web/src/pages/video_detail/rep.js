import moment from "moment"
import './rep.scss';


import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { deleteLikeRep, likeCmt } from "../../api/like";
import { useEffect, useState } from "react";

 /* Like cmt */
 const onLikeCmt = async (id) => {
    const data = {
        user_id: localStorage.getItem("id"),
        reply_id: id,
        status: 0,
    }
    await likeCmt(data)
    .then(
        (res) => {
            //setLoadComments(true);
            console.log(res);
        }
    )
} 

const onDislikeCmt = async (id) => {
    const data = {
        user_id: localStorage.getItem("id"),
        reply_id: id,
    }
    await deleteLikeRep(data)
    .then(
        (res) => {
            if (res.data.alert == 200){
                //setLoadComments(true);
            }
        }
    )
} 

export function SetRep(data, id, check_like, count_like, video_user_id){
    const check = check_like;
    const count = count_like;
    if (data.comment_id == id){
        return (
            <div style={{width: 100 + "%", display: "flex", justifyContent: "space-between", 
                         alignItems: "center", marginLeft: 80 + "px", position: "relative"}}>
                <div>
                    {
                        (data.user.id == video_user_id)?(
                            <div className="line--rep">
                                <img src={data.user.avatar} alt="" />
                                <div>
                                    <h1 style={{color: "rgb(228, 23, 64)"}}>{data.user.username}</h1>
                                    <p dangerouslySetInnerHTML={{__html:data.content}}></p>
                                </div>
                            </div>
                        ):(
                            <div className="line--rep">
                                <img src={data.user.avatar} alt="" />
                                <div>
                                    <h1>{data.user.username}</h1>
                                    <p dangerouslySetInnerHTML={{__html:data.content}}></p>
                                </div>
                            </div>
                        )
                    }
                    <div className="time--rep">
                        <p>{moment(data.created_at).format('MM-DD-YYYY')}</p>
                    </div>
                </div>
                <div className="like--reply">
                    {
                        (check)?
                        (<button onClick={() => {onDislikeCmt(data.id); check--; count--}}>
                            <FavoriteIcon style={{color: "rgba(254, 44, 85, 1.0)", fontSize: 1.1 + "em"}} /></button>)
                        :(<button><FavoriteBorderIcon style={{fontSize: 1.1 + "em"}} onClick={() => 
                            {onLikeCmt(data.id); check++; count++}} /></button>)
                    }
                    <p>{count}</p>
                </div>
            </div>
        )
    }
    else{
        return <></>
    }
}