import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

import styles from './ButtonLink.module.scss';

type Props = React.PropsWithChildren<{
    href: string;
    className?: string;
}>;

const ButtonLink = ({ href, children, className }: Props) => {
    return (
        <Link href={href} className={cx(styles.root, className)}>
            {children}
        </Link>
    );
};

export default React.memo(ButtonLink);
