'use client';

import React from 'react';
import Link from 'next/link';

import ROUTES from '@/constants/routes';

import styles from './Start.module.scss';

function Start() {
    return (
        <section className={styles.root}>
            <Link href={ROUTES.GAME}>Start</Link>
        </section>
    );
}

export default React.memo(Start);
