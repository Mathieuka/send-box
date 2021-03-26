import { useQuery, useMutation } from '@apollo/client';
import { Button, Input } from '@material-ui/core';
import { useState } from 'react';
import { GET_ALL_USERS } from '../src/graphql/query';
import { ADD_USER } from '../src/graphql/mutation';

const Home = (): JSX.Element => {
    const [username, setUsername] = useState('');
    const { loading, error, data, refetch } = useQuery(GET_ALL_USERS);
    const [addUser] = useMutation(ADD_USER);

    if (error) {
        return <div>Error ...</div>;
    }

    if (loading) {
        return <div>Loading ...</div>;
    }

    const usersList = data.users.map((user: any) => (
        <div
            key={user.id}
            className="border-2 w-96 p-10 rounded-2xl border-blue-500 my-3"
        >
            <div>Name: {user.name}</div>
            <div>Id: {user.id}</div>
        </div>
    ));

    return (
        <div className="h-screen grid place-content-center">
            <div className="max-h-96">
                <form
                    className="grid gap-10"
                    onSubmit={(e) => {
                        e.preventDefault();
                        addUser({
                            variables: { name: username },
                        });
                        setUsername('');
                        refetch();
                    }}
                >
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button type="submit" variant="contained">
                        Add user
                    </Button>
                </form>
                <div className="grid justify-center overflow-scroll">
                    {usersList}
                </div>
            </div>
        </div>
    );
};

export default Home;
