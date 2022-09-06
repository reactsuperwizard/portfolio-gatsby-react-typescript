import React from 'react';

interface ActiveNavbarProps {
  activeNavbar: boolean;
  activeNavbarHandler: (active: boolean) => void;
}

export const defaultState = {
  activeNavbar: false,
  activeNavbarHandler: () => {} 
}

export const ActiveNavbarContext = React.createContext<ActiveNavbarProps>(defaultState);