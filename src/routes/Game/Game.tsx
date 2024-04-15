'use client';

import React, { useLayoutEffect } from 'react';

import { useGame } from '@/hooks/useGame';
import { useModal } from '@/hooks/useModal';

import Modal from '@/components/Modal';
import Question from './components/Question';
import Sidebar from './components/Sidebar';

import { ReactComponent as MenuIcon } from './img/menu.svg';

import styles from './Game.module.scss';

const Game = () => {
    const game = useGame();
    const { isOpen, open, close } = useModal();

    useLayoutEffect(() => {
        game.init();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className={styles.root}>
            <MenuIcon className={styles.burger} onClick={open} />

            <Question className={styles.question} />
            <Sidebar className={styles.sidebar} />

            <Modal onClose={close} isOpen={isOpen}>
                <Sidebar />
            </Modal>
        </main>
    );
};

export default Game;
