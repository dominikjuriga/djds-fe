import { createContext, ReactNode, useContext, useState } from "react"

type appContextType = {
  navOpen: boolean,
  toggleNav: () => void,
  closeNav: () => void,
  openNav: () => void,
}

const appContextDefaultValues: appContextType = {
  navOpen: false,
  toggleNav: () => { },
  closeNav: () => { },
  openNav: () => { },
}

const AppContext = createContext<appContextType>(appContextDefaultValues);


type Props = {
  children: ReactNode
}

export function AppContextProvider({ children }: Props) {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const toggleNav = () => {
    if (navOpen) closeNav()
    else openNav()
  }

  const openNav = () => {
    setNavOpen(true)
  }

  const closeNav = () => {
    setNavOpen(false)
  }
  const value = {
    navOpen,
    toggleNav,
    closeNav,
    openNav
  }
  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}


export function useAppContext() { return useContext(AppContext) }