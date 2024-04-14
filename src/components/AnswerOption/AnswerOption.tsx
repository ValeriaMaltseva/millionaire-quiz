import React from 'react';

import cx from 'classnames';

import styles from './AnswerOption.module.scss';

type Props = React.PropsWithChildren<{
    disabled?: boolean;
    selected?: boolean;
    correct?: boolean;
    wrong?: boolean;
    onClick?: () => void;
}>;

function AnswerOption({ onClick, selected, correct, wrong, disabled, children }: Props) {
    return (
        <button
            type="button"
            className={cx(styles.root, {
                [styles.selected]: selected,
                [styles.correct]: correct,
                [styles.wrong]: wrong,
                [styles.disabled]: disabled,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default React.memo(AnswerOption);
