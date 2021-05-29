import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Button, Input, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { GET_ALL_USERS } from '../src/graphql/query';
import { ADD_USER } from '../src/graphql/mutation';

const Home = (): JSX.Element => {
    const [username, setUsername] = useState('');
    const [drawer, setDrawer] = useState(false);
    const { loading, error, data, refetch } = useQuery(GET_ALL_USERS);
    const [addUser] = useMutation(ADD_USER);

    if (error) {
        return <div>Error ...</div>;
    }

    if (loading) {
        return <div>Loading ...</div>;
    }

    const toggleDrawer = (open: boolean) => (
        event: KeyboardEvent | MouseEvent
    ) => {
        if (
            event.type === 'keydown' &&
            (((event as unknown) as React.KeyboardEvent).key === 'Tab' ||
                ((event as unknown) as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setDrawer(false);
    };

    const usersList = data.users.map((user: any) => (
        <div
            key={user.id}
            className="border-2 p-5 rounded-2xl border-blue-500 my-3"
        >
            <div>Name: {user.name}</div>
            <div>Id: {user.id}</div>
        </div>
    ));

    return (
        <div>
            <div className="grid place-content-end">
                <MenuIcon onClick={() => setDrawer(true)} />
            </div>
            <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
                <div>Content</div>
            </Drawer>
            <div className="h-screen grid place-content-center mx-20 gap-5">
                <div className="max-h-64">
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
                            data-testid="input-name"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            data-testid="submit-new-user"
                        >
                            Add user
                        </Button>
                    </form>
                </div>
                <div className=" p-5 max-h-64 grid justify-center overflow-scroll">
                    {usersList}
                </div>
            </div>
        </div>
    );
};

export default Home;
