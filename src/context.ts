import { Reactish } from "./reactish";

export enum OpenState {
    CLOSED,
    OPENING,
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