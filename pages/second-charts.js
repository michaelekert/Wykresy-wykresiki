import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Bar } from 'react-chartjs-2'
import React from "react";
import Chart from 'chart.js/auto'

export const getStaticProps = async () =>{
    const res = await fetch('https://raw.githubusercontent.com/statisticspoland/sdg-indicators-pl/master/api/v1/krajowe/6/6-1-a.json');
    const pre_data = await res.json();
    const data = await pre_data["6-1-a"][0].dane[0].ogółem[0];
    return{
        props: {template: data}
    }
}

export default function SecondCharts({template}) {

    return (
        <div className="main_charts">
            <h1>Wykres</h1>
            <div className="chart">
            <Bar
                datasetIdKey='id'
                data={{
                    labels: [],
                    datasets: [{
                        label: "Pojemność obiektów małej retencji wodnej[dm3]",
                        data: template,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(140,26,255,0.2)',
                            'rgba(25, 19, 164, 0.2)',
                            "rgba(5,236,62,0.2)",
                            "rgba(0,34,192,0.2)",
                            "rgba(0,49,3,0.2)",
                            "rgba(255,0,0,0.2)",
                        ],
                        borderColor: [
                            'rgb(0,0,0)'
                        ],
                        borderWidth: 1
                    }
                    ],
                }}/>
            </div>
        </div>
    );
}