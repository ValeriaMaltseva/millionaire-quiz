import React from 'react';

import styles from './Modal.module.scss';

type Props = React.PropsWithChildren<{
    onClose: () => void;
}>;

function Modal({ onClose, children }: Props) {
    return (
        <div className={styles.root}>
            <button type="button" onClick={onClose}>
                Close
            </button>
            {children}
        </div>
    );
}

export default React.memo(Modal);
