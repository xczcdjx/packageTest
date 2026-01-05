export function getStrTheme(str:string) {
    const match = str.match(/theme=([^&]+)/);
    const theme = match ? match[1] : null;
    return theme??'light'
}
export function getCurKey(p: string) {
    return p === '/' ? 'single' : p.replace('/', '').split('-')[1] ?? ''
}