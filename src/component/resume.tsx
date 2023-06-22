import { OpenPageContext, OpenState } from "../context";
import { Reactish } from "../reactish";

import "./resume.css"

export const Resume = () => {

    type Axis = [string, string];
    type DataUnit = [string, number];
    type Data = [string, number | string][];

    const axis: Axis = ['Month', "Theodor's weight"];

    const initData: Data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data') as string) : [axis];


    const {setOpenState} = Reactish.useContext(OpenPageContext);
    const [data, setData] = Reactish.useState(initData);

    const evaluateClass = (className: string): string => {
        Reactish.useEffect([OpenState], () => {
            return className
        })
        return ""
    }
    

    let dateElement: HTMLElement;
    let weightElement: HTMLElement;

    const addData = () => {
        const dateValue = (dateElement as HTMLInputElement).value;
        const weightValue = (weightElement as HTMLInputElement).value;
        if(dateValue != "" && weightValue != "") {
            const dataUnit: DataUnit = [
                dateValue, 
                parseInt(weightValue)
            ]
            data.push(dataUnit)
            setData(data);
            localStorage.setItem('data', JSON.stringify(data));
        } else { 
            return
        }
    }

    const deleteLast = () => {
        data.pop();
        setData(data);
        localStorage.setItem('data', JSON.stringify(data));
    }

    const chart = () => {
        const drawChart = () => {
            const chartData = google.visualization.arrayToDataTable(data);
    
            const  options = {
                curveType: 'function',
                legend: { position: 'top',
                    alignment: 'center',
                    textStyle: {
                        fontSize: 20,
                    }
                },
                colors:['#9ae4b9'],
                hAxis: {
                    title: 'date',
                    titleTextStyle: {
                        fontSize: 20,
                    },
                    showTextEvery: 5,
                },
                vAxis: {
                    title: 'weight, g',
                    titleTextStyle: {
                        fontSize: 20,
                    }
                },
                animation: {
                    startup: true,
                    duration: 700,
                    easing: 'inAdnOut',
                }
            };
    
            const  chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    
            chart.draw(chartData, options);
        }
        const google = (window as any).google;
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
    }

    const applyOnDate = (element: HTMLElement) => {
        dateElement = element;
    }

    const applyOnWeight = (element: HTMLElement) => {
        weightElement = element;
    }

    return <div id="resume">
        <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
        <div class="cross"></div>
        </button>
        <h1>resume</h1>
        <p class={evaluateClass("animate-text")}>
            <div id="curve_chart">{chart()}</div>
            <input id="date" apply={applyOnDate} type="month" value={data[data.length - 1][0]}/>
            <input id="weight" apply={applyOnWeight} type="number" step="10" value={data[data.length - 1][1]}/>
            <button class="btn-submit upper" type="submit" onclick={() => {addData()}}>Submit</button>            
            <button class="btn-submit upper"  onclick={() => {deleteLast()}}>Undo</button>            
        </p>
    </div>
}