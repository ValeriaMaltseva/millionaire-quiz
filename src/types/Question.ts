import { Answer } from '@/types/Answer';

export type Question = {
    id: string;
    text: string;
    answers: Array<Answer>;
    score: number;
};
