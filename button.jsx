var MUIButton = MUI.RaisedButton;

Button = React.createClass({
    render() {
        return (
            <MUIButton primary={true} onClick={this.props.onClick} label={this.props.label} />
        )
    }
});