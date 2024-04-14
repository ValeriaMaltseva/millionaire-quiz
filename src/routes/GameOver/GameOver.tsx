'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import ROUTES from '@/constants/routes';
import { useGame } from '@/hooks/useGame';

import styles from './GameOver.module.scss';

function GameOver() {
    const router = useRouter();
    const game = useGame();

    // If user get this route directly, redirect user to index page
    useEffect(() => {
        if (!game.isFinished) {
            router.replace(ROUTES.INDEX);
        }
    }, [game.isFinished, router]);

    return (
        game.isFinished && (
            <section className={styles.root}>
                <div>GameOver</div>
                <div>Score: {game.currentScore}</div>
                <Link href={ROUTES.GAME}>To Start</Link>
            </section>
        )
    );
}

export default React.memo(GameOver);
