import React from 'react';
import Head from 'next/head'
import ReportsList from './reportsList';
import 'isomorphic-fetch'

const Home = (props) => {
   return (
      <div className="container">
         <Head>
            <title>Reportes MVP</title>
            <link rel="icon" href="/favicon.ico" />
            <script src="//unpkg.com/sunburst-chart" />
         </Head>

         <main>
            <div className="section-title">Reportes KYC Demo</div>
            <ReportsList />
         </main>

         <style jsx>{`

         `}</style>

         <style jsx global>{`
            html,
            body {
            height: 100vh;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
               Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }

            .section-title {
               height: 50px;
               position: absolute;
               top: 0;
               display: flex;
               align-items: center;
               width: 100vw;
               left: 0;
               padding-left: 32px;
               background: #23435e;
               font-size: 16px;
               font-weight: bold;
               z-index: 10;
               color: white;
            }

            html {
            background: rgba(150,150,150,.05);
            }

            body {
            padding: 32px;
            margin-top: 50px;
            }

            * {
            box-sizing: border-box;
            }


            .reports {
               display: grid;
               grid-template-columns: repeat(auto-fit, minmax(160px, 160px));
               grid-gap: 32px;
            }

            .report-card {
            width: 160px;
            height: 160px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 8px;
            padding: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: .5s box-shadow ease;

            display: flex;
            flex-flow: column;
            justify-content: space-around;
            font-size: 14px;
            }

            .report-card:hover {
            box-shadow: 1px 1px 4px rgba(0,0,0,.2);
            transition: .5s box-shadow ease;
            }

            .tags {
            display: flex;
            align-items: center;
            width: 90%;
            justify-content: space-around;
            }

            .tag {
            background: lightgray;
            width: 16px;
            height: 16px;
            min-width: 0;
            min-height: 0;
            border-radius: 8px;
            }

            .main-header {
            display: flex;
            margin-bottom: 32px;
            }

            .maintags {
            display: flex;
            justify-content: space-between;
            flex-flow: row wrap;
            align-items: flex-start;
            max-width: 450px;
            height: 48px;
            margin-left: 32px;
            }

            .maintag {
            width: auto;
            padding: 0 8px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: lightgray;
            opacity: .3;
            transition: .2s ease opacity;
            cursor: pointer;
            font-size: 13px;
            }

            .maintag.active {
            opacity: 1;
            transition: .2s ease opacity;
            font-weight: bold;
            }

            .dates {
            color: gray;
            font-weight: normal;
            }

            .MLA {
            background: lightskyblue;
            }

            .UserBlocker {
            background: palevioletred;
            }

            .MLB {
            background: lightgreen;
            }

            .iOS {
            background: lightgray;
            }

            .Android {
            background: springgreen;
            }

            .General {
            background: #fff159;
            }

            .Desktop, .Web-mobile {
            background: #16F4D0;
            }


            .tabs {
            width: 100vw;
            background: white;
            position: absolute;
            left: 238px;
            top: 50px;
            padding: 32px 40px 40px;
            left: 100%;
            transition: 1s ease left;
            overflow-y: scroll;
            height: 100vh;
            }
            .tabs.active {
            animation: in 1s ease forwards;
            }

            @keyframes in {
            from {
               left: 100%;
            }
            to {
               left: 0px;
            }
            }

            @keyframes out {
            from {
               left: 238px;
            }
            to {
               left: 100%;
            }
            }

            .line {
            display: flex;
            }

            .line:nth-child(odd) {
            background: #f6f8fa;
            }

            .line.header {
            font-weight: bold;
            margin-top: 24px;
            background: lightgray;
            }

            .line.header .cell {
            height: 32px;
            font-size: 14px;
            }

            .cell {
            min-width: 170px;
            width: 170px;
            max-width: 170px;
            height: 40px;
            text-align: left;
            border: 1px solid #dfe2e5;
            padding-left: 8px;

            display: flex;
            justify-content: flex-start;
            align-items: center;

            border: 1px transparent solid;
            word-break: break-all;
            font-size: 14px;
            }



            .close-icon {
            margin-bottom: 16px;
            }

            table {
            margin: 0 auto;
            }

            .table-slider {
            overflow: scroll;
            height: 74vh;
            }

            .tabs-menu {
            display: flex;
            justify-content: center;
            position: relative;
            align-items: center;
            }

            .tab {
            overflow-x: scroll;
            display: flex;
            justify-content: center;
            align-items: center;
            }

            .search {
            width: 220px;
            border: none;
            margin-bottom: 0;
            height: 32px;
            padding-left: 16px;
            border-radius: 4px;
            font-size: 12px;
            outline: none;
            }

            .tab.chart {
            margin: 0 auto;
            transform: scale(.8) translateY(-48px);
            overflow: hidden;
            }

            .close-container{
            position: absolute;
            left: 0;
            cursor: pointer;
            }

            .menu {
            margin-right: 32px;
            font-size: 16px;
            font-weight: bold;
            color: #23435e;
            height: 32px;
            border: none;
            opacity: .5;
            padding: 0 32px;
            cursor: pointer;
            outline: none;
            }

            .menu.active {
            border-bottom: 1px solid #23435e;
            opacity: 1;
            }

            .graph-image {
            width: auto;
            height: 100%;
            max-height: 550px;
            margin: 32px auto;
            }

            .searchbox {
            width: 220px;
            background: white;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 32px;
            padding-right: 16px;
            }

            .path-label text-path {
            stroke-width: 3;
            }

            .sunburst-viz .slice path {
               cursor: pointer;
            }
            
            .sunburst-viz text {
               font-family: sans-serif;
               font-size: 12px;
               dominant-baseline: middle;
               text-anchor: middle;
               pointer-events: none;
               fill: #222;
            }
            
            .sunburst-viz text .text-contour {
               fill: none;
               stroke: white;
               stroke-width: 3;
               stroke-linejoin: 'round';
            }
            
            .sunburst-viz .main-arc {
               stroke: white;
               stroke-width: 1px;
               transition: opacity .4s;
            }
            
            .sunburst-viz .main-arc:hover {
               opacity: 0.85;
               transition: opacity .05s;
            }
            
            .sunburst-viz .hidden-arc {
               fill: none;
            }
            
            .sunburst-tooltip {
               display: none;
               position: absolute;
               min-width: 320px;
               width: fit-content;
               white-space: nowrap;
               padding: 5px;
               border-radius: 3px;
               font: 12px sans-serif;
               color: white;
               background: rgba(0,0,0,0.65);
               pointer-events: none;
            }
            
            .sunburst-tooltip .tooltip-title {
               font-weight: bold;
               text-align: center;
               margin-bottom: 5px;
            }
            .lds-ripple {
               display: inline-block;
               position: relative;
               width: 80px;
               height: 80px;
             }
             .lds-ripple div {
               position: absolute;
               border: 4px solid #fff;
               opacity: 1;
               border-radius: 50%;
               animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
             }
             .lds-ripple div:nth-child(2) {
               animation-delay: -0.5s;
             }
             @keyframes lds-ripple {
               0% {
                 top: 36px;
                 left: 36px;
                 width: 0;
                 height: 0;
                 opacity: 1;
               }
               100% {
                 top: 0px;
                 left: 0px;
                 width: 72px;
                 height: 72px;
                 opacity: 0;
               }
             }
             .loader {
               position: fixed;
               left: 50%;
               top: 50%;
             }
         `}</style>
      </div>
   )
}

export default Home
