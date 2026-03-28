// 문서가 모두 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', () => {
  // 폼, 입력창, 에러 메시지 요소를 찾아 변수에 담습니다.
  const form = document.getElementById('notify-form');
  const emailInput = document.getElementById('email-input');
  const errorMessage = document.getElementById('email-error');

  // 폼 제출 이벤트(Event Listener) 감지
  form.addEventListener('submit', (event) => {
    // [중요] 폼이 제출될 때 페이지가 위로 튀거나 새로고침되는 현상을 막아줍니다.
    event.preventDefault();

    // 입력된 이메일의 좌우 공백을 제거하고 값을 가져옵니다.
    const emailValue = emailInput.value.trim();
    // 정규표현식: '@'와 '.'이 포함된 일반적인 이메일 형식인지 검사하는 공식입니다.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    let errorText = ''; // 에러 문구를 담을 빈 상자 준비

    // Validation 1: 값이 비어있는 경우
    if (!emailValue) {
      errorText = 'Oops! Please add your email';
    } 
    // Validation 2: 이메일 형식이 틀린 경우
    else if (!emailRegex.test(emailValue)) {
      errorText = 'Oops! That doesn’t look like an email address';
    }

    // 에러가 발생했다면 (에러 텍스트가 비어있지 않다면)
    if (errorText) {
      // 텍스트를 채우고, hidden 클래스를 지워서 화면에 표시
      errorMessage.textContent = errorText;
      errorMessage.classList.remove('hidden');
      errorMessage.classList.add('block');
      
      // Tailwind border 색상 변경 (투명 테두리를 빨간색으로)
      emailInput.classList.remove('border-transparent');
      emailInput.classList.add('border-red400');
      
      // 접근성: 스크린 리더에게 잘못된 값이라고 알려줌
      emailInput.setAttribute('aria-invalid', 'true');
    } 
    // 정상적으로 입력됐다면 (통과!)
    else {
      // 에러 메시지와 빨간 테두리 초기화
      errorMessage.textContent = '';
      errorMessage.classList.add('hidden');
      errorMessage.classList.remove('block');
      
      emailInput.classList.remove('border-red400');
      emailInput.classList.add('border-transparent');
      
      emailInput.setAttribute('aria-invalid', 'false');
      
      // 성공 처리 - 축하합니다! (여기서는 입력칸 초기화만 진행)
      alert('성공적으로 이메일이 제출되었습니다! 🎉');
      emailInput.value = '';
    }
  });
});
