import React, {Component} from 'react';

class CreateContent extends Component {
    render(){
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault(); //기본적인 HTML이 제공하는 기능인 화면 전환을 없애기 위해서 사용
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}
          >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <button type="subimt">submit</button>
            </p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;