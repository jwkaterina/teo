import { Reactish } from "./reactish";

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

export const OpaqueContext = Reactish.createContext({opaque: false} as OpaqueContextProperty);

export interface OpaqueContextProperty {
    opaque: boolean;
    setOpaque: (newValue: boolean) => void;
}