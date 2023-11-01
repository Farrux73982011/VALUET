import Chart from 'chart.js/auto';


const data = {

    datasets: [{
      label: 'Balanse',
      data: [18, 64, 18],
      backgroundColor: [
        'White',
        '#018FFF',
        'rgb(255, 205, 86)'
      ],
      borderWidth: 0, 
      border: false,
      hoverOffset: 0
    }],
  // labels: [
  //   'Ethereum',
  //   'Bitcoin',
  //   'Dash',
  // ],
  };
const chart = new Chart(document.querySelector('#acquisitions'), {
    type: 'doughnut',
    data: data,
    options: {
      cutout: 50,
      rotation: 120,
      animation: {
        animateScale: true
      },
    },
    },
  );

const data2 = {

    labels: [2, 4, 6, 8, 10, 12, 14],
    datasets: [{
      label: 'Spend',
      data: [9.8, 9.7, 9.9, 9.8, 9.9, 9.85, 10],
      fill: false,
      borderColor: '#0097E8',
      tension: 0.1
    }]
  };
const chart2 = new Chart(document.querySelector('#acquisitions2'), {
    type: 'line',
    data: data2,
    },
  );

  const data3 = {

    labels: ['NOV 15', 'NOV 16', 'NOV 17', 'NOV 18', 'NOV 19', 'NOV 20', 'NOV 21', 'NOV 22'],
    datasets: [{
      label: 'Market',
      data: [4000, 8000, 4100, 1200, 6900, 8000, 2000, 8900],
      fill: false,
      borderColor: '#0097E8',
      tension: 0.1
    }]
  };
const chart3 = new Chart(document.querySelector('#acquisitions3'), {
    type: 'line',
    data: data3,
    },
  );
