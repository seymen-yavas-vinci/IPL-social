import { emailVerifier } from './emailVerifier';

describe('emailVerifier', () => {

    test('devrait renvoyer false si l\'email ne contient pas de @', () => {
        const result = emailVerifier('emailpasvalide.com');
        expect(result).toBe(false);
    });

});