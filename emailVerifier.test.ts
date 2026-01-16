import { emailVerifier } from './emailVerifier';

describe('emailVerifier', () => {

    test('devrait renvoyer false si l\'email ne contient pas de @', () => {
        const result = emailVerifier('emailpasvalide.com');
        expect(result).toBe(false);
    });

    test('devrait renvoyer false si le domaine n\'a pas de point', () => {
        expect(emailVerifier('toto@gmailcom')).toBe(false);
    });

    test('devrait renvoyer false si le point est le dernier caractère', () => {
        expect(emailVerifier('toto@gmail.com.')).toBe(false);
    });

    test('devrait renvoyer false si l\'email contient un espace', () => {
        expect(emailVerifier('user name@domain.com')).toBe(false);
    });

    test('devrait renvoyer false s\'il n\'y a rien avant le @', () => {
        expect(emailVerifier('@domain.com')).toBe(false);
    });

    test('devrait renvoyer false s\'il n\'y a rien après le @', () => {
        expect(emailVerifier('user@')).toBe(false);
    });

});