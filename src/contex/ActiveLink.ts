import React, { Dispatch, SetStateAction } from 'react';

interface ActiveLinkContextProps {
  activeLink: string,
  activeLinkHandler: (link: string) => void,
}

export const defaultState = {
  activeLink: '/',
  activeLinkHandler: () => {}
}


export const ActiveLinkContext = React.createContext<ActiveLinkContextProps>(defaultState);