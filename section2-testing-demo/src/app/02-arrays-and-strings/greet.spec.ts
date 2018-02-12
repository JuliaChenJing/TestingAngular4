import {greet} from './greet';

describe('greet', () => {
    it('should should include the name in the message', () => {
        expect(greet('mosh')).toContain('mosh');

    })
})