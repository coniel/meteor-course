Button = React.createClass({
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.label}</button>
        )
    }
});