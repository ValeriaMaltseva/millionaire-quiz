import React from 'react';

import cx from 'classnames';

import { ReactComponent as OptionIcon } from './img/option.svg';

import styles from './AnswerOption.module.scss';

type Props = React.PropsWithChildren<{
    disabled?: boolean;
    selected?: boolean;
    correct?: boolean;
    wrong?: boolean;
    letter?: string;
    onClick?: () => void;
}>;

function AnswerOption({ onClick, selected, correct, wrong, disabled, letter, children }: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cx(styles.root, {
                [styles.selected]: selected,
                [styles.correct]: correct,
                [styles.wrong]: wrong,
                [styles.disabled]: disabled,
            })}
        >
            <OptionIcon className={styles.option} />
            <div className={styles.line} />
            <div className={styles.optionTextContainer}>
                <div className={styles.optionLetter}>{letter}</div>
                <div className={styles.optionText}>{children}</div>
            </div>
        </button>
    );
}

export default React.memo(AnswerOption);
