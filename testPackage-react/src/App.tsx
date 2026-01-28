import React, {useEffect, useState} from 'react';
import {ConfigProvider, MenuProps, theme} from 'antd';
import {Menu} from 'antd';
import {Outlet, useLocation, useNavigate, useSearchParams} from "react-router";
import {getCurKey, getStrTheme} from "@/utils/tools.ts";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: '输入组件',
        key: 'input',
        children: [
            {
                label: '单输入',
                key: 'single'
            },
            {
                label: '级联输入',
                key: 'cascade'
            },
        ],
    },
    {
        label: '表单组件',
        key: 'form',
        children: [
            {
                label: '简单表单',
                key: 'simpleForm',
            },
            {
                label: '自定义表单',
                key: 'customForm',
            },
        ],
    },
];

const App: React.FC = () => {
    const route = useLocation()
    console.log(getCurKey(route.pathname),route.pathname)
    const [current, setCurrent] = useState(getCurKey(route.pathname));
    const [isDark, setIsDark] = useState<boolean>(getStrTheme(route.search) === 'dark');
    const navigate = useNavigate();
    const onClick: MenuProps['onClick'] = (e) => {
        let path = e.keyPath.reverse().join('-')
        console.log(e.key)
        if (e.key === 'single') path = '/'
        else if (e.key.includes('orm')) {
            if (e.key==='simpleForm') path='/form'
            else path=['/form'].concat(e.key).join('/')
        }
        navigate(path)
        setCurrent(e.key);
    };

    function handleTheme(e: any) {
        if (!e.data || e.data.type !== 'theme') return
        const theme = e.data.value // 'dark' | 'light'
        document.documentElement.classList.toggle('dark', theme === 'dark')
        setIsDark(theme === 'dark')
    }

    useEffect(() => {
        window.addEventListener('message', handleTheme)
        return () => {
            window.removeEventListener('message', handleTheme)
        }
    }, [])

    return <ConfigProvider theme={{algorithm: isDark ? theme.darkAlgorithm : undefined}}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
        <br/>
        <Outlet/>
    </ConfigProvider>;
};


export default App;