import React, {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {Outlet} from "react-router";

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
                key: 'simpleDy'
            },
        ],
    },
];

const App: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <div>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
        <Outlet/>
    </div>;
};

export default App;