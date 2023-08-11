import { OpenPageContext, OpenState, TypePreviewContext } from "../context";
import { Reactish } from "../reactish";

import "./resume.css"

export const Resume = () => {

    type DataUnit = [string, number];
    type Data = DataUnit[];

    const dateOfBirth = "2021-08";
    const initData: Data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data') as string) : [[dateOfBirth, 0]];

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);
    const [data, setData] = Reactish.useState(initData);

    const prevYear: number = parseInt(data[data.length - 1][0].slice(0, 4));
    const prevMonth: number = parseInt(data[data.length - 1][0].slice(5, 7));
    const prevWeight: number = data[data.length - 1][1];

    const currentYear: number = new Date().getFullYear();
    const currentMonth: number = new Date().getMonth() + 1;
    const currentDate: string = currentYear + "-" + (currentMonth < 10 ? "0"  + currentMonth  : currentMonth);

    const [dateRef] = Reactish.useRef<HTMLInputElement>();
    const [weightRef] = Reactish.useRef<HTMLInputElement>();
    const [chartRef] = Reactish.useRef<HTMLElement>();

    const evaluateTextClass = (hideClass: string, animateClass: string, keepClass: string): string => {
        if(openState == OpenState.OPENING || openState == OpenState.CLOSING || openState == OpenState.CLOSED) {
            return hideClass
        } else if(openState == OpenState.EFFECT) {
            return animateClass
        } else {if(openState == OpenState.OPEN)
            return keepClass
        }
    }

    const onAnimationEnd = () => {
        if(openState == OpenState.EFFECT) {
            setOpenState(OpenState.OPEN);
        }
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
                setData(newData);
                localStorage.setItem('data', JSON.stringify(newData));
                return
            }
            if((newYear === prevYear && newMonth <= prevMonth) || newYear < prevYear) {
                alert("You can't add data from the past");
                return
            }
            if(newMonth - prevMonth > 1 || newYear !== prevYear) {
                fillMonths(dataUnit, prevMonth, newMonth);
                return
            }
        } else { 
            return
        }
    }

    const fillMonths = (dataUnit: DataUnit, prevMonth: number, newMonth: number) => {
        const newWeight: number = dataUnit[1];
        const newYear: number = parseInt(dataUnit[0].slice(0, 4));
        let filledData: Data = [];
        let diff: number;
        if(newMonth > prevMonth) { 
            diff = newMonth - prevMonth;
        } else {
            diff = 12 - prevMonth + newMonth;
        }

        //TODO: fill gap in years

        for(let i = 1; i < diff; i++) {
            const nextWeight: number = ((newWeight - prevWeight) * i / diff) + prevWeight;
            let nextMonth: string;
            if(prevMonth + i < 13) {
                nextMonth = prevYear + "-"  + (prevMonth + i < 10 ? "0" + (prevMonth + i) : prevMonth + i);
            } else {
                nextMonth = newYear + "-" + (prevMonth + i - 12 < 10 ? "0" + (prevMonth + i - 12) : prevMonth + i - 12);
            }
            const nextDataUnit: DataUnit = [nextMonth, nextWeight];
            filledData.push(nextDataUnit);
        }
        const newData = [...data, ...filledData, dataUnit];
        setData([...data, ...filledData, dataUnit]);
        localStorage.setItem('data', JSON.stringify(newData));
    }


    const deleteLast = () => {
        if(data.length < 2) {
            return
        }
        const newData = data.filter((dataUnit, index) => index != data.length - 1);
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));
    }

    // const chart = () => {
    //     const drawChart = () => {
    //         const chartData = google.visualization.arrayToDataTable(data);
    
    //         const  options = {
    //             curveType: 'function',
    //             legend: { position: 'top',
    //                 alignment: 'center',
    //                 textStyle: {
    //                     fontSize: 20,
    //                 }
    //             },
    //             colors:['#9ae4b9'],
    //             hAxis: {
    //                 title: 'date',
    //                 titleTextStyle: {
    //                     fontSize: 20,
    //                 },
    //                 showTextEvery: 5,
    //             },
    //             vAxis: {
    //                 title: 'weight, g',
    //                 titleTextStyle: {
    //                     fontSize: 20,
    //                 }
    //             },
    //             animation: {
    //                 startup: true,
    //                 duration: 700,
    //                 easing: 'inAndOut',
    //             }
    //         };
    
    //         const  chart = new google.visualization.LineChart(chartRef.current);
    
    //         chart.draw(chartData, options);
    //     }
    //     const google = (window as any).google;
    //     google.charts.load('current', {'packages':['corechart']});
    //     google.charts.setOnLoadCallback(drawChart);
    // }

    const chart = () => {
        const drawChart = () => {

            var chartData = new google.visualization.DataTable();
            chartData.addColumn('string', 'Date');
            chartData.addColumn('number', "Theodor's Weight");
    
            chartData.addRows(data);

            //TODO: style chartt
    
            var options = {
            chart: {
                title: "Theodor's Weight",
                subtitle: 'in grams'
            },
            legend: { 
                position: 'none',
            },
            colors:['#9ae4b9'],
            hAxis: {
                showTextEvery: 5,
            },
            animation: {
                startup: true,
                duration: 700,
                easing: 'inAndOut',
            }
            };
    
            var chart = new google.charts.Line(chartRef.current);    
            chart.draw(chartData, google.charts.Line.convertOptions(options));
        }

        const google = (window as any).google;
        google.charts.load('current', {'packages':['line']});
        google.charts.setOnLoadCallback(drawChart);
    }

    if((openState != OpenState.OPEN && openState != OpenState.EFFECT) || typePreview !== "resume") return <></>

    return <div id="resume">
        <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
        <div class="cross"></div>
        </button>
        <h1>resume</h1>
        <section class={evaluateTextClass("hide-text", "animate-text", "keep-text")} onanimationend={onAnimationEnd}>
            <div id="curve_chart" ref={chartRef}>{chart()}</div>
            <input id="date" ref={dateRef} type="month" value={data[data.length - 1][0]}/>
            <input id="weight" ref={weightRef} type="number" step="10" value={data[data.length - 1][1]}/>
            <button id="submit-chart" class="btn-submit upper" type="submit" onclick={() => {addData()}}>Submit</button>            
            <button id="undo-chart" class="btn-submit upper"  onclick={() => {deleteLast()}}>Undo</button>
        </section>
    </div>
}