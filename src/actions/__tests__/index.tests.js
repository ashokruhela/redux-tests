import {saveComment} from 'actions';
import {SAVE_COMMENT} from 'actions/types';

describe('Actions', () => {
    it('should dispatch SAVE_COMMENT action', () => {
        const action = saveComment('new comment');
        expect(action.type).toEqual(SAVE_COMMENT);
        expect(action.payload).toEqual('new comment');
    })
})