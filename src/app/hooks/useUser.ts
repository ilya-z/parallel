import React from 'react';
import { UserContext } from '../context/provider';

export function useUser() {
  const [ user, setUser ] = React.useContext(UserContext);

  const setUserName = (userName: string) => {
    setUser(userName);
  };

  return { user, setUserName };
}
