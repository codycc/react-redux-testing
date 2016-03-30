import {renderComponent, expect } from '../test_helper';
//Importing component
import CommentBox from '../../src/components/comment_box';

describe('CommentBoxTest', () => {
  it('has a text area', ()=> {
    const component = renderComponent(CommentBox);
    //The way chai is set up , parameters arent needed in this case no exist();
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;

  });
});
