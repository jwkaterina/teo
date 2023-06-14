import { Reactish } from "./reactish";

export const OpenPageContext = Reactish.createContext({isOpen: false} as OpenPageContextProperty);

export interface OpenPageContextProperty {
    isOpen: boolean;
    setOpen: (newValue: boolean) => void;
}