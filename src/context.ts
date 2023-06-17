import { Reactish } from "./reactish";

export enum OpenState {
    CLOSED,
    SCROLLING,
    OPENING,
    OPEN,
    CLOSING
}

export const OpenPageContext = Reactish.createContext({openState: OpenState.CLOSED} as OpenPageContextProperty);

export interface OpenPageContextProperty {
    openState: OpenState;
    setOpenState: (newValue: OpenState) => void;
}

export const TypePreviewContext = Reactish.createContext("");

