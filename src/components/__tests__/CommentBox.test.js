import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'components/Root';

describe('CommentBox', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
        <Root>
            <CommentBox/>
        </Root>
        )
    })

    afterEach(() => {
        wrapper.unmount();
    })
    it('should have textarea and a button', () => {
        expect(wrapper.find('textarea').length).toEqual(1)
        expect(wrapper.find('button').length).toEqual(2)

    })

    describe('the text area', () => {
        beforeEach(() => {
            expect(wrapper.find('textarea').simulate('change', {
                target: {value: 'new comment'}
            }))
            wrapper.update()
        })
        it('should have a texearea where user can type in comment', () => {
            expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
        })
    
        it('it should submit and reset the comment', () => {
            wrapper.find('form').simulate('submit');
            wrapper.update();
            expect(wrapper.find('textarea').prop('value')).toEqual('');
        })
    })
})