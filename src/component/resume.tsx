import { OpenPageContext, OpenState, TypePreviewContext } from "../context";
import { Reactish } from "../reactish";

import "./resume.css"

export const Resume = () => {

    type Axis = [string, string];
    type DataUnit = [string, number];
    type Data = [string, number | string][];

    const axis: Axis = ['Month', "Theodor's weight"];

    const initData: Data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data') as string) : [axis];


    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);

    const [data, setData] = Reactish.useState(initData);
    const [dateRef] = Reactish.useRef<HTMLInputElement>();
    const [weightRef] = Reactish.useRef<HTMLInputElement>();
    const [pRef] = Reactish.useRef<HTMLElement>();
    const [chartRef] = Reactish.useRef<HTMLElement>();

    Reactish.useEffect([openState], () => {
        if(openState == OpenState.OPEN && typePreview == "resume") {
            pRef.current.classList.add("animate-text")
        }
    })

    const addData = () => {
        const dateValue = dateRef.current.value;
        const weightValue = weightRef.current.value;
        if(dateValue != "" && weightValue != "") {
            const dataUnit: DataUnit = [
                dateValue, 
                parseInt(weightValue)
            ]
            const newYear = parseInt(dateValue.slice(0, 4));
            const prevYear = parseInt(data[data.length - 1][0].slice(0, 4));
            const newMonth = parseInt(dateValue.slice(5, 7));
            const prevMonth = parseInt(data[data.length - 1][0].slice(5, 7));
            if((newYear === prevYear && newMonth <= prevMonth) || newYear < prevYear) {
                alert("You can't add data from the past");
                return
            }
            if(newMonth - prevMonth > 1) {
                fillMonths(dataUnit, prevMonth, newMonth);
                return
            }
            const newData = [...data, dataUnit];
            setData(newData);
            localStorage.setItem('data', JSON.stringify(newData));
        } else { 
            return
        }
    }

    const fillMonths = (dataUnit: DataUnit, prevMonth: number, newMonth: number) => {
        let filledData = [];
        for(let i = 1; i < newMonth - prevMonth; i++) {
            const nextMonth = dataUnit[0].slice(0, 5) + (prevMonth < 9 ? "0" + (prevMonth + 1) : prevMonth + 1);
            const prevWeight = data[data.length - 1][1] as number ;
            const newWeight: number = dataUnit[1] as number ;
            const nextWeight = ((newWeight - prevWeight) * i / (newMonth - prevMonth)) + prevWeight;
            const nextDataUnit = [nextMonth, nextWeight];
            filledData.push(nextDataUnit);
        }
        const newData = [...data, ...filledData, dataUnit];
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));
    }


    const deleteLast = () => {
        const newData = data.filter((_, index) => index != data.length - 1);
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));
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
                    easing: 'inAndOut',
                }
            };
    
            const  chart = new google.visualization.LineChart(chartRef.current);
    
            chart.draw(chartData, options);
        }
        const google = (window as any).google;
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
    }

    if(openState != OpenState.OPEN || typePreview !== "resume") return <></>

    return <div id="resume">
        <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
        <div class="cross"></div>
        </button>
        <h1>resume</h1>
        <p ref={pRef}>
            <div id="curve_chart" ref={chartRef}>{chart()}</div>
            <input id="date" ref={dateRef} type="month" value={data[data.length - 1][0]}/>
            <input id="weight" ref={weightRef} type="number" step="10" value={data[data.length - 1][1]}/>
            <button id="submit-chart" class="btn-submit upper" type="submit" onclick={() => {addData()}}>Submit</button>            
            <button id="undo-chart" class="btn-submit upper"  onclick={() => {deleteLast()}}>Undo</button>
        </p>
    </div>
}