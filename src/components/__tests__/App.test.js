import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
// require('../../setupTests')

describe('App', () => {
    let wrapped ;
    beforeEach(()=> {
        wrapped = shallow(<App/>);

    })
    it('shows the comment box', () => {
        expect(wrapped.find(CommentBox).length).toEqual(1);
    })

    it('shows the comment list', () => {
        expect(wrapped.find(CommentList).length).toEqual(1);
    })
})