import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'components/Root';

describe('CommentList', ()=> {
    let wrapper;
    const initialState = {
        comments: ['comment1', 'comment2']
    }
    beforeEach(()=>{
        wrapper = mount(<Root initialState={initialState}><CommentList/></Root>)

    })
    it('should render one li per comment', () => {
        expect(wrapper.find('li').length).toEqual(initialState.comments.length) 
    })

    it('should show the text for each comment', () => {
        expect(wrapper.render().text()).toContain('comment1')
        expect(wrapper.render().text()).toContain('comment1')
    })
    afterEach(() => {
        wrapper.unmount();
    })

})