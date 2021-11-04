import React, {Component} from 'react';

class Control extends Component {
    render(){
      return(
        <ul>
          <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}></input></li> {/*link로 하면 문제 발생할 수  있음*/}
        </ul>
      );
    }
  }

  export default Control;