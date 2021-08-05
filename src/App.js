import React, {Component} from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';







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