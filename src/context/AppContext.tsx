import { createContext, ReactNode, useContext, useState } from "react"

const appContextDefaultValues: appContextType = {
  navOpen: false,
  defaultSeo: {
    metaTitle: "",
    metaDescription: "",
    shareImage: ""
  },
  toggleNav: () => { },
  closeNav: () => { },
  openNav: () => { },
}

const AppContext = createContext<appContextType>(appContextDefaultValues);

export function AppContextProvider({ children }: Props) {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const toggleNav = () => {
    if (navOpen) closeNav()
    else openNav()
  }

  const defaultSeo = {
    metaTitle: "DJDS",
    metaDescription: "Zameriavame sa na tvorbu digitálnej identity.",
    shareImage: "/uploads/marketing_image_627d750f2c.jpg"
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
    openNav,
    defaultSeo
  }
  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}

interface IDefaultSeo {
  metaTitle: string,
  metaDescription: string,
  shareImage: string,
}

type appContextType = {
  navOpen: boolean,
  defaultSeo: IDefaultSeo,
  toggleNav: () => void,
  closeNav: () => void,
  openNav: () => void,
}

type Props = {
  children: ReactNode
}

export function useAppContext() { return useContext(AppContext) }