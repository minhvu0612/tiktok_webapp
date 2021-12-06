
class In_Out{
    clientId = '919715260856-5n0856cboksmipnbn4vrsb4cer91l7k6.apps.googleusercontent.com';
    onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert('Logged in successfully welcome ' + res.profileObj.name);
    }
    onFailure1 = (res) => {
        console.log('Login failed: res:', res);
        alert(
          'Failed to login.'
        );
    }
    onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out Successfully ✌');
        console.clear();
    }
    onFailure2 = () => {
        alert('Fail');
    }
}

export default In_Out;



