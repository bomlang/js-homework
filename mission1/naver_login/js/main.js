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
const loginform = document.querySelector(".login-form");
const errorMessage = document.querySelectorAll(".error-message");

// 유저 계정
const user = {
  id: "bomlang@naver.com",
  pw: "aldks551!",
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
let userEmailCheck = function () {
  const email = userEmailValue();
  let emailAccuracy = emailReg(email);

  // 첫번째로 유저의 이메일 형식을 체크한다.
  if (emailAccuracy) {
    userEmail.classList.remove("is--invalid");
  } else {
    userEmail.classList.add("is--invalid");
  }
  // 이메일값의 형식이 정상적이면 true, 그렇지 않으면 false를 반환합니다.
  return emailAccuracy;
};

// 유저 패스워드값 체크 (ok)
let userPwCheck = function () {
  const pw = userPwValue();
  let pwAccuracy = pwReg(pw);

  if (pwAccuracy) {
    userPw.classList.remove("is--invalid");
  } else {
    userPw.classList.add("is--invalid");
  }
  // 패스워드의 형식이 정상적이면 true, 그렇지 않으면 false를 반환합니다.
  return pwAccuracy;
};

function loginError() {
  if (userEmailValue() === user.id) {
    console.log("good");
  }
}

// 로그인 버튼을 눌렀을 때 유저 아이디값 추출 (ok)
// 💀 값은 받아오지지만, 정상적인 이메일과 비밀번호를 입력하였을 때 오류발생 AJAX 405 Error가 발생한다.
function handleLoginBtn(event) {
  // html파일을 직접 연결해서 사용하는 방법은 페이지가 새로고침되면서 작동하지 않았습니다.
  // const welcomePage = "welcome.html";
  const emailAccuracyCheck = userEmailCheck();
  const pwAccuracyCheck = userPwCheck();
  const emailValue = userEmailValue();
  const pwValue = userPwValue();

  // console.log(emailAccuracyCheck);
  // console.log(pwAccuracyCheck);

  if (emailAccuracyCheck === true && pwAccuracyCheck === true) {
    if (emailValue === user.id && pwValue === user.pw) {
      return (loginform.action = "welcome.html");
    } else {
      event.preventDefault();
      errorMessage[1].innerHTML = "아이디 또는 비밀번호가 틀립니다.";
      userPw.classList.add("is--invalid");
    }
  } else {
    localStorage.getItem();
  }
}

loginBtn.addEventListener("click", handleLoginBtn);

// ture & false를 반환합니다.
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
