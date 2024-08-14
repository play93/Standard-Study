# 시작

보일러플레이트가 개발에 필요한 기본적인 코드 구조/설정을 미리 만들어 놓은 템플릿<br>
무조건 좋은건 아님 => 필요한것 이상으로 제공해주기도 함. => 메모리 차지

## JSX (=> 리액트 컴포넌트)

- 리액트 컴포넌트 구조를 표현할 때 사용!
  "작스" 라고 읽는다. "제이에스엑스"라고 읽으면 안됨!<br>
  JavaSctipt XML => HTML처럼 이해하자.<br>
  만약 html요소가 필요 없는 파일이면 `.js`로 생성, 필요하면 `.jsx`로 생성
- 중괄호 안에는 자바스크립트 요소를 넣음
- 부모요소가 하나 있어야함.
- 리액트는 state로만 얘기함. state를 이해하는 것이 너무 중요함!

#### 리액트 컴포넌트는 State의 변경을 감지해 화면에 리렌더링 한다. ( State변경 = 리렌더링 )

- 리액트에서 새로고침되는 상황은 거의 없어야 함! <= 리액트는 SPA(single page application)로 동작하므로
- 하나의 페이지 안에서 리렌더링을 통해 화면 변화를 만들어 내는데, 새로고침을 하게 되면 상태들이 모두 초기화되므로 새로고침이 되지 않도록 해야함!!
- form태그는 제출을 위해 사용하는 태그. 따라서 submit이라는 고유의 속성을 가지고 있어서 새로고침 되는 것!
