# ReactStudy: [생활코딩] React

## 1. 수업 소개

이번 강의를 통해서는 React를 가볍게 알아가는 수업

React는 사용자 정의 태그를 만들 수 있게 해줌 (React에서는 사용자 정의 태그 == component)

- 재사용성 높음
- 가독성 높음
- 유지 보수가 쉬움

수업의 목표 : 

- 나만의 component를 만들 수 있음
- 다른 사람이 만든 component를 사용할 수 있음

## 2. 공부 전략

가장 본질적인 내용들을 먼저 공부

1. coding
2. run
3. deploy

그 뒤에서 자세한 내용들을 공부

## 3. 개발환경 구축

🔥공식문서와 친숙해지기🔥

### 1) npm이란?

node.js로 만들어진 여러 앱들이 존재함

이를 편리하게 설치할 수 있게 하는 로그

앱스토어 같은 역할을 하는 것

### 2) npx란?

npm과 같은 역할이지만 딱 한 번만 설치하고 지우는 애

좋은 점: 

- 공간 차지하지 않음
- 최신 버젼을 항상 사용할 수 있다

** 꿀팁! command + j 누르면 터미널 바로 열림!

### 3) 웹앱 실행하기

npm start하면 실행됨

control + C를 하면 종료됨

## 4. 코딩하는 법

++ React는 function 방식과 class 방식 두개로 존재함 (해당 수업에서는 class 이용)

### 1) JS 코딩하는 법

제일 먼저 보이는 파일은 public > index.html 파일

그 안에서 중요한 것은 <div id="root"></div>

root 안 쪽에 react를 이용해서 만든 태그들이 들어가이

→ 위의 것들은 src라는 폴더 안에 들어가있음

→ 대부분의 파일들은 해당 폴더에 들어감

→ index.js 안을 보면 document.getElementByID('root')

→ App.js를 import해서 컴포넌트 사용 (App.js == component)

React는 한 태그 안에 나머지 태그가 있어야해서 제일 바깥 태그 삭제하면 에러남

### 2) CSS 코딩하는 법

import './index.css' ← 이런식으로 import하면 됨!

## 5. 배포하는 법

React가 개발의 편의성을 위해서 이런 저런 기능들을 추가해놓은 상태이기 때문에 용량 큼

→ 개발 환경 무거움 → 개발자에게는 괜찮지만 이용자들에게는 아님

따라서 npm run build를 하면 프로젝트에 build라는 폴더가 생김

그 안에 새로운 index.js가 생기는데 이는 용량을 최대로 줄이고 불필요한 정보들을 삭제한 것임

→ 서비스를 할 때는 build 안에 있는 파일들을 사용하면 됨

npm install -g serve 라는 명령어를 치면 build 안에 있는 파일들로 구성된 페이지를 볼 수 있음

++ npx -s build를 사용하면 일회성으로 똑같이 사용 가능
