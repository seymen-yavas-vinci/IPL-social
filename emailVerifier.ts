export function emailVerifier(email: string): boolean {
    
    if (!email.includes('@')) {
        return false;
    }
    
    const splitEmail = email.split('@');
    const domain = splitEmail[1];
    const utilisateur = splitEmail[0];

    if (!domain.includes('.')) return false;

    if (domain.endsWith('.')) return false;

    if (email.includes(' ')) return false;
    if (utilisateur.length === 0 || domain.length === 0) return false;

    return true;
}