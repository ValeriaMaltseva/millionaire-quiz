import { useCallback, useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => {
        setIsOpen(true);

        document.body.style.overflowY = 'hidden';
    }, []);
    const close = useCallback(() => {
        setIsOpen(false);

        document.body.style.overflowY = 'auto';
    }, []);

    return {
        isOpen,
        open,
        close,
    };
};
