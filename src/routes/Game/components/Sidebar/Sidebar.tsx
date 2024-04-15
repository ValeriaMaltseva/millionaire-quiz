import React from 'react';
import cx from 'classnames';

import { useGame } from '@/hooks/useGame';
import { USDFormatter } from '@/utils/currency';

import ScoreOption from '@/components/ScoreOption';

import styles from './Sidebar.module.scss';

type Props = {
    className?: string;
};

function Sidebar({ className }: Props) {
    const game = useGame();

    return (
        <section className={cx(styles.root, className)}>
            {game.questions.map(({ id, score }, index) => (
                <ScoreOption
                    key={id}
                    active={game.currentQuestionIndex === index}
                    inactive={game.currentQuestionIndex > index}
                >
                    {USDFormatter(score)}
                </ScoreOption>
            ))}
        </section>
    );
}

export default React.memo(Sidebar);
