/**
 * @file main.js
 * @description 이메일 구독 폼(#notify-form)의 유효성 검사(Validation) 및 UI 제어 로직
 *
 * 실행 흐름 (Flow):
 *   1. DOMContentLoaded → DOM 요소 참조 획득
 *   2. 폼 'submit' 이벤트 감지 → 기본 동작(새로고침) 차단
 *   3. 이메일 값 추출 및 유효성 검사
 *      ├─ 실패 → showError(message) 호출 후 함수 종료(early return)
 *      └─ 통과 → clearError() 호출 후 성공 처리
 *
 * 유지보수 포인트:
 *   - 에러 메시지 문구를 바꾸려면 showError() 호출부의 문자열 인수를 수정하세요.
 *   - 이메일 외 다른 필드를 검증하려면 같은 패턴으로 검증 블록을 추가하세요.
 *   - 성공 처리 로직은 하단 "// TODO" 마커 위치를 참조하세요.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── DOM 요소 참조 ──────────────────────────────────────────────────────────
  /** @type {HTMLFormElement} 이메일 구독 폼 */
  const form         = document.getElementById('notify-form');

  /** @type {HTMLInputElement} 이메일 주소 입력칸 */
  const emailInput   = document.getElementById('email-input');

  /** @type {HTMLSpanElement} 에러 메시지 표시 영역 */
  const errorMessage = document.getElementById('email-error');

  // ── 상수 정의 ──────────────────────────────────────────────────────────────
  /**
   * 이메일 형식 검증 정규표현식
   *
   * 패턴 해설: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   *   ^          : 문자열의 시작
   *   [^\s@]+    : 공백(\s)과 @를 제외한 문자가 1개 이상 (로컬 파트: 예 "hello")
   *   @          : 반드시 @ 기호 1개 존재
   *   [^\s@]+    : 공백과 @를 제외한 문자가 1개 이상 (도메인명: 예 "gmail")
   *   \.         : 반드시 점(.) 1개 존재 (이스케이프 필요)
   *   [^\s@]+    : 공백과 @를 제외한 문자가 1개 이상 (TLD: 예 "com")
   *   $          : 문자열의 끝
   *
   * 통과 예시: hello@gmail.com, user.name@company.co.kr
   * 실패 예시: hello, hello@, @gmail.com, name#example.com
   *
   * @type {RegExp}
   */
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  // ── 도우미 함수 (Helper Functions) ────────────────────────────────────────

  /**
   * showError — 에러 상태를 화면에 표시합니다.
   *
   * 수행 작업:
   *   1. 에러 메시지 텍스트를 채우고 표시(hidden 제거)
   *   2. 모바일·태블릿에서 입력칸에 빨간 테두리 추가
   *      (border-transparent는 제거하지 않아 데스크탑에서 흰 테두리가 생기는 버그를 방지)
   *   3. ARIA 속성 갱신 → 스크린 리더가 입력 오류를 인식
   *
   * @param {string} message - 사용자에게 표시할 에러 문구
   * @returns {void}
   */
  function showError(message) {
    // 에러 메시지 텍스트를 채우고 화면에 표시
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    errorMessage.classList.add('block');

    /*
     * 빨간 테두리: 모바일·태블릿(max-lg:)에서만 표시
     * border-transparent는 건드리지 않습니다.
     * → 데스크탑(lg+)에서는 max-lg: 조건에 해당하지 않으므로
     *   border-transparent가 그대로 유지되어 흰 테두리가 노출되지 않습니다.
     */
    emailInput.classList.add('max-lg:border-red400');

    // 접근성: 잘못된 입력 상태를 스크린 리더에 알림
    emailInput.setAttribute('aria-invalid', 'true');
  }

  /**
   * clearError — 에러 상태를 초기화하고 입력칸을 정상 상태로 되돌립니다.
   *
   * 수행 작업:
   *   1. 에러 메시지 텍스트를 비우고 숨김(hidden 추가)
   *   2. 추가했던 빨간 테두리 클래스를 제거 (border-transparent는 원래부터 유지됨)
   *   3. ARIA 속성 원상 복구
   *
   * @returns {void}
   */
  function clearError() {
    // 에러 메시지 숨김
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
    errorMessage.classList.remove('block');

    // showError()에서 추가한 빨간 테두리만 제거
    // border-transparent는 처음부터 유지되고 있으므로 별도로 추가할 필요가 없습니다.
    emailInput.classList.remove('max-lg:border-red400');

    // 접근성: 정상 상태로 복원
    emailInput.setAttribute('aria-invalid', 'false');
  }


  // ── 폼 제출 이벤트 리스너 ─────────────────────────────────────────────────

  /**
   * 'submit' 이벤트: 폼 제출 시 유효성 검사를 실행합니다.
   * event.preventDefault()로 페이지 새로고침을 막고 커스텀 로직을 사용합니다.
   */
  form.addEventListener('submit', (event) => {
    // 폼 기본 동작(페이지 새로고침 또는 GET 요청) 차단
    event.preventDefault();

    // 좌우 공백 제거 후 값 추출
    const emailValue = emailInput.value.trim();

    // ── 유효성 검사 1: 빈 값 확인 ──
    if (!emailValue) {
      showError('Oops! Please add your email');
      return; // 이후 코드 실행하지 않고 즉시 종료 (Early Return 패턴)
    }

    // ── 유효성 검사 2: 이메일 형식 확인 ──
    if (!EMAIL_REGEX.test(emailValue)) {
      showError('Oops! That doesn\'t look like an email address');
      return;
    }

    // ── 검증 통과: 성공 처리 ──────────────────────────────────────────────
    clearError();

    // TODO: 실제 서비스 배포 시, 여기에 백엔드 API(예: 서버로 이메일 전송) 연동 코드를 추가하세요.
    //       예시: fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: emailValue }) })
    alert('성공적으로 이메일이 제출되었습니다! 🎉');
    emailInput.value = '';
  });

});
