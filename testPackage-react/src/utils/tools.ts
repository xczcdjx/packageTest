export function getStrUrl(str: string, key: string='theme') {
    const match = str.match(new RegExp(`${key}=([^&]+)`));
    const mStr = match ? match[1] : null;
    return mStr ?? ''
}

export function getCurKey(p: string) {
    let splitSym = '-'
    if (p.includes('orm')) {
        if (p === '/form') return 'simpleForm'
        splitSym = '/'
    }
    return p === '/' ? 'single' : p.replace('/', '').split(splitSym)[1] ?? ''
}