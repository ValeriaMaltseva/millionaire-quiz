'use client';

import { createContext } from 'react';

import { Question } from '@/types';

import { INITIAL_SCORE, INITIAL_QUESTION_INDEX } from './GameProvider.const';

export type GameProviderContextValue = {
    currentQuestionIndex: number;
    currentScore: number;
    isFinished: boolean;
    questions: Array<Question>;
    init: () => void;
    toNextQuestion: () => void;
    toGameOver: () => void;
};

export const GameProviderContext = createContext<GameProviderContextValue>({
    currentQuestionIndex: INITIAL_QUESTION_INDEX,
    currentScore: INITIAL_SCORE,
    isFinished: false,
    questions: [],
    init: () => {},
    toNextQuestion: () => {},
    toGameOver: () => {},
});
