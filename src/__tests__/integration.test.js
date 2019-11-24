import React from 'react';
import {mount} from 'enzyme';
import  moxios from 'moxios';
// import sinon from 'sinon'
import Root from 'components/Root';
import App from 'components/App';


describe('Integration tests', () => {
    let wrapped;
    beforeEach(() => {
        moxios.install();
        wrapped = mount(<Root><App/></Root>)
        
        
    })
    afterEach(() => {
        wrapped.unmount();
        moxios.uninstall();
    })
    it('can fetch a list of comments and display them', done => {
        wrapped.find('.fetch-comments').simulate('click')
     
        moxios.wait(() => {
            let request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: [
                    {
                        name: 'Fetched #1'
                    },
                    {
                        name: 'Fetched #2'
                    }
                ]
            }).then(() => {
                wrapped.update()
                expect(wrapped.find('li').length).toEqual(2)
                done()
            })
        })
    })
})
