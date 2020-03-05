/**
 * Module dependencies
 */
const React = require('react');
const Head = require('next/head');

const Tabs = require('./Tabs');
const Search = require('./Search');

const { useState, useEffect } = React;
/**
 * DemoView Component
 */
const Reports = ({ challenges }) => {
  const [reports, setReports] = useState(challenges ? Object.assign(challenges.reports, {}) : []);
  const [selected, setSelected] = useState(false);
  const [mainTags, setMainTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {

    const updatedTags = [];
    reports.forEach((report) => {
      report.tags.forEach((tag) => {
        if (!updatedTags.includes(tag)) updatedTags.push(tag);
      });
    });
    setMainTags(updatedTags);
  }, []);

  const handleReport = (report) => {
    setSelected(report);
  };

  const toggleTag = (text) => {
    let updateTagList;
    if (selectedTags.includes(text)) {
      const index = selectedTags.indexOf(text);
      updateTagList = selectedTags;
      if (index > -1) {
        updateTagList.splice(index, 1);
        setSelectedTags([...updateTagList]);
      }
    } else {
      updateTagList = [...selectedTags, text];
      setSelectedTags(updateTagList);
    }

    if (updateTagList.length === 0) return setReports(challenges.reports);

    const updatedReportsList = [];
    challenges.reports.forEach((report) => {
      report.tags.forEach((tag) => {
        if (updateTagList.includes(tag) && !updatedReportsList.includes(report)) updatedReportsList.push(report);
      });
    });

    setReports([...updatedReportsList]);
  };

  const handleFilter = (e) => {
    if (!e.target.value) setReports(challenges.reports);

    setSelectedTags([]);
    const updatedReports = challenges.reports.filter(report => report.title.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));

    setReports(updatedReports);
  };

  const handleClose = () => {
    setSelected(false);
  };

  return (
    <div name="demo">

      <div className="main-header">
        <div className="searchbox">
          <input onChange={handleFilter} className="search" type="text" placeholder="Busqueda"></input>
          <Search />
        </div>
        <div className="maintags">
          {
            mainTags && mainTags.map(text => <div key={text} onClick={() => toggleTag(text)} className={`maintag ${text} ${selectedTags.includes(text) ? 'active' : 'deactive'}`}>{text}</div>)
          }
        </div>
      </div>

      <div className="reports">
        {
          reports && reports.map(report => (
            <div
              key={report.title}
              className="report-card"
              onClick={() => handleReport(report)}
              onKeyDown={() => handleReport(report)}
              tabIndex="0"
              role="button"
            >
              { report.title }
              <div className="dates">
                {report.start_date} <br />
                {report.end_date}
              </div>
              <div className="tags">
                {
                  report.tags && report.tags.map(tag => (
                    <div className={`tag ${tag}`} />
                  ))
                }
              </div>

            </div>
          ))
        }
      </div>
      {
        selected && (
          <Tabs report={selected} handleClose={handleClose} />
        )
      }
    </div>
  );
};

export default Reports;
