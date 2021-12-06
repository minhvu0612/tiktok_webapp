import './infor.scss';
import Button from '@mui/material/Button'
import { useState } from 'react';
import { useEffect } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function Infor(props){
    const infor = props.infor;
    const userInfor = infor.userInfor;

    const [account, setAccount] = useState(infor.account);

    const fixFollow = (x) => {
        if (x >= 1000000000000000){
            return x/1000000000000 + "MB";
        }
        if (x >= 1000000000000){
            return x/1000000000 + "T";
        }
        if (x >= 1000000000){
            return x/1000000000 + "B";
        }
        if (x >= 1000000){
            return x/1000000 + "M";
        }
        if (x >= 1000){
            return x/1000 + "K";
        }
        return x;
    }

    useEffect(() =>{
        const fixAccount = {
            following: fixFollow(account.following),
            followers: fixFollow(account.followers),
            likes: fixFollow(account.likes),
            userLevel: account.userLevel,
            description: account.description
        }
        setAccount(fixAccount);
    });

    return(
        <>
        <div class="infor--user">
            <img src={userInfor.img} alt="" />
            <div>
                <h1>{userInfor.username}</h1>
                <h3>{userInfor.name}</h3>
                <Button
                    variant="contained"
                    size="medium"
                    className="btn--follow"
                >
                    Follow
                </Button> 
            </div>
            <MoreVertIcon
                className="user--report--icon"
                onMouseEnter=""
                onMouseLeave=""
            />
        </div>
        <div class="infor--account">
            <p><b>{account.following}</b> Following</p>
            <p><b>{account.followers}</b> Followers</p>
            <p><b>{account.likes}</b> Likes</p>
        </div>

        <p class="infor--descript"><i>{account.description}</i></p>
        <p>Facebook: <a href="https://www.facebook.com/chauchaothit" target="_blank" class="infor--facebook">{userInfor.facebook}</a></p>
        <p>Email: {userInfor.email}</p>
        </>
    );
}