'use client'
import React, { useState } from 'react';
import { Button, message } from 'antd';

export default function Waiting() {
    const [messageApi, contextHolder] = message.useMessage();

    const handleClick = async () => {
        messageApi.info('三颗蛋正在全力建设ing...')
    };

    return (
        <div>
            {contextHolder}
            <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" onClick={handleClick}>了解更多</a>
        </div>
    );
}