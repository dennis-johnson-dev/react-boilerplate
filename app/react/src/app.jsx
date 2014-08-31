/** @jsx React.DOM */


var App = React.createClass({
  render: function() {
    return (
      <CommentBox />
    );
  }
});

var appInstance = <App key="AppKey" />;

React.renderComponent(
  appInstance,
  document.getElementById('content')
);
