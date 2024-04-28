'use client'
import React, { useState } from 'react';
import { Button, message } from 'antd';

export default function CopyToClipboardButton({ text, children }: { text: string, children: React.ReactNode }) {
    const [messageApi, contextHolder] = message.useMessage();

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(text);
            messageApi.info('联系邮箱已经复制');
        } catch (err) {
            messageApi.info('复制失败');
        }
    };

    return (
        <div>
            {contextHolder}
            <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={handleClick}>
                {children}
            </a>
        </div>
    );
}