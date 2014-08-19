/** @jsx React.DOM */

var React = require('react')

var data = [
  {author: 'Mike Hunt', text: 'Textify'},
  {author: 'Mike Rotch', text: 'Weirdly'}
];

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <p>Hello, world! Shit yes.</p>
        <CommentList data={this.props.data} />
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 classname="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox data={data} />,
  document.getElementById('content')
);

