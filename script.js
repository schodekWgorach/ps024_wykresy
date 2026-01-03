        // Przykładowe dane do wykresu
        const data = [
            { label: 'JavaScript', value: 30 },
            { label: 'Python', value: 25 },
            { label: 'Java', value: 20 },
            { label: 'C#', value: 15 },
            { label: 'Ruby', value: 10 }
        ];

        // Pobieramy kontekst (rodzaj "płótna") z elementu canvas
        const ctx = document.getElementById('pieChart').getContext('2d');

        // Tworzymy nowy wykres
        const pieChart = new Chart(ctx, {
                            type: 'pie',
                            data: {
                                labels: data.map(item => item.label),
                                datasets: [{
                                    data: data.map(item => item.value),
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.7)',
                                        'rgba(54, 162, 235, 0.7)',
                                        'rgba(255, 206, 86, 0.7)',
                                        'rgba(75, 192, 192, 0.7)',
                                        'rgba(153, 102, 255, 0.7)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: true,
                                layout: {
                                    padding: {
                                        left: 50,
                                        right: 50,
                                        top: 20,
                                        bottom: 20
                                    }
                                },
                                plugins: {
                                    legend: {
                                        position: 'top',
                                        padding: 20
                                    },
                                    title: {
                                        display: true,
                                        text: 'Popularność Języków Programowania',
                                        padding: {
                                            top: 40,
                                            bottom: 30
                                        },
                                        font: {
                                            size: 18
                                        }
                                    }
                                }
                            }
                        });
   