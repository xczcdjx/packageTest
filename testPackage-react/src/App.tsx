import React, {useEffect, useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
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
                key: 'simpleDy',
                disabled: true
            },
        ],
    },
];

const App: React.FC = () => {
    const route = useLocation()
    const [current, setCurrent] = useState(getCurKey(route.pathname));
    const [isDark, setIsDark] = useState<boolean>(getStrTheme(route.search) === 'dark');
    const navigate = useNavigate();
    const onClick: MenuProps['onClick'] = (e) => {
        let path = e.keyPath.reverse().join('-')
        if (e.key === 'single') path = '/'
        navigate(path)
        setCurrent(e.key);
    };
    useEffect(() => {
        window.addEventListener('message', (e) => {
            if (!e.data || e.data.type !== 'theme') return
            const theme = e.data.value // 'dark' | 'light'
            document.documentElement.classList.toggle('dark', theme === 'dark')
            setIsDark(theme === 'dark')
        })
    }, [])

    return <ConfigProvider theme={{algorithm: isDark ? theme.darkAlgorithm : undefined}}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
        <Outlet/>
    </ConfigProvider>;
};


export default App;