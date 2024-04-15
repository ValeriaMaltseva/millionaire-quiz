import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import RootLayout from '@/layouts/RootLayout';

import '@/styles/index.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Who wants to be a millionaire?',
    description: 'Who wants to be a millionaire?',
};

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RootLayout>{children}</RootLayout>
            </body>
        </html>
    );
}
