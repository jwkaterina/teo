import { OpenPageContext, OpenState, TypePreviewContext } from "../../context";
import { Reactish, ReactishEntity } from "../../reactish";
import PreviewPagesProps from "./preview-pages-props";
import { createWeight, getWeights, deleteWeight } from "../../service/weight"

import "./resume.css"
import { Weight } from "../weight";

export const Resume = ({ textClass, onAnimationEnd }: PreviewPagesProps): ReactishEntity => {

    type weight = number;
    type date = string;
    type id = string;
    type DataUnit = [date, weight, id];
    type Data = DataUnit[];
    type History = Data[];

    const dateOfBirth = "2021-08";
    const initData: DataUnit =[dateOfBirth, 0, ''];
    const initHistory: History = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [[initData]];

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);
    const [data, setData] = Reactish.useState<Data>([initData]);
    const [history, setHistory] = Reactish.useState<History>(initHistory);

    const [prevDate, prevWeight, prevId] = data[data.length - 1];
    const prevYear: number = parseInt(prevDate.slice(0, 4));
    const prevMonth: number = parseInt(prevDate.slice(5, 7));

    const [dateRef] = Reactish.useRef<HTMLInputElement>();
    const [weightRef] = Reactish.useRef<HTMLInputElement>();
    const [chartRef, setChartRef] = Reactish.useRef<HTMLElement>();

    Reactish.useEffect([data.length], () => {
        if(chartRef.current) {
            chart(chartRef.current);
        }
    });

    Reactish.useEffect([openState], () => {
        if(openState !== OpenState.OPEN || typePreview !== "resume") return
        const currentYear = new Date().getFullYear();
        let weightsArray = [initData];

        const getAllWeights = async () => {
            for(let year = 2021; year <= currentYear; year++) {
                const weights = await getWeights(year);
                weights.forEach((weight: Weight) => {
                    const date = weight.dateStr;
                    const weightValue = weight.weight;
                    const id = weight.id;
                    weightsArray.push([date, weightValue, id]);
                })
                console.log(weights, year);
                setData(weightsArray);
            }
        };
        getAllWeights().catch((err) => {
            console.log(err);
        });
    })

    //Material chart
    // const chart = (el: HTMLElement) => {

    //     const drawChart = () => {

    //         setChartRef(el);

    //         const chartData = new google.visualization.DataTable();
    //         chartData.addColumn('string', 'Date');
    //         chartData.addColumn('number', "Theodor's Weight");

    //         chartData.addRows(data);
    
    //         const options = {
    //             chart: {
    //                 title: "Theodor's Weight",
    //                 subtitle: 'in grams'
    //             },
    //             titleTextStyle : {
    //                 fontSize: 25,
    //             },
    //             legend: { 
    //                 position: 'none',
    //             },
    //             colors:['#9ae4b9'],
    //             hAxis: {
    //                 titleTextStyle: {
    //                     fontSize: 15,
    //                     italic: true,
    //                 },
    //             },
    //         };
    
    //         const chart = new google.charts.Line(el);    
    //         chart.draw(chartData, google.charts.Line.convertOptions(options));
    //     }

    //     const google = (window as any).google;
    //     google.charts.load('current', {'packages':['line']});
    //     google.charts.setOnLoadCallback(drawChart);
    // }

    const chart = (el: HTMLElement) => {

        const drawChart = () => {

            setChartRef(el);

            const chartData = new google.visualization.DataTable();
            chartData.addColumn('string', 'Date');
            chartData.addColumn('number', "Theodor's Weight");
            chartData.addColumn('string', "id");

            chartData.addRows(data);
            console.log('data:', data);
    
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
                // animation: {
                //     duration: 1000,
                //     easing: 'out',
                //     startup: true,
                // },
            };

            var view = new google.visualization.DataView(chartData);
            // view.setRows(view.getFilteredRows([{column: 1, minValue: new Date(2007, 0, 1)}]));
            view.hideColumns([2]);
            const chart = new google.visualization.LineChart(el);  
            chart.draw(view, options);
        }

        const google = (window as any).google;
        google.charts.load("current", {packages: ["corechart"]});        
        google.charts.setOnLoadCallback(drawChart);
    }

    const addData = () => {
        const dateValue: string = dateRef.current.value;
        const weightValue: number = parseInt(weightRef.current.value);

        if(dateValue != "" && weightValue) {
            const dataUnit: DataUnit = [
                dateValue, 
                weightValue,
                ""
            ]
            const newYear: number = parseInt(dateValue.slice(0, 4));
            const newMonth: number = parseInt(dateValue.slice(5, 7));
            if(newYear == prevYear && newMonth - prevMonth == 1) {
                const newData = [...data, dataUnit];
                const newHistory = [...history, newData];
                saveData(newData, newHistory);
                createWeight(weightValue, dateValue)
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
            const nextDataUnit: DataUnit = [nextMonth, nextWeight, ''];
            filledData.push(nextDataUnit);
            createWeight(nextWeight, nextMonth);
        }
        const newData = [...data, ...filledData];
        const newHistory = [...history, newData];
        saveData(newData, newHistory);
    }


    const deleteLast = () => {
        if(history.length < 2) return 

        const lastData = history[history.length - 1];
        const lastDataLength = lastData.length;
        const prevHistoryLength = history[history.length - 2].length;
        const dataToDelete = lastData.slice(prevHistoryLength, lastDataLength);
        dataToDelete.forEach((dataUnit) => {
            const date = dataUnit[0];
            const year = parseInt(date.slice(0, 4));
            const id = dataUnit[2];
            // deleteWeight(year, id);
        })

        const currentHistory = history.filter((item, index) => index !== history.length - 1);
        const currentData: Data = currentHistory[currentHistory.length - 1];
        saveData(currentData, currentHistory);
        
        console.log("lastData", lastDataLength);
        console.log("prevHistory", prevHistoryLength);
        console.log("dataToDelete", dataToDelete);
    }

        const saveData = (data: Data, history: History) => {
        setData(data);
        setHistory(history);
        saveToLocalStorage(history);
    }

    const saveToLocalStorage = (history: History) => {
        localStorage.setItem('history', JSON.stringify(history));
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
