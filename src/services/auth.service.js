
const login = (mobile,fcm,referral) => {
  
  return fetch("user/login.php", {
      mobile,
      fcm
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const verify = (otp,token) => {
  let baseurl=process.env.REACT_APP_LOCAL_BASE_URL + 'user/verify.php';
  let user = JSON.parse(localStorage.getItem("user"));
   fetch({
    method: 'post',
    url: baseurl,
    headers:{
      authorization:user.token
    },
    data: {
      otp: otp,
    }
  })
    .then((response) => {
      console.log('rror with succes');
      if (response.data.status===true) {
        localStorage.setItem("isOtpVerify", true);
        return response.data;
      }
      
    }).catch((error)=>{
console.log('auth error')
return error;
    });
};
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("isOtpVerify");

};
const authService = {
  login,
  verify,
  logout,
};
export default authService;
