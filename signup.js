// signup.js

// 각 요소 가져오기
const userIdInput = document.getElementById("userId");
const checkIdBtn = document.getElementById("checkIdBtn");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordConfirm");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const signupBtn = document.getElementById("signupBtn");

const idError = document.getElementById("idError");
const passwordError = document.getElementById("passwordError");
const passwordConfirmError = document.getElementById("passwordConfirmError");
const phoneError = document.createElement("p");
const emailError = document.createElement("p");

// 전화번호, 이메일 오류 메시지 요소 추가
phoneInput.parentElement.appendChild(phoneError);
emailInput.parentElement.appendChild(emailError);

// 기본적으로 오류 메시지를 숨김
phoneError.classList.add("error-text");
emailError.classList.add("error-text");

// 아이디 중복 확인 함수 (임시로 중복 확인 버튼 클릭시 유효한 것으로 처리)
checkIdBtn.addEventListener("click", function () {
    const userId = userIdInput.value;
    if (userId.length >= 6 && userId.length <= 20) {
        idError.style.visibility = "hidden";
        alert("사용 가능한 아이디입니다.");
    } else {
        idError.textContent = "아이디는 6~20자이어야 합니다.";
        idError.style.visibility = "visible";
    }
});

// 비밀번호 유효성 검사
passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "비밀번호는 대소문자, 숫자, 특수문자를 포함한 8~20글자여야 합니다.";
        passwordError.style.visibility = "visible";
    } else {
        passwordError.style.visibility = "hidden";
    }
});

// 비밀번호 확인 일치 검사
passwordConfirmInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    if (password !== passwordConfirm) {
        passwordConfirmError.textContent = "비밀번호가 일치하지 않습니다.";
        passwordConfirmError.style.visibility = "visible";
    } else {
        passwordConfirmError.textContent = ""; // 오류 문구를 제거하되 간격 유지
        passwordConfirmError.style.visibility = "hidden";
    }
});

// 전화번호 유효성 검사
phoneInput.addEventListener("input", function () {
    const phone = phoneInput.value;
    const phoneRegex = /^\d{11}$/;

    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "핸드폰 번호는 11글자의 숫자여야 합니다.";
        phoneError.style.visibility = "visible";
    } else {
        phoneError.style.visibility = "hidden";
    }
});

// 이메일 유효성 검사
emailInput.addEventListener("input", function () {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "유효한 이메일 주소를 입력하세요.";
        emailError.style.visibility = "visible";
    } else {
        emailError.style.visibility = "hidden";
    }
});

// 모든 입력 필드가 유효한지 확인하여 가입 버튼 활성화
document.addEventListener("input", function () {
    const isUserIdValid = userIdInput.value.length >= 6 && userIdInput.value.length <= 20;
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/.test(passwordInput.value);
    const isPasswordConfirmValid = passwordInput.value === passwordConfirmInput.value;
    const isPhoneValid = /^\d{11}$/.test(phoneInput.value);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

    if (isUserIdValid && isPasswordValid && isPasswordConfirmValid && isPhoneValid && isEmailValid) {
        signupBtn.disabled = false;
    } else {
        signupBtn.disabled = true;
    }
});

// 가입 버튼 클릭 이벤트 처리
signupBtn.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    const isUserIdValid = userIdInput.value.length >= 6 && userIdInput.value.length <= 20;
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/.test(passwordInput.value);
    const isPasswordConfirmValid = passwordInput.value === passwordConfirmInput.value;
    const isPhoneValid = /^\d{11}$/.test(phoneInput.value);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

    if (isUserIdValid && isPasswordValid && isPasswordConfirmValid && isPhoneValid && isEmailValid) {
        alert("가입이 완료되었습니다!"); // 가입 완료 팝업
    } else {
        alert("모든 필드를 올바르게 입력하세요."); // 입력 누락 필드 안내
    }
});
