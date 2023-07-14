/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

// DOM
const userEmail = document.querySelector(".user-email-input");
const userPw = document.querySelector(".user-password-input");
const loginBtn = document.querySelector(".btn-login");

// 유저 계정
const user = {
  id: "123",
  pw: "123",
};

// 유저 이메일 입력창의 value값 가져오기(ok)
const userEmailValue = function () {
  const value = userEmail.value;
  return value;
};

// 유저 비밀번호 입력창의 value값 받아오기 (ok)
const userPwValue = function () {
  const value = userPw.value;
  return value;
};

// 유저 이메일값 체크 (ok)
function userEmailCheck() {
  const email = userEmailValue();

  if (email === user.id) {
    userEmail.classList.remove("is--invalid");
  } else {
    userEmail.classList.add("is--invalid");
  }
}

// 유저 패스워드값 체크 (ok)
function userPwCheck() {
  const pw = userPwValue();

  if (pw === user.pw) {
    userPw.classList.remove("is--invalid");
  } else {
    userPw.classList.add("is--invalid");
  }
}

userEmail.addEventListener("input", userEmailCheck);
userPw.addEventListener("input", userPwCheck);

// 로그인 버튼을 눌렀을 때 유저 아이디값 추출 (ok)
// 💀 값은 받아오지지만, 정상적인 이메일과 비밀번호를 입력하였을 때 오류발생 AJAX 405 Error가 발생한다.
function userLoginBtn() {
  console.log(userEmailValue());
  console.log(userPwValue());
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// console.log(emailReg());

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 버튼 누를시 이메일과 비밀번호 체크하는 기능 함수 만들기!!!!
