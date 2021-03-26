import { ApolloClient, NormalizedCacheObject, useQuery } from '@apollo/client';
import { GET_USER } from '../src/graphql/query';

interface IHome {
    apolloClient?: ApolloClient<NormalizedCacheObject>;
}

const Home = ({ apolloClient }: IHome): JSX.Element => {
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
            <div>Id: {data.user.id}</div>
        </div>
    );
};

export default Home;
