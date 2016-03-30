import {renderComponent, expect } from '../test_helper';
//Importing component
import CommentBox from '../../src/components/comment_box';

describe('CommentBoxTest', () => {
  // using chai JQuery to select specific peices
  let component; //starts as undefined
  //move into before each, for DRY
  beforeEach(()=> {
   component = renderComponent(CommentBox);
  });

  it('has the correct class',() => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    //The way chai is set up , parameters arent needed in this case no exist();
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });


  describe('entering some text', () => {

    beforeEach(() => {
      // the event we are simulating is a change event
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });

  });
});
