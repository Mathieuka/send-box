import { useState, useEffect } from 'react';
import {
    fetchQuestions,
    fetchSubmissions,
    Question,
    Submission,
} from '../data/questions';

const Home = (): JSX.Element => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [submissions, setSubmission] = useState<Submission[]>([]);

    useEffect(() => {
        (async () => {
            await Promise.all([fetchQuestions, fetchSubmissions]).then(
                ([questions, submissions]) => {
                    setQuestions(() => questions);
                    setSubmission(() => submissions);
                }
            );
        })();
    }, []);

    console.log('questions', questions);
    console.log('submissions', submissions);

    return <div>Hello</div>;
};

export default Home;
