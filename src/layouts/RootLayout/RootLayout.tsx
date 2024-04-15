import React from 'react';

import GameProvider from '@/providers/GameProvider';

const RootLayout = ({ children }: React.PropsWithChildren) => {
    return <GameProvider>{children}</GameProvider>;
};

export default RootLayout;
