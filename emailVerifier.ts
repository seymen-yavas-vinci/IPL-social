export function emailVerifier(email: string): boolean {
    
    if (!email.includes('@')) {
        return false;
    }
    
    const splitEmail = email.split('@');
    const domain = splitEmail[1];

    if (!domain.includes('.')) return false;

    if (domain.endsWith('.')) return false;

    if (email.includes(' ')) return false;

    return true;
}