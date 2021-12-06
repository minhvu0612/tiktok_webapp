
import Header from '../../layouts/Header/Header'
import Sidebar from '../../layouts/Sidebar/Sidebar';
import Personal from '../../layouts/Personal/personal';
import { useLocation } from 'react-router-dom'
import './personal.scss';

export default function PersonalPage(){
    const location = useLocation();
    return(
        <div>
            <Header user={location.state} />
            <div className="container">
                <Sidebar />
                <div className="content">
                    <Personal />
                </div>
            </div>
        </div>
    );
}