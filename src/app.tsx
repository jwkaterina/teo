/** @jsx createElement */
import { createElement } from "./utils";
import { Reactish } from "./reactish";

const App = (props: any) => {

    const [count, setCount] = Reactish.useState(1);

    console.log(props);

    return <div id="comp1">
        <h1>Hello world!!!</h1>
        <h2>Test</h2>
        {
            [1,2,3].map(element => {
                return <p>{element}</p>
            })
        }
        <p>Count:</p>
        <p>{count}</p>
        <button onclick={()=>{
            setCount(count + 1);
            Reactish.render(<App name="foo" />);
        }}>Click</button>
    </div>
}

export {
    App
}