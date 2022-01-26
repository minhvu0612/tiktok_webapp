// import library
import React, { Component} from 'react'
import { withTranslation } from 'react-i18next';
import i18next from './i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


// import components
//import { routes } from './routes/route';
import Home from './pages/home/home';


//import scss
import './App.scss';
import Setting from './pages/setting/setting';
import User from './pages/user/user';
import Personal from './pages/personal/personal';
import { onLoadAll } from './api/loadAllUser';
import Following from './pages/following/following';
import Upload from './pages/upload/upload';
import VideoDetail from './pages/video_detail/video';
import { onGetAllVideo } from './api/loadVideoByUserId';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


class App extends Component {

  constructor(){
    super();
    this.state = {
      all_data: [],
      all_video: [],
      loading: false,
      class_load: "disable",
    };
  }

  handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  /*
  setLang(lang) {
    window.localStorage.setItem('lang', lang);
    this.handleClick(window.localStorage.getItem('lang'));
    console.log(this.props);
  }
 */

  async componentDidMount(){
    const res1 = await onLoadAll();
    const res2 = await onGetAllVideo();
    this.setState({
      all_data: res1.data.data,
      all_video: res2.data.data,
    })
    this.setState({loading: true, class_load: "sweet-loading"});
    setTimeout(() => {
      this.setState({loading: false, class_load: "disable"});
    }, 2000);
    //console.log(this.state.all_data, this.state.all_video);
  }

  componentDidUpdate(){
    //this.state.all_data.map((val, key) => console.log(val));
    //console.log(this.state.all_data);
  }
  
  render() {
    const { t } = this.props;
    return (
      <div className="App">
        <div className={this.state.class_load}>
          <ClipLoader css={override} size={100} color={"rgba(254, 44, 85, 1.0)"} loading={this.state.loading} speedMultiplier={1.0} />
        </div>
        <Router>
          <Routes>
            <Route exact path = '/' element = {<Home lang = {t} />} />
            <Route exact path = '/following' element = {<Following lang = {t} />} />
            <Route exact path = '/personal' element = {<Personal lang = {t} />} />
            {
              this.state.all_data.map((val, key) => {
                if (val.id != localStorage.getItem('id')){
                  return <Route exact path = {'/users/' + val.id} element = {<User lang = {t}  id ={val.id} />} />
                }})
            }
            {
              this.state.all_video.map((val, key) => {
                return <Route exact path = {"/videos/" + val.id} element = {<VideoDetail lang = {t}  id ={val.id} />} />
              })
            }
            <Route exact path = '/setting' element = {<Setting lang = {t} />} />
            <Route exact path = '/upload' element = {<Upload lang = {t} />} />
          </Routes>
        </Router>
        <select className='selectLang' onChange={(e) => this.handleClick(e.target.value)}>
          <option value='vi'>vi</option>
          <option value='en'>en</option>
          <option value='jp'>jp</option>
        </select>
      </div>
    )
  }
}

export default withTranslation()(App);
