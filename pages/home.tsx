import { useQuery } from '@apollo/client';
import { GET_USER } from '../src/graphql/query';

const Home = (): JSX.Element => {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { userId: 10 },
    });

    if (error) {
        return <div>Error ...</div>;
    }

    if (loading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="grid">
            <div>User information:</div>
            <div>Name: {data.user.name}</div>
        </div>
    );
};

export default Home;
