import React from 'react'

class ComponentBox extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     value:''
        // }
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(event){
        this.props.onAddComment(this.textInput.value)
        event.preventDefault()
    }
    render(){
        return (
            <form action="" className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">留言内容</label>
                    <input type="text"
                           className="form-control"
                           placeholder="请输入内容"
                           //value={this.state.value}
                           //onChange={this.handleChange}
                            ref={(textInput)=>{this.textInput=textInput}}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{this.props.length}条留言</button>
            </form>
        )
    }
}
export default ComponentBox