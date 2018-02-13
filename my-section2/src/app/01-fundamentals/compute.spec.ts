import { compute } from './compute';
describe('Compute', () => {
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('should return ++ if input is not negative', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
})