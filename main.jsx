Meteor.startup(function () {
    if (Meteor.isClient) {
        ReactDOM.render(<dvi><CounterButton initialValue={5} /><CounterButton /></dvi>, document.getElementById("app"));
    }
});