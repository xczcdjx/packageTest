export function getStrTheme(str:string) {
    const match = str.match(/theme=([^&]+)/);
    const theme = match ? match[1] : null;
    return theme??'light'
}
export function getCurKey(p: string) {
    let splitSym='-'
    if (p.includes('orm')) {
        if (p==='/form') return 'simpleForm'
        splitSym = '/'
    }
    return p === '/' ? 'single' : p.replace('/', '').split(splitSym)[1] ?? ''
}