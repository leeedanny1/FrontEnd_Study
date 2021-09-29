"use strict";

var AutoCounter = React.createClass({
    displayName: "AutoCounter",

    getInitialState: function getInitialState(){
        return{
            cnt: 0  // 초기값을 선언
        }
    },
    timeCnt: function timerCnt(){
        this.setState({
            cnt: this.state.cnt + 10    // 초기값에 10씩 증가하는 연산식 선언
        })
    },
    componentDidMount: function componentDidMount(){
        setInterval(this.timerCnt, 1000)    // 1초 간격으로 자동실행
    },
    render: function render(){
        return(
            React.createElement(    // 화면에 보여줄 태그형식 선언
                "hi",
                null,
                this.state.cnt  // 1초에 10값만큼 증가하는 변수를 h1태그에 대입
            )
        )
    }
})


var AutoCounterDisplay = React.createClass({
    displayName:"AutoCounterDisplay",

    render: function render(){
        var divStyle ={
            width: 250,
            textAlign: "center",
            padding: 40,
            backgroundColor: "gray",
            colot: "blue",
            borderRadius: 20,
            margin: 20
        }
        return React.createElement(
            "div",
            {style:divStyle},
            React.createElement(AutoCounter,null)
        )
    }
})


ReactDOM.render(React.createElement(AutoCounterDisplay, null), document.querySelector("#container"));