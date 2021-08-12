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

# [Section 2]

## 1. 컴포넌트 만들기

```jsx
import React, {Component} from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">Javascript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

//유사 javascript (찐 아님!!) -> jsx임!
class App extends Component{ //component라는 class를 상속 받아서 App이라는 class를 만듦
  render(){ // 해당 class는 render()라는 method를 갖고 있음
    return(
      <div>
        <Subject />
        <TOC />
        <Content />
      </div>
    )
  }
}

export default App;
```

→ 컴포넌트는 정리정돈의 수단

→ 컴포넌트의 이름에 집중하게 하여서 복잡도를 낮춤

## 2. props

태그에는 속성이 존재함 → 그래서 때에 따라서 내용을 변경할 수 있음

<Nav title="WEB" sub="hello">

→ 여기서 title과 sub를 만드는 것이 props

```jsx
import React, {Component} from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">Javascript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.sub}
      </article>
    );
  }
}

//유사 javascript (찐 아님!!) -> jsx임!
class App extends Component{ //component라는 class를 상속 받아서 App이라는 class를 만듦
  render(){ // 해당 class는 render()라는 method를 갖고 있음
    return(
      <div>
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC />
        <Content title="HTML" sub="HTML is HyperText Markup Language."></Content>
      </div>
    )
  }
}

export default App;
```

## 3. React Developer Tools

독립하기 위해서 필요한 특징들:

1. 설명서를 볼줄 아는 것
2. 추론을 해서 확인하는 것 (스스로 알아내는 능력)
3. 질문하는 것
4. 검색하는 것

# [Section 3]

## 1. State

props & state를 함께 봐야함

[예시: IPhone]

- props: UI(사용자가 조작하는 장치)
- state: 내부 구현하는 것에 필요한 장치

constructor:  Component의 초기화를 담당함

내부적으로 사용할 코드들은 state를 통해서 수정한다는 것이 핵심!

→ 외부에서 알 필요 없는 것들은 은닉하는 것

상위 컴포넌트의 상태를 하위 컴포넌트로 전달하고 싶을 때:

→ 상위 컴포넌트의 state를 하위 컴포넌트의 props로 전달함

```jsx
import React, {Component} from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){ 
    return(
      <div>
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC />
        <Content title="HTML" sub="HTML is HyperText Markup Language."></Content>
      </div>
    )
  }
}

export default App;
```

## 2. key

```jsx
import React, {Component} from 'react';

class TOC extends Component {
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;

      while (i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

export default TOC;
```

다음과 같이 배열을 활용해서 TOC 내부 파일을 App에서 내용이 바뀔 때마다 건들지 않고 수정할 수 있음

⚠️ **주의할 점** ⚠️

→ element를 자동으로 여러 개 생성하는 경우, 콘솔에 에러 발생

→ 이를 없애주기 위해서는 key라는 props를 작성해줘야함

→ 각각의 목록을 구별할 수 있는 식별자를 작성!

→ 이는 React에서 내부적으로 필요한 것이니까 꼭 넣어주기~

→ EX> 
  ```<li key={data[i].id}>```
