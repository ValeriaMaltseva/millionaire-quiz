'use client';

import React, { useLayoutEffect } from 'react';

import { useGame } from '@/hooks/useGame';

import Question from './components/Question';
import Sidebar from './components/Sidebar';

import styles from './Game.module.scss';

function Game() {
    const game = useGame();

    useLayoutEffect(() => {
        game.init();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className={styles.root}>
            <Question />
            <Sidebar />
        </main>
    );
}

export default React.memo(Game);
