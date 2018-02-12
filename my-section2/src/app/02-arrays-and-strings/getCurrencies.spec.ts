import { getCurrencies } from './getCurrencies'
import { getCiphers } from 'crypto';

describe('Get Currencies', () => {
    it('should return the suported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})