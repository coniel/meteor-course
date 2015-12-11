CounterButton = React.createClass({
    getInitialState() {
        return {
            timesClicked: this.props.initialValue || 0,
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
            timesClick: this.state.timesClicked++
        });
    },
    render() {
        return (
            <div>
                <Box>
                    <Button onClick={this.onClick} label="My Button" />
                    The button has been clicked {this.state.timesClicked}
                </Box>
            </div>
        )
    }
});