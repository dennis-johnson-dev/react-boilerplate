/** @jsx React.DOM */

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <Butt />
      </div>
    );
  }
});

var Butt = React.createClass({
  render: function() {
    return (
      <p>Poop-sandwich</p>
    );
  }
});

