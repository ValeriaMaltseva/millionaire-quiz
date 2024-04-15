'use client';

import React from 'react';

import ROUTES from '@/constants/routes';

import ButtonLink from '@/components/ButtonLink';

import { ReactComponent as HandIcon } from './img/hand.svg';

import styles from './Start.module.scss';

const Start = () => {
    return (
        <section className={styles.root}>
            <div className={styles.container}>
                <div className={styles.iconContainer}>
                    <HandIcon className={styles.icon} />
                </div>
                <div className={styles.infoContainer}>
                    <h1 className={styles.title}>Who wants to be a millionaire?</h1>
                    <ButtonLink href={ROUTES.GAME} className={styles.button}>
                        Start
                    </ButtonLink>
                </div>
            </div>
        </section>
    );
};

export default Start;
