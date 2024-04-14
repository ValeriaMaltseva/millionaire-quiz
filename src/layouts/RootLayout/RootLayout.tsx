import React from 'react';

import GameProvider from '@/providers/GameProvider';

function RootLayout({ children }: React.PropsWithChildren) {
    return <GameProvider>{children}</GameProvider>;
}

export default RootLayout;
