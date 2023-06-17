
import { ReactishComponent } from "../reactish"

export const Envelope = (props: any, children: ReactishComponent[]): ReactishComponent => {

    return <span class="nice-envelope">
        {children}
    </span>
}