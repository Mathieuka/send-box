import { useIdle } from '../src/hooks/useIdle';

const Home = (): JSX.Element => {
    const { id } = useIdle(4000);
    console.log('[process in progress] ', id);

    return <div>Hello</div>;
};

export default Home;
