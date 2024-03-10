const pieData = {
    labels: ['Eateries', 'Apparel', 'Transport', 'Debt', 'Education', 'Miscellaneous'],
    datasets: [{
      data: [30, 40, 30, 20, 10, 15], // Corrected the number of data values
      backgroundColor: ['turquoise', 'purple', 'orange', '#F08CAE', '#077187', '#F46036']
    }]
  };
  
  const weeklyData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Weekly Expenditure',
      data: [100, 120, 90, 110, 80,20,40],
      backgroundColor: 'rgba(255, 192, 203, 0.7)',
      borderColor: 'rgba(255, 105, 180, 1)',
    }]
  };
  
  // Sample data for monthly spending
  const monthlyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Monthly Expenditure',
      data: [400, 450, 500, 600],
      backgroundColor: 'rgba(255, 255, 0, 0.7)',
      borderColor: 'rgba(255, 255, 0, 1)',
    }]
  };
  
  // Function to create pie chart
  function createPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: pieData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        },
        elements: {
          arc: {
            borderWidth: 0, // Set border width to 0 for transparent edges
          }
        }
      }
    });
  }
  function createGraphs() {
    createGraph('graph1', weeklyData); // Removed the color parameter
    createGraph('graph2', monthlyData); // Removed the color parameter
  }
  
  // Function to create a single graph
  function createGraph(canvasId, data) { // Removed the color parameter
    const ctx = document.getElementById(canvasId).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'white' // Set color of ticks (labels) to white
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white' // Set color of labels on x-axis to white
            }
          }]
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' // Set color of legend labels to white
            }
          }
        }
      }
    });
  }
  
  // Function to handle go back button
  function goBack() {
    window.location.href="dashboard_final.html";
  }
  
  // Call functions to create pie chart, additional graphs, etc.
  createPieChart();
  createGraphs();