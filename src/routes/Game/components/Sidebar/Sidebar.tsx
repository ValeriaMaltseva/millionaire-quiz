import React from 'react';
import cx from 'classnames';

import { useGame } from '@/hooks/useGame';
import { USDFormatter } from '@/utils/currency';

import styles from './Sidebar.module.scss';

function Sidebar() {
    const game = useGame();

    return (
        <section className={styles.root}>
            {game.questions.map(({ id, score }, index) => (
                <div
                    key={id}
                    className={cx(styles.scoreItem, {
                        [styles.active]: game.currentQuestionIndex === index,
                        [styles.inactive]: game.currentQuestionIndex > index,
                    })}
                >
                    {USDFormatter(score)}
                </div>
            ))}
        </section>
    );
}

export default React.memo(Sidebar);
