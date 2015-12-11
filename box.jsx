Box = React.createClass({
    render() {
        return (
            <div style={{border: "1px solid black", padding: 30, textAlign: "center"}}>
                {this.props.children}
            </div>
        )
    }
});