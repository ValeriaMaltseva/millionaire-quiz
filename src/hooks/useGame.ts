import { useContext } from 'react';

import { GameProviderContext } from '@/providers/GameProvider/GameProvider.context';

export const useGame = () => useContext(GameProviderContext);
