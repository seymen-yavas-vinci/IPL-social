export function emailVerifier(email: string): boolean {
    // c
    if (email.includes(' ')) return false;

    // a
    if (!email.includes('@')) {
        return false;
    }
    
    const splitEmail = email.split('@');
    const domain = splitEmail[1];
    const username = splitEmail[0];

    // d
    if (username.length === 0 || domain.length === 0) return false;

    // b
    if (!domain.includes('.')) return false;
    if (domain.endsWith('.')) return false;

    
    return true;
}