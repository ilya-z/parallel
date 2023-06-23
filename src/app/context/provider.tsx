import React, {useState} from 'react';

type IUserContext = [string | undefined, React.Dispatch<React.SetStateAction<string>>];

const UserContext = React.createContext<IUserContext>(['user', () => null]);


interface IProps {
   children: any
}
const Provider = ({ children }: IProps) => {

    const defaultUser = "user";

    const [user, setUser] = useState<string>(defaultUser);

    return (
        <UserContext.Provider value={[ user, setUser ]}>
            { children }
        </UserContext.Provider>
    );
}

export { Provider, UserContext };
