'use client';

import React, { useLayoutEffect } from 'react';

import { useGame } from '@/hooks/useGame';
import { useModal } from '@/hooks/useModal';

import Modal from '@/components/Modal';
import Question from './components/Question';
import Sidebar from './components/Sidebar';

import styles from './Game.module.scss';

function Game() {
    const game = useGame();
    const { isOpen, open, close } = useModal();

    useLayoutEffect(() => {
        game.init();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className={styles.root}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className={styles.burger} onClick={open} />

            <Question className={styles.question} />
            <Sidebar className={styles.sidebar} />

            {/* Render sidebar for mobile */}
            {isOpen && (
                <Modal onClose={close}>
                    <Sidebar />
                </Modal>
            )}
        </main>
    );
}

export default React.memo(Game);
