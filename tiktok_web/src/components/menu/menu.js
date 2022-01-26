import { Link } from 'react-router-dom';
import './menu.scss';
import Cookies from 'js-cookie';



// import img
import tiktok from './../../assets/image/tiktok.svg';
import email from './../../assets/image/email.png';
import google from './../../assets/image/google.jpg';
import { useEffect, useState } from 'react';
import { getUser } from '../../api/signup';
import { removeLocal, setLocal } from '../../api/localSet';
import { onLogin } from '../../api/login';


function Menu(props){

    // chuyen đoi form login - signup
    const [login, setLogin] = useState('disable');
    const [login_choose, setLoginChoose] = useState('menu--login--choose');
    const [login_form, setLoginForm] = useState('disable');


    const [signup, setSignup] = useState('disable');
    const [signup_choose, setSignupChoose] = useState('menu--signup--choose');
    const [signup_form, setSignupForm] = useState('disable');

    // set alert
    const [alert_login1, setAlert1] = useState('disable');
    const [alert_login2, setAlert2] = useState('disable');
    const [alert_signup1, setAlert3] = useState('disable');
    const [alert_signup2, setAlert4] = useState('disable');

    // set alert not login
    const [alert, setAlert] = useState('disable');


    // set user menu
    const [user_menu, setMenu] = useState('disable');


    // set data login
    const [email_login, setEmailLogin] = useState('');
    const [pass_login, setPassLogin] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email: email_login,
            password: pass_login,
        }
        //console.log(data);
        onLogin(data).then(res => {
            if (res.data.alert == 200){
                setAlert1('alert--login--success');
                setTimeout(() => {
                    setAlert1('disable');
                    window.location.reload();
                }, 1000);
                Cookies.set('user', res.data);
                setLocal(res.data);
            }
            else{
                setAlert2('alert--login--fail');
                setTimeout(() => {
                    setAlert2('disable');
                }, 1000);
            }
        })
    }


    //set data signup
    const [username_signup, setUsernameSignup] = useState('');
    const [fullname_signup, setFullNameSignup] = useState('');
    const [email_signup, setEmailSignup] = useState('');
    const [age_signup, setAgeSignup] = useState('');
    const [gender_signup, setGenderSignup] = useState('male');
    const [pass_signup, setPassSignup] = useState('');
    const [confirm_signup, setConfirmSignup] = useState('');


    // set valid fullname and password
    const [fullnameValid, setFullnameValid] = useState('fullname--valid--disable');
    const [passwordValid, setPasswordValid] = useState('password--valid--disable');

    const saveDataSignup = (e) => {
        e.preventDefault();
        const data = {
            username: username_signup,
            fullname: fullname_signup,
            email: email_signup,
            age: age_signup,
            gender: gender_signup,
            password: pass_signup,
            confirm: confirm_signup,
        }
        var count = 0;
        for (let i = 1; i < data.fullname.length-1; i++){
            if (data.fullname.charAt(i) == ' ' && data.fullname.charAt(i+1) != ' '){
                count++;
            }
        }
        if (count < 1){
            setFullnameValid('fullname--valid');
            setPasswordValid('password--valid--disable');
        }
        else if (data.password.localeCompare(data.confirm) != 0){
            setPasswordValid('password--valid');
            setFullnameValid('fullname--valid--disable');
        }
        else{
            setFullnameValid('fullname--valid--disable');
            setPasswordValid('password--valid--disable');
            //console.log(data);
            getUser(data).then((res) => {
                if (res.data.alert == 200){
                    setAlert3('alert--signup--success');
                    setTimeout(() => {
                        setAlert3('disable');
                        window.location.reload();
                    }, 1000);
                    Cookies.set('user', res.data);
                    setLocal(res.data);
                }
                else{
                    setAlert4('alert--signup--fail');
                    setTimeout(() => {
                       setAlert4('disable');
                    },1000);
                }
            })
        }
    }

    const UserDiv = () => {
        if (Cookies.get("user") == null){
            return(
                <div className="menu--user--div">
                    <a className='menu--link--upload' 
                       style={{cursor: "pointer"}}
                       onClick={() => setAlert('alert--notlogin')}
                    >{props.lang("menu.upload")}</a>
                    <button className='menu--login--btn'
                        onClick={() => setLogin('menu--login')}
                    >{props.lang("menu.login")}</button>
                </div>
            );
        }
        else{
           return (
                <div className="menu--user--div">
                    {
                        (window.location.pathname === '/upload')?(
                            <Link className='menu--link--upload' style={{color: "rgba(254, 44, 85, 1.0)"}} to="/upload">{props.lang("menu.upload")}</Link>
                        ):<Link className='menu--link--upload' to="/upload">{props.lang("menu.upload")}</Link>
                    }
                    <img className='menu--avatar' src={localStorage.getItem('avatar')} alt="avatar" onClick={() => {
                        if (user_menu == 'disable'){
                            setMenu('menu--user--menu');
                        }
                        else{
                            setMenu('disable');
                        }
                    }} />
                    <div className={user_menu}>
                        <div className='user--menu--content'>
                            <img src={localStorage.getItem('avatar')} alt="avatar" />
                            <div>
                                <p style={{display: 'block', width: 100 + 'px', textAlign: 'center'}}>{localStorage.getItem('username')}</p>
                            </div>
                        </div>
                        <Link to='/personal' onClick={() => {
                            setMenu('disable');
                        }} className='user--menu--link'>{props.lang("menu.personal")}</Link>
                        <Link to='/setting' onClick={() => {
                            setMenu('disable');
                        }} className='user--menu--link'>{props.lang("menu.setting")}</Link>
                        <Link className='user--menu--link' to='/' onClick={() => {
                            removeLocal();
                            Cookies.remove('user');
                            window.location.href = '/';
                        }}>{props.lang("menu.logout")}</Link>
                    </div>
                </div>
           );
        }
    }

    return (
        <>
        <div className="menu--components">
            <img className='menu--logo' src={tiktok} alt="logo" />
            <input className='menu--search' type="search" placeholder={props.lang("menu.search")} />
            <button className='menu--search--btn'>SE</button>
            <UserDiv />
        </div>
        <div className={alert}>
            <div className="alert--content">
                <h1>{props.lang('user.alert_title')}</h1>
                <button onClick={() => setAlert('disable')}>{props.lang('user.alert_btn')}</button>
            </div>
        </div>


        
        <div className={login}>
            <div className={login_choose}>
                <h1 className='menu--login--title'>{props.lang("menu.login_form.title")}</h1>
                <div className='menu--login--email'>
                    <img src={email} alt="email" />
                    <button 
                        onClick={
                            () => {
                                setLoginChoose('disable');
                                setLoginForm('menu--login--form')
                            }
                        }
                    >{props.lang("menu.login_form.email")}</button>
                </div>
                <div className='menu--login--google'>
                    <img src={google} alt="email" />
                    <button>{props.lang("menu.login_form.google")}</button>
                </div>
                <p className='menu--login--change'>
                    {props.lang("menu.login_form.change_signup")} 
                    <span 
                        onClick={() => {
                            setLogin('disable');
                            setLoginChoose('menu--login--choose');
                            setLoginForm('disable');
                            setSignup('menu--signup');
                        }}
                    >{props.lang("menu.login_form.signup")}</span>
                </p>
                <button className='exit--btn'
                    onClick={() => {
                        setLogin('disable');
                        setLoginChoose('menu--login--choose');
                        setLoginForm('disable')
                    }}
                >E</button>
            </div>
            <div className={login_form} onSubmit={(e) => handleLogin(e)}>
                <h1 className='menu--login--title'>{props.lang("menu.login_form.title")}</h1>
                <div className={alert_login1}>{props.lang("menu.form_setlogin.alert1")}</div>
                <div className={alert_login2}>{props.lang("menu.form_setlogin.alert2")}</div>
                <form className='menu--form'>
                    <label>{props.lang("menu.form_setlogin.field1")}</label><br />
                    <input type='email' required onChange={(e) => setEmailLogin(e.target.value)} /><br />
                    <label>{props.lang("menu.form_setlogin.field2")}</label><br />
                    <input type='password' required minLength="6" onChange={(e) => setPassLogin(e.target.value)} /><br />
                    <button type='submit'>{props.lang("menu.form_setlogin.submit")}</button>
                </form>
                <button className='exit--btn'
                    onClick={() => {
                        setLogin('disable');
                        setLoginChoose('menu--login--choose');
                        setLoginForm('disable')
                    }}
                >E</button>
            </div>
        </div>








        <div className={signup}>
            <div className={signup_choose}>
               <h1 className='menu--signup--title'>{props.lang("menu.signup_form.title")}</h1>
                <div className='menu--signup--email'>
                    <img src={email} alt="email" />
                    <button 
                        onClick={
                            () => {
                                setSignupChoose('disable');
                                setSignupForm('menu--signup--form')
                            }
                        }
                    >{props.lang("menu.signup_form.email")}</button>
                </div>
                <div className='menu--signup--google'>
                    <img src={google} alt="email" />
                    <button>{props.lang("menu.signup_form.google")}</button>
                </div>
                <p className='menu--signup--change'>
                    {props.lang("menu.signup_form.change_login")} 
                    <span 
                        onClick={() => {
                            setSignup('disable');
                            setSignupChoose('menu--signup--choose');
                            setSignupForm('disable');
                            setLogin('menu--login');
                        }}
                    >{props.lang("menu.signup_form.login")}</span>
                </p>
                <button className='exit--btn'
                    onClick={() => {
                        setSignup('disable');
                        setSignupChoose('menu--signup--choose');
                        setSignupForm('disable')
                    }}
                >E</button>
            </div>
            <div className={signup_form} onSubmit={(e) => saveDataSignup(e)}>
                <h1 className='menu--signup--title'>{props.lang("menu.signup_form.title")}</h1>
                <div className={alert_signup1}>{props.lang("menu.form_setsignup.alert1")}</div>
                <div className={alert_signup2}>{props.lang("menu.form_setsignup.alert2")}</div>
                <form className='menu--form'>
                    <label>{props.lang("menu.form_setsignup.field1")}</label><br />
                    <input type='text' minLength="6" required onChange={(e) => setUsernameSignup(e.target.value)} /><br />
                    <label>{props.lang("menu.form_setsignup.field2")}</label><br />
                    <input type='text' required onChange={(e) => setFullNameSignup(e.target.value)} /><br />
                    <p className={fullnameValid}>{props.lang("menu.form_setsignup.fullname_alert")}</p>
                    <label>{props.lang("menu.form_setsignup.field3")}</label><br />
                    <input type='email' required onChange={(e) => setEmailSignup(e.target.value)} /><br />
                    <label>{props.lang("menu.form_setsignup.field4")}</label><br />
                    <input type='number' required min="16" required onChange={(e) => setAgeSignup(e.target.value)} /><br />
                    <label>{props.lang("menu.form_setsignup.field5")}</label><br />
                    <select onChange={(e) => setGenderSignup(e.target.value)}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select><br />
                    <label>{props.lang("menu.form_setsignup.field6")}</label><br />
                    <input type='password' required minLength="6" onChange={(e) => setPassSignup(e.target.value)} /><br />
                    <label>{props.lang("menu.form_setsignup.field7")}</label><br />
                    <input type='password' required onChange={(e) => setConfirmSignup(e.target.value)} /><br />
                    <p className={passwordValid}>{props.lang("menu.form_setsignup.confirm_alert")}</p>
                    <button type='submit'>{props.lang("menu.form_setsignup.submit")}</button>
                </form>
                <button className='exit--btn'
                    onClick={() => {
                        setSignup('disable');
                        setSignupChoose('menu--signup--choose');
                        setSignupForm('disable')
                    }}
                >E</button>
            </div>
        </div>
        </>
    );
}

export default Menu;