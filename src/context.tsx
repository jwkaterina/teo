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

export const VideoContext = Reactish.createContext({videoId: null} as VideoContextProperty);

export interface VideoContextProperty {
    videoId: string | null;
    setVideoId: (newValue: string | null) => void;
}

export const ContextProviders = (props: any, children : ReactishComponent[]): ReactishComponent => {
    const [typePreview, setTypePreview] = Reactish.useState("");
    const [scrollToHome, setScrollToHome] = Reactish.useState(false);
    const [logged, setLogged] = Reactish.useState(false);
    const [photo, setPhoto] = Reactish.useState(null);
    const [videoId, setVideoId] = Reactish.useState(null);

    return <>
            <TypePreviewContext.Provider value={{typePreview, setTypePreview}}>
                <ScrollToHomeContext.Provider value={{scrollToHome, setScrollToHome}}>
                    <AuthContext.Provider value={{logged, setLogged}}>
                        <PhotoContext.Provider value={{photo, setPhoto}}>
                            <VideoContext.Provider value={{videoId, setVideoId}}>
                                {children}
                            </VideoContext.Provider>
                        </PhotoContext.Provider>
                    </AuthContext.Provider>
                </ScrollToHomeContext.Provider>
            </TypePreviewContext.Provider>
    </>
}