import { Reactish, ReactishComponent } from "./reactish";

export enum OpenState {
    CLOSED,
    OPENING,
    EFFECT,
    OPEN,
    CLOSING
}

export const OpenPageContext = Reactish.createContext({openState: OpenState.CLOSED} as OpenPageContextProperty);

export interface OpenPageContextProperty {
    openState: OpenState;
    setOpenState: (newValue: OpenState) => void;
}

export const TypePreviewContext = Reactish.createContext({typePreview: ""} as TypePreviewContextProperty);

export interface TypePreviewContextProperty {
    typePreview: string;
    setTypePreview: (newValue: string) => void;
}

export const ScrollToHomeContext = Reactish.createContext({scrollToHome: false} as ScrollToHomeContextProperty);

export interface ScrollToHomeContextProperty {
    scrollToHome: boolean;
    setScrollToHome: (newValue: boolean) => void;
}

export const AuthContext = Reactish.createContext({logged: false} as AuthContextProperty);

export interface AuthContextProperty {
    logged: boolean;
    setLogged: (newValue: boolean) => void;
}

export const PhotoContext = Reactish.createContext({photo: null} as PhotoContextProperty);

export interface PhotoContextProperty {
    photo: string | null;
    setPhoto: (newValue: string | null) => void;
}

const [openState, setOpenState] = Reactish.useState(OpenState.CLOSED);
const [typePreview, setTypePreview] = Reactish.useState("");
const [scrollToHome, setScrollToHome] = Reactish.useState(false);
const [logged, setLogged] = Reactish.useState(false);
const [photo, setPhoto] = Reactish.useState(null);

export const ContextProviders = (props: any, children : ReactishComponent[]): ReactishComponent => {
    return <OpenPageContext.Provider value={{openState, setOpenState}}>
        <TypePreviewContext.Provider value={{typePreview, setTypePreview}}>
            <ScrollToHomeContext.Provider value={{scrollToHome, setScrollToHome}}>
                <AuthContext.Provider value={{logged, setLogged}}>
                    <PhotoContext.Provider value={{photo, setPhoto}}>
                        {children}
                    </PhotoContext.Provider>
                </AuthContext.Provider>
            </ScrollToHomeContext.Provider>
        </TypePreviewContext.Provider>
    </OpenPageContext.Provider>
}