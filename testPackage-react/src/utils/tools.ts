export function getStrUrl(str: string, key: string='theme') {
    const match = str.match(new RegExp(`${key}=([^&]+)`));
    const mStr = match ? match[1] : null;
    return mStr ?? ''
}

export function getCurKey(p: string) {
    let splitSym = '-'
    if (p==='/') return 'single'
    else if (p.includes('orm')) {
        if (p === '/form') return 'simpleForm'
        splitSym = '/'
    }else if (p.includes('zeal')){
        if (p==='/zeal') return 'baseZeal'
        splitSym = '/'
    }
    return p.replace('/', '').split(splitSym)[1] ?? ''
}