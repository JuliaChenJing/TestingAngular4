import {greet} from './greet';

describe('Greet', () => {
    it('should include the name in the message', () => {
        expect(greet('mosh')).toContain('mosh');
    })
})