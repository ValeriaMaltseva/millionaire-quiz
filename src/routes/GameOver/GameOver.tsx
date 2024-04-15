'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import ROUTES from '@/constants/routes';

import { useGame } from '@/hooks/useGame';

import { USDFormatter } from '@/utils/currency';

import ButtonLink from '@/components/ButtonLink';

import { ReactComponent as HandIcon } from './img/hand.svg';

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
                <div className={styles.container}>
                    <div className={styles.iconContainer}>
                        <HandIcon className={styles.icon} />
                    </div>
                    <div className={styles.infoContainer}>
                        <div>
                            <p className={styles.scoreTitle}>Total score:</p>
                            <h1 className={styles.scoreInfo}>{USDFormatter(game.currentScore)} earned</h1>
                        </div>
                        <ButtonLink href={ROUTES.GAME} className={styles.button}>
                            Try again
                        </ButtonLink>
                    </div>
                </div>
            </section>
        )
    );
}

export default React.memo(GameOver);
