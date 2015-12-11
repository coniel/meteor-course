MyComponent = React.createClass({
    getInitialState() {
        return {
            timesClicked: 0,
            message: "Hello"
        }
    },
    componentWillMount() {

    },
    componentDidMount() {

    },
    componentWillUnmount() {

    },
    onClick() {
        this.setState({
            timesClick: this.state.timesClicked + 1
        });
    },
    render() {
        return (
            <div>
                <button onClick={this.onClick}>My Button</button>
                The button has been clicked {this.state.timesClicked}
            </div>
        )
    }
});