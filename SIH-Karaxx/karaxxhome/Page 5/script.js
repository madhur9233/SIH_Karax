const ctx = document.getElementById('annualReportChart').getContext('2d');
const annualReportChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Present', 'Absent', 'Holiday', 'Job Training', 'Certification'],
        datasets: [{
            label: 'Annual Report',
            data: [25, 5, 10, 15, 20],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 30
            }
        }
    }
});
