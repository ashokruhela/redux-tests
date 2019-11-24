import {SAVE_COMMENT} from 'actions/types';
import commentsReducer from 'reducers';

describe('Comments reducer', () => {
    it('should handle the action SAVE_COMMENT', () => {
        const payload = {
            type: SAVE_COMMENT,
            payload: 'new comment'
        }
        const newState = commentsReducer({}, payload);
        expect(newState.comments).toEqual(['new comment']);
    })

    it('should handle unknown types', () => {
        const newState = commentsReducer({}, {})
        expect(newState.comments).toEqual([]);
    })
})
