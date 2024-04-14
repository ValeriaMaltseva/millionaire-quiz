'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Question } from '@/types';
import ROUTES from '@/constants/routes';
import questionsData from '@/mocks/questions.json';

import { GameProviderContext, GameProviderContextValue } from './GameProvider.context';
import { INITIAL_SCORE, INITIAL_QUESTION_INDEX } from './GameProvider.const';

function GameProvider({ children }: React.PropsWithChildren) {
    const router = useRouter();

    // ===== Sorted questions ==== //
    const questions: Array<Question> = useMemo(() => questionsData.sort((a, b) => a.score - b.score), []);

    // ===== State ==== //
    const [isFinished, setIsFinished] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(INITIAL_QUESTION_INDEX);
    const [currentScore, setCurrentScore] = useState(INITIAL_SCORE);

    // ===== Handlers ==== //
    const init = useCallback(() => {
        setIsFinished(false);
        setCurrentQuestionIndex(INITIAL_QUESTION_INDEX);
        setCurrentScore(INITIAL_SCORE);
    }, []);

    const toGameOver = useCallback(() => {
        setIsFinished(true);

        router.replace(ROUTES.GAME_OVER);
    }, [router]);

    const toNextQuestion = useCallback(() => {
        setCurrentQuestionIndex((prevIndex) => {
            const question = questions[currentQuestionIndex];

            // Update current score
            setCurrentScore(question.score);

            let nextQuestionIndex = prevIndex + 1;

            // Handle last question in a list
            if (prevIndex === questions.length - 1) {
                setIsFinished(true);
                nextQuestionIndex = prevIndex;
            }

            return nextQuestionIndex;
        });
    }, [currentQuestionIndex, questions]);

    const value: GameProviderContextValue = useMemo(
        () => ({
            currentQuestionIndex,
            currentScore,
            isFinished,
            questions,
            init,
            toNextQuestion,
            toGameOver,
        }),
        [currentQuestionIndex, currentScore, init, isFinished, questions, toGameOver, toNextQuestion]
    );

    useEffect(() => {
        if (isFinished) {
            toGameOver();
        }
    }, [isFinished, toGameOver]);

    return <GameProviderContext.Provider value={value}>{children}</GameProviderContext.Provider>;
}

export default GameProvider;
