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
        <button
            type="button"
            className={cx(styles.root, {
                [styles.active]: active,
                [styles.inactive]: inactive,
            })}
        >
            <OptionIcon className={styles.option} />
            <div className={styles.line} />
            <div className={styles.optionText}>{children}</div>
        </button>
    );
};

export default React.memo(ScoreOption);
