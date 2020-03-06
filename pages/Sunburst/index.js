
const React = require('react');

const { useState, useEffect } = React;

function SunburstChart({ sunburstData }) {
  const [data] = useState(sunburstData);

  const colorMap = {
    initialize: '#142534',
    user_identity_takeover: '#FC5A5A', // Red 3
    user_documentation: '#23435e',
    user_identifier: '#2E587B',
    user_identifier_selector: '#00335E',
    user_blocked: '#BF211E', // Red 1
    user_compliant: '#3AA339', // Green 2
    user_identifier_confirmation: '#496379',
    user_company_name: '#1A3145', // Gray 1
    user_legal_entity_documentation: '#3AA339', // Gray 2
    user_phone: '#37546C',
    user_underage: '#DB8481',
    user_proof_of_life: '#3E5365',
    user_birthdate: '#E19A98',
    user_nationality: '#3E5365',
    user_home_address: '#76CCCC',
    backend_compliant: '#7BD77A', // Green 2
    nowhere: 'transparent',
    user_documentation_bad_quality: '#CA4946',
    user_engine_still_processing: '#C0E7E7',
    user_engine_unhandled: '#FC5A5A',
    user_proof_of_life_unknown: '#570F0E',
    user_proof_of_life_bad_quality: '#30414F',
    user_inconsistency: '#4281B5',
    frontend_compliant: '#3AA339'
  };

  const checkChildren = (item) => {
    const updatedItem = item;
    // if (item.children) {
    //   updatedItem.children = checkChildren(item);
    // }

    if (updatedItem.children && updatedItem.children.length > 0) {
      updatedItem.children = updatedItem.children.map(child => checkChildren(child));
    }

    updatedItem.color = colorMap[item.name] ? colorMap[item.name] : '#23435e';

    if (updatedItem.name === 'nowhere') updatedItem.name = '';

    if (updatedItem.name.includes('_')) updatedItem.name = updatedItem.name.replace('_', '  ');

    return updatedItem;
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (!data) return false;
    const updatedData = checkChildren(data);

    const myChart = Sunburst();

    myChart.data(updatedData)
      .size('size')
      .color('color')(document.getElementById('chart'));
  }, []);
  return (
    <div className="App">
      <div id="chart" />
    </div>
  );
}

module.exports = SunburstChart;
