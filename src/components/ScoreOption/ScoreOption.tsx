import React from 'react';

import cx from 'classnames';

import { ReactComponent as OptionIcon } from './img/option.svg';

import styles from './ScoreOption.module.scss';

type Props = React.PropsWithChildren<{
    active?: boolean;
    inactive?: boolean;
}>;

const ScoreOption = ({ active, inactive, children }: Props) => {
    return (
        <div
            className={cx(styles.root, {
                [styles.active]: active,
                [styles.inactive]: inactive,
            })}
        >
            <OptionIcon className={styles.option} />
            <div className={styles.line} />
            <div className={styles.optionText}>{children}</div>
        </div>
    );
};

export default React.memo(ScoreOption);
