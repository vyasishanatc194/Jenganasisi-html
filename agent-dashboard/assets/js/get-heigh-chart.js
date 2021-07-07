Highcharts.chart('container', {
    chart: {
          type: 'pie',
      },
      title: {
          text: ''
      },
  
      series: [{
          minPointSize: 0,
          innerSize: '60%',
          zMin: 0,
          name: 'countries',
          data: [{
              name: '',
              y: 50,
              z: 50,
              color: '#f0f0f0',
          }, {
              name: '65 Inactive',
              y: 30,
              z: 100,
              color: '#222221',
          },
          {
              name: '285 Active',
              y: 20,
              z: 180,
              color: '#FFC20F',
          }]
      }]
  });
  
//   Highcharts.chart('container-2', {
//     chart: {
//           type: 'pie',
//       },
//       title: {
//           text: ''
//       },
  
//       series: [{
//           minPointSize: 0,
//           innerSize: '60%',
//           zMin: 0,
//           name: 'countries',
//           data: [{
//               name: '',
//               y: 50,
//               z: 50,
//               color: '#f0f0f0',
//           }, {
//               name: '65 Inactive',
//               y: 30,
//               z: 100,
//               color: '#222221',
//           },
//           {
//               name: '285 Active',
//               y: 20,
//               z: 180,
//               color: '#FFC20F',
//           }]
//       }]
//   });
  
//   Highcharts.chart('product-chart', {
//       chart: {
//           type: 'pie',
//           responsive: true,
          
//       },
//       title: {
//           text: ''
//       },
//       tooltip: {
//           headerFormat: '',
//           pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
//               'Area (square km): <b>{point.y}</b><br/>' +
//               'Population density (people per square km): <b>{point.z}</b><br/>'
//       },
//       series: [{
//           minPointSize: 0,
//           innerSize: '60%',
//           zMin: 0,
//           name: 'countries',
//           data: [{
//               // name: '',
//               y: 30,
//               z: 50,
//               color: '#f0f0f0',
//           }, {
//               name: 'Activated',
//               y: 30,
//               z: 130,
//               color: '#222221',
//           },
//           {
//               name: 'Deactivated',
//               y: 20,
//               z: 130,
//               color: '#FFC20F',
//           },
          
//           {
//               name: 'Deactivated',
//               y: 20,
//               z: 130,
//               color: '#CA3535',
//           },
//           {
//               name: 'Deactivated',
//               y: 20,
//               z: 200,
//               color: '#77B342',
//           }]
//       }]
//   });