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

# [Section 4]

## 1. 이벤트 state, props, render 함수

props, state에 대한 중요한 사실:

→ props, state가 변경되면 render함수가 다시 호출되고 하위에 있는 컴포넌트들에게 각각 있는 render함수도 마찬가지로 다시 호출됨

→ 따라서 props나 state가 바뀌면 화면이 다시 그려짐

render 함수 == 어떤 html을 그릴 것인가를 결정하는 함수

```jsx
import React, {Component} from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject:{title: 'WEB', sub: 'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText....'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  

  render(){ 
    
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
      <div>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} >
        </Subject>
        <TOC data={this.state.contents}>
        </TOC>
        <Content title={_title} sub={_desc}></Content>
      </div>
    )
  }
}

export default App;
```

→ this.state.mode가 welcome일 경우, Content의 title이 "Welcome"이 들어가고 desc에는 "Hello, React!!"가 들어간다

→ this.state.mode가 read일 경우, Content의 title이 "HTML"이 들어가고 desc에는 "HTML is HyperText...."가 들어간다

## 2. 이벤트 설치 및 기본적인 속성 막기 (preventDefault)

최종적인 목표: Subject 컴포넌트 안에 있는 a 태그를 누르면 App 전체의 내용이 바뀌게끔 하는 것

→ 이거는 어려움

→ 그래서 일단 Subject 컴포넌트 빼고 그 내용을 가져와서 사용하기

HTML의 onclick=""과 같은 기능을 하게 하려면 → React에서는 onClick={} 사용해야함

```jsx
import React, {Component} from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject:{title: 'WEB', sub: 'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText....'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  

  render(){ 
    
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
      <div>
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} >
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(){
            alert('hi');
          }
          }>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}>
        </TOC>
        <Content title={_title} sub={_desc}></Content>
      </div>
    )
  }
}

export default App;
```

→ 이 코드를 실행시키면 WEB을 눌렀을 때 페이지가 리로드 됨

→ 이는 a 태그가 가지고 있는 href 속성이 가리키는 페이지로 이동시키는 기본적인 속성 때문

→ 이를 없애주고 싶음

→ React에서는 onclick으로 함수를 실행시키면, 함수의 첫번째 매개변수 값으로 event라는 객체를 주입해주기로 약속되어있음 (따라서 거기에 e를 써줌)

** debugger라는 코드를 활용하면 debugger라는 코드가 쓰여진 곳에서 화면이 멈추고 sources(개발자 도구)를 통해서 소스 코드를 볼 수 있게 해줌

→ 그래서 e.preventDefault라고 하면 기본적인 동작 방법을 금지시킬 수 있도록 함

```jsx
import React, {Component} from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject:{title: 'WEB', sub: 'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText....'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  

  render(){ 
    
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
      <div>
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} >
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
          }
          }>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}>
        </TOC>
        <Content title={_title} sub={_desc}></Content>
      </div>
    )
  }
}

export default App;
```

## 3. 이벤트에서 state 변경하기

```jsx
<h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            this.state.mode = 'welcome';
          }
          }>{this.state.subject.title}</a></h1>
```

→ event가 실행되었을 때 실행되는 저 함수 안에서는 this(원래는 컴포넌트 자신을 가리킴)가 아무 것도 가리키지 않음

→ state가 undefined라고 뜸

→ 해결 방법: 함수가 끝난 직후에 .bind(this)를 추가해주면 됨! 그러면 저 함수 안에서 this는 컴포넌트가 됨

```jsx
<h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            this.state.mode = 'welcome';
          }.bind(this)
          }>{this.state.subject.title}</a></h1>
```

## 4. 이벤트 bind 함수 이해하기

→ bind: 엮다, 묶어주다

→ render() 내에서 this == render 함수를 감싸고 있는 컴포넌트

→  .bind(this로 바인드할 객체)를 사용하면 해당 함수 내에서는 this가 바인드한 객체가 된다

```jsx
var obj = {name: 'egoing'};

function bindTest{
	console.log(this.name);
}

bindTest2 = bindTest.bind(obj); // 함수 내부에서  this가 obj인 함수가 복제됨
```

## 5. setState 함수

state 값을 직접 변경하지 않고 함수를 이용하여 변경하여야하는 이유:

→ React 입장에서는 값을 몰래 바꾼 것임 따라서 렌더를 할 수 없음

하지만 constructor에서는 굳이 setState 쓸 필요 없음

```jsx
this.setState({
	mode: 'welcome';
}); 
```

## 6. 컴포넌트 이벤트 만들기

컴포넌트 이벤트 사용자 → 생성자로 바뀌는 방법

```jsx
<Subject
	title = {this.state.subject.title}
	sub = {this.state.subject.sub}
	onChangePage = {function(){
		this.setState({mode: 'welcome'});
	}.bind(this)}
>
</Subject>
```

```jsx
this.props.onChangePage(); //함수 실행됨
```

→ 첫번째 코드를 이용하여서 onChangePage라는 함수를 만들어서 사용자에게 제공함

→ 사용자가 두번째 코드를 통해서 함수를 실행함

예시:

```jsx
onChangePage = {
	function(id){
		this.setState({
		mode: 'read',
		selected_content_id: Number(id)
		});
	}.bind(this)}
```

```jsx
<a
	href = {"/content/" + data[i].id}
	onClick = {function(e){
		e.preventDerfault();
		this.props.onChagePage(e.target.dataset.id); // 인자로 넘겨주기
	}.bind(this, data[i].id)}
>
```

# [section 5]

## 1. 개념 정리

**Props & State 차이점:**

→ Props: 

1. Read ONLY (components 내부에서 바꿀 수는 없음)
2. can not be modified

→ State:

1. can be asynchronous
2. can be modified using this.setState

Component 내부적으로 필요한 data들은 State를 통해서 관리함

외부(사용자)에서 props를 통해서 관리하고 component는 state를 통해서 관리

<img width="684" alt="스크린샷 2021-11-04 오후 5 36 55" src="https://user-images.githubusercontent.com/78731710/140282802-538e1779-7106-4e3a-97ae-a7f486e7d882.png">

하위 컴포넌트의 값을 바꾸고 싶을 때: props 변경

상위 컴포넌트의 값을 바꾸고 싶을 때: event를 통해서 변경 

## 2. CRUD: Create

**CRUD:**

→ **C:** Create (핵심)

→ **R:** Read (핵심)

→ **U:** Update

→ **D:** Delete

이벤트 핸들러: 이벤트가 실행되어야하는 함수

# [수업을 마치며]

## 1. immutable

뜻: 불변

구현을 단순하게 유지해서 더 높은 복잡성에 도달하기 위한 노력

→ 너무 자유롭게 두면 프로젝트가 커지면서 버그를 불러올 수도 있음

배열과 객체를 immutable하게 다룰 수 있게 하는 라이브러리: 

→ immutable js: 배열과 객체의 대체제로 사용할 수 있음 (원본 말고 복제된 내용을 반환함)

## 2. router

웹 어플리케이션은 하나의 url로 모든 페이지를 다룸

→ 장점: 화면 전환 없이 구현 가능한 것

→ 단점: url만으로 페이지를 찾아올 수 없다는 것

React Router를 사용 → url에 따라서 적당한 컴포넌트 실행 가능하게 할 수 있음 (npm을 통해서 사용 가능)

## 3. create-react-app

npm run eject → 개발 환경을 수정할 수 있음

## 4. redux

프로젝트가 커지면 컴포넌트 간 교류가 까다로워짐

<img width="477" alt="스크린샷 2021-11-08 오전 3 10 41" src="https://user-images.githubusercontent.com/78731710/140656642-2acd6f54-d819-4ac7-8080-b634aeb2a839.png">

Redux: 중앙에 데이터 저장소를 만듦 

→ 모든 컴포넌트는 중앙 데이터 저장소와 직접 연결됨 

→ 중앙 데이터 저장소의 내용을 변경하면 관련된 모든 컴포넌트의 내용이 변경됨

## 5. react sever side rendering

서버 쪽에서 웹페이지를 완성한 후 → 클라이언트로 완성된 HTML을 전송!

장점: 초기 구동 시간을 줄일 수 있음
