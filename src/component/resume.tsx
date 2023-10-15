import { OpenPageContext, OpenState, TypePreviewContext } from "../context";
import { Reactish } from "../reactish";

import "./resume.css"

export const Resume = ({ textClass, onAnimationEnd }) => {

    type DataUnit = [string, number];
    type Data = DataUnit[];
    type History = Data[];

    const dateOfBirth = "2021-08";
    const initData: Data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [[dateOfBirth, 0]];
    const initHistory: History = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [initData];

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);
    const [data, setData] = Reactish.useState(initData);
    const [history, setHistory] = Reactish.useState(initHistory);

    const [prevDate, prevWeight] = data[data.length - 1];
    const prevYear: number = parseInt(prevDate.slice(0, 4));
    const prevMonth: number = parseInt(prevDate.slice(5, 7));

    const [dateRef] = Reactish.useRef<HTMLInputElement>();
    const [weightRef] = Reactish.useRef<HTMLInputElement>();
    const [chartRef, setChartRef] = Reactish.useRef<HTMLElement>();

    Reactish.useEffect([data.length], () => {
        if(chartRef.current) {
            console.log("update");
            chart(chartRef.current);
        }
    });

    const chart = (el: HTMLElement) => {

        const drawChart = () => {

            setChartRef(el);

            const chartData = new google.visualization.DataTable();
            chartData.addColumn('string', 'Date');
            chartData.addColumn('number', "Theodor's Weight");

            chartData.addRows(data);
    
            const options = {
                chart: {
                    title: "Theodor's Weight",
                    subtitle: 'in grams'
                },
                titleTextStyle : {
                    fontSize: 25,
                },
                legend: { 
                    position: 'none',
                },
                colors:['#9ae4b9'],
                hAxis: {
                    titleTextStyle: {
                        fontSize: 15,
                        italic: true,
                    },
                },
            };
    
            const chart = new google.charts.Line(el);    
            chart.draw(chartData, google.charts.Line.convertOptions(options));
        }

        const google = (window as any).google;
        google.charts.load('current', {'packages':['line']});
        google.charts.setOnLoadCallback(drawChart);
    }

    const addData = () => {
        const dateValue: string = dateRef.current.value;
        const weightValue: string = weightRef.current.value;

        if(dateValue != "" && weightValue != "") {
            const dataUnit: DataUnit = [
                dateValue, 
                parseInt(weightValue)
            ]
            const newYear: number = parseInt(dateValue.slice(0, 4));
            const newMonth: number = parseInt(dateValue.slice(5, 7));
            if(newYear == prevYear && newMonth - prevMonth == 1) {
                const newData = [...data, dataUnit];
                const newHistory = [...history, newData];
                setData(newData);
                setHistory(newHistory);
                localStorage.setItem('data', JSON.stringify(newData));
                localStorage.setItem('history', JSON.stringify(newHistory));
                return
            }
            if((newYear === prevYear && newMonth <= prevMonth) || newYear < prevYear) {
                alert("You can't add data from the past");
                return
            }
            if(newMonth - prevMonth > 1 || newYear !== prevYear) {
                fillMonths(dataUnit, newMonth, newYear);
                return
            }
        } else { 
            return
        }
    }

    const fillMonths = (dataUnit: DataUnit, newMonth: number, newYear: number) => {
        let filledData: Data = [];
        const newWeight = dataUnit[1];
        const diff = (newMonth - prevMonth) + 12 * (newYear - prevYear);
    
        for(let i = 1; i <= diff; i++) {
            const nextWeight: number = ((newWeight - prevWeight) * i / diff) + prevWeight;

            const date = new Date(prevDate);
            date.setMonth(prevMonth - 1 + i);
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const nextMonth = `${year}-${month}`;
            const nextDataUnit: DataUnit = [nextMonth, nextWeight];
            filledData.push(nextDataUnit);
        }
        const newData = [...data, ...filledData];
        const newHistory = [...history, newData];
        setData(newData);
        setHistory(newHistory);
        localStorage.setItem('data', JSON.stringify(newData));
        localStorage.setItem('history', JSON.stringify(newHistory));
    }


    const deleteLast = () => {
        if(history.length < 2) {
            return
        }
        const currentHistory = history.filter((item, index) => index !== history.length - 1);
        setHistory(currentHistory);
        const currentData: Data = currentHistory[currentHistory.length - 1];
        setData(currentData);
        localStorage.setItem('data', JSON.stringify(currentData));
        localStorage.setItem('history', JSON.stringify(currentHistory));
    }

    if((openState != OpenState.OPEN && openState != OpenState.EFFECT) || typePreview !== "resume") return <></>

    return <div id="resume">
        <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
        <div class="cross"></div>
        </button>
        <h1>resume</h1>
        <section class={textClass} onanimationend={onAnimationEnd}>
            {
                chartRef.current
                ? <div id="chart_container" dangerouslySetInnerHTML={{entity: null, ref: chartRef}}></div>
                : <div id="chart_container"><div id="curve_chart" apply={chart}></div></div>
            }
            <input id="date" ref={dateRef} type="month" value={data[data.length - 1][0]}/>
            <input id="weight" ref={weightRef} type="number" step="10" value={data[data.length - 1][1]}/>
            <button id="submit-chart" class="btn-submit upper" type="submit" onclick={() => {addData()}}>Submit</button>            
            <button id="undo-chart" class="btn-submit upper"  onclick={() => {deleteLast()}}>Undo</button>
        </section>
    </div>
}
