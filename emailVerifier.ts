export function emailVerifier(email: string): boolean {
    
    if (!email.includes('@')) {
        return false;
    }
    
    return true;
}