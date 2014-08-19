/** @jsx React.DOM */

var React = require('react')

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! Shit yes.
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);

