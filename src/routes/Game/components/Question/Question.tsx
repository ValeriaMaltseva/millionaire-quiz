import React, { useCallback, useState } from 'react';
import cx from 'classnames';

import { useGame } from '@/hooks/useGame';
import AnswerOption from '@/components/AnswerOption';

import { Answer } from '@/types';
import styles from './Question.module.scss';

const SHOW_RESULTS_TIMEOUT = 1000;
const VERIFY_ANSWER_TIMEOUT = 2000;

type Props = {
    className?: string;
};

function Question({ className }: Props) {
    const { questions, currentQuestionIndex, toNextQuestion, toGameOver } = useGame();

    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
    const [isShowResult, setIsShowResult] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleSelect = useCallback(
        (answer: Answer) => {
            // Show selected answer
            setSelectedAnswer(answer);

            // Show result in few seconds
            setTimeout(() => {
                setIsShowResult(true);

                // Verify selected answer in few seconds more
                setTimeout(() => {
                    if (answer.correct) {
                        toNextQuestion();
                    } else {
                        toGameOver();
                    }

                    setSelectedAnswer(null);
                    setIsShowResult(false);
                }, VERIFY_ANSWER_TIMEOUT);
            }, SHOW_RESULTS_TIMEOUT);
        },
        [toGameOver, toNextQuestion]
    );

    return (
        <section className={cx(styles.root, className)}>
            <h2>{currentQuestion.text}</h2>
            <div className={styles.answers}>
                {currentQuestion.answers.map((answer) => {
                    const isSelected = selectedAnswer === answer;

                    return (
                        <AnswerOption
                            key={answer.id}
                            onClick={() => handleSelect(answer)}
                            selected={isSelected}
                            correct={isShowResult && answer.correct}
                            wrong={isShowResult && isSelected && !answer.correct}
                            disabled={!!selectedAnswer}
                        >
                            {answer.text}
                        </AnswerOption>
                    );
                })}
            </div>
        </section>
    );
}

export default React.memo(Question);
