import React, {Component} from 'react';

class UpdateContent extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: this.props.data.title,
        desc:  this.props.data.desc,
        id: this.props.data.id
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e){
      this.setState({[e.target.name]: e.target.value});
    }

    render(){
      console.log(this.props.data)
      console.log('update content render')
      return(
        <article>
          <h2>Update</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault(); //기본적인 HTML이 제공하는 기능인 화면 전환을 없애기 위해서 사용
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
                type="text"
                name="title"
                placeholder="title"
                value={this.state.title}
                onChange={this.inputFormHandler}
              ></input>
              </p>
            <p>
              <textarea 
                value={this.state.desc}
                onChange={this.inputFormHandler} 
                name="desc"
                placeholder="description"
              ></textarea>
            </p>
            <p>
              <button type="subimt">submit</button>
            </p>
          </form>
        </article>
      );
    }
  }

  export default UpdateContent;