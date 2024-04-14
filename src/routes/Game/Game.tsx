'use client';

import React, { useLayoutEffect } from 'react';

import { useGame } from '@/hooks/useGame';
import styles from './Game.module.scss';

function Game() {
    const game = useGame();

    useLayoutEffect(() => {
        game.init();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className={styles.root}>
            {game.questions.map((question) => (
                <div key={question.id}>{question.text}</div>
            ))}
            <div style={{ marginTop: 100 }}>
                <div>Current Question: {game.questions[game.currentQuestionIndex].text}</div>
                <div>Fight for score: {game.questions[game.currentQuestionIndex].score}</div>
                <div>Current Score: {game.currentScore}</div>
            </div>
            <div>
                <button type="button" onClick={game.toNextQuestion}>
                    Next
                </button>
                <button type="button" onClick={game.toGameOver}>
                    Finish
                </button>
            </div>
        </section>
    );
}

export default React.memo(Game);
