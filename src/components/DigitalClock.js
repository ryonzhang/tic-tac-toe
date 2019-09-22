import React from 'react'

class DigitalClock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }
    componentDidMount() {
        this.timer=setInterval(()=>{
            this.setState({
                date:new Date()
            })},1000);
    }

    render(){
        return (
            <div className="digital-clock-component jumbotron">
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}
export default DigitalClock