
import { useEffect, useState } from 'react';
import { onCountFollow } from '../../api/follows';
import './userChild.scss';

function UserChild(props){

    const [count_follow, setFollow] = useState();

    useEffect(() => {
        const id = props.user.id;
        async function fetchCount(){
            await onCountFollow(id)
            .then(
                (res) => setFollow(res.data.followers)
            )
        }
        fetchCount();
    }, []);

    return(
        <div className="user--child" onClick={() => {window.location.href = '/users/' + props.user.id}}>
            <img src={props.user.avatar} />
            <div className='user--child--infor'>
                <h1>{props.user.username}</h1>
                <div className='user--child--infor--1'>
                    <p>{props.user.fullname}</p>
                    <p>{count_follow} Follower</p>
                </div>
            </div>
        </div>
    );
}

export default UserChild;