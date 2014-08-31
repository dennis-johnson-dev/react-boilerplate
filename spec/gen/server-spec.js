/** @jsx React.DOM */

var ReactTestUtils;

describe('A suite', function() {
  beforeEach(function() {
    ReactTestUtils = React.addons.TestUtils; 
  });


  it('renders into document', function() {
    var commentBox = ReactTestUtils.renderIntoDocument(CommentBox(null));
    expect(ReactTestUtils.isCompositeComponent(commentBox)).toBe(true);
  });

});
