import React from 'react';
import cx from 'classnames';

import { ReactComponent as CloseIcon } from './img/close.svg';

import styles from './Modal.module.scss';

type Props = React.PropsWithChildren<{
    onClose: () => void;
    isOpen: boolean;
}>;

const Modal = ({ onClose, children, isOpen }: Props) => {
    return (
        <div className={cx(styles.root, { [styles.isOpen]: isOpen })}>
            <CloseIcon onClick={onClose} className={styles.closeIcon} />
            {children}
        </div>
    );
};

export default Modal;
