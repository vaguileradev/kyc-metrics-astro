/* eslint-disable nordic/i18n-jsx-no-literals */
import React from 'react'
import Close from './Close'
import Sunburst from './Sunburst'

const { useState, useEffect } = React;
const restclient = {}

function Tabs({ report, handleClose }) {
  const [hightlights, setHightlight] = useState(false);
  const [challenges, setChallenges] = useState(false);
  const [sunburstData, setSunburstData] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (!report) return false;

    fetch(`${window.location.href}api/report/${report.highlights_url.split('/')[3]}/highlights`)
      .then(response => response.json())
      .then((response) => {
        setHightlight(response);
      });

    fetch(`${window.location.href}api/report/${report.challenges_url.split('/')[3]}/kyc_nodes`)
      .then(response => response.json())
      .then((response) => {
        setChallenges(response);
      });

    if (report.sunburst_url) {
      fetch(`${window.location.href}api/report/${report.sunburst_url.split('/')[3]}/sunburst`)
      .then(response => response.json())
      .then((response) => {
        try {
          const data = JSON.parse(response)
          setSunburstData(data);
        } catch(err) {
          setSunburstData(false);
        }
      });
    }
  }, []);

  useEffect(() => {
  }, [sunburstData]);

  return (
    <div className="modal">
      <div className={`tabs ${hightlights && challenges ? 'active' : ''}`}>
        <div className="tabs-menu">
          <div className="close-container">
            <Close onClick={handleClose} />
          </div>
          <div
            className={`menu ${selectedTab === 0 ? 'active' : ''}`}
            onClick={() => setSelectedTab(0)}
            onKeyDown={() => setSelectedTab(0)}
            tabIndex="0"
            role="button"
          >
            Hightlights
          </div>
          <div
            className={`menu ${selectedTab === 1 ? 'active' : ''}`}
            onClick={() => setSelectedTab(1)}
            onKeyDown={() => setSelectedTab(1)}
            tabIndex="0"
            role="button"
          >
            Challenges
          </div>
          {
            report && report.sunburst_url && sunburstData && (
              <div
                className={`menu ${selectedTab === 2 ? 'active' : ''}`}
                onClick={() => setSelectedTab(2)}
                onKeyDown={() => setSelectedTab(2)}
                tabIndex="0"
                role="button"
              >
                Chart
              </div>
            )
          }

        </div>
        {
          report && hightlights && selectedTab === 0 && (
            <div className="tab">

              <table>
                <th className="line header">
                  {hightlights[0].map(cell => (
                    <td className="cell">
                      {cell.replace(/"/g, '').toUpperCase()}
                    </td>
                  ))}
                </th>
                <div className="table-slider">
                  {hightlights.slice(1, hightlights.length - 1).map(line => (
                    <tr className="line">
                      {line.map(cell => (
                        <td className="cell">
                          {cell.replace(/"/g, '')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </div>
              </table>
            </div>
          )
        }
        {
          report && challenges && selectedTab === 1 && (
            <div className="tab">
              <table>
                <th className="line header">
                  {challenges[0].map(cell => (
                    <td key={cell} className="cell">
                      {cell.replace(/"/g, '').toUpperCase()}
                    </td>
                  ))}
                </th>
                <div className="table-slider">
                  {challenges.slice(1, challenges.length - 1).map(line => (
                    <tr key={`challenges-${line.toString()}`} className="line">
                      {line.map(cell => (
                        <td key={cell} className="cell">
                          {cell.replace(/"/g, '')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </div>
              </table>
            </div>
          )
        }
        {
          sunburstData && selectedTab === 2 && (
            <div className="tab chart">
              <Sunburst sunburstData={sunburstData} />
            </div>
          )
        }

      </div>
    </div>
  );
}

export default Tabs;
