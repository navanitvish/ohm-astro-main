import React from 'react';

const AstrologicalChart = ({ title, chartData }) => {
  // Helper function to position text in houses
  const getHousePosition = (house) => {
    const positions = {
      1: { x: '15%', y: '50%' },
      2: { x: '50%', y: '85%' },
      3: { x: '85%', y: '85%' },
      4: { x: '85%', y: '50%' },
      5: { x: '50%', y: '15%' },
      6: { x: '85%', y: '15%' },
      7: { x: '75%', y: '25%' },
      8: { x: '50%', y: '50%' },
      9: { x: '25%', y: '25%' },
      10: { x: '15%', y: '15%' },
      11: { x: '25%', y: '75%' },
      12: { x: '15%', y: '85%' }
    };
    return positions[house];
  };

  return (
    <div className="relative w-full aspect-square max-w-md border-2 border-red-500 bg-amber-50 rounded-lg">
      {/* Diagonal lines */}
      <div className="absolute inset-0">
        <div className="w-full h-full">
          <div className="absolute w-0.5 h-full left-1/2 bg-red-500 transform -translate-x-1/2" />
          <div className="absolute w-full h-0.5 top-1/2 bg-red-500 transform -translate-y-1/2" />
          <div className="absolute w-full h-full">
            <div className="absolute w-0.5 h-[141.4%] bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center rotate-45" />
            <div className="absolute w-0.5 h-[141.4%] bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center -rotate-45" />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute -top-8 left-0 right-0 text-center font-semibold text-lg">
        {title}
      </div>

      {/* House contents */}
      {Object.entries(chartData).map(([house, content]) => {
        const position = getHousePosition(house);
        return (
          <div
            key={house}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-gray-800"
            style={{
              left: position.x,
              top: position.y
            }}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
};

const AstrologicalCharts = () => {
  const lagnaChartData = {
    1: 'Sa',
    2: 'Ju Ur',
    3: 'Mo',
    4: 'Ma',
    5: 'La Su Me',
    6: 'Ke',
    7: '7',
    8: '8',
    9: 'Ve 9',
    10: 'Pl 10',
    11: '11',
    12: 'Ra Ne'
  };

  const moonChartData = {
    1: '1',
    2: 'Ju Ur',
    3: 'Mo',
    4: 'Ma',
    5: '5',
    6: '6',
    7: 'Ke',
    8: 'La Su Me',
    9: '9',
    10: 'Pl',
    11: 'Sa',
    12: 'Ra Ne'
  };

  return (
    <div className="p-4 max-w-5xl mx-auto bg-slate-50 shadow-2xl rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-8 bg-red-200">Chart At Sunrise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <AstrologicalChart 
          title="Lagna Chart At Sunrise"
          chartData={lagnaChartData} 
        />
        <AstrologicalChart 
          title="Moon Chart At Sunrise" 
          chartData={moonChartData} 
        />
      </div>
    </div>
  );
};

export default AstrologicalCharts;