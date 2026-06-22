/* Javascript for Umoney Ads Dashboard */
function switchTab(evt, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function openLightbox(src) {
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

window.addEventListener('DOMContentLoaded', () => {
    // 1. Spend & Click Trend Chart
    const ctx1 = document.getElementById('spendTrendChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: DAILY_DATES,
            datasets: [
                {
                    label: 'Chi phí (USD)',
                    data: DAILY_SPENDS,
                    borderColor: '#ff6600',
                    backgroundColor: 'rgba(255, 102, 0, 0.05)',
                    fill: true,
                    tension: 0.3,
                    yAxisID: 'y'
                },
                {
                    label: 'Lượt Cài đặt',
                    data: DAILY_INSTALLS,
                    borderColor: '#10b981',
                    backgroundColor: 'transparent',
                    borderDash: [5, 5],
                    tension: 0.3,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: {
                        color: '#f1f5f9'
                    },
                    ticks: {
                        color: '#64748b'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#64748b'
                    }
                },
                x: {
                    grid: {
                        color: '#f1f5f9'
                    },
                    ticks: {
                        color: '#64748b'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#0f172a'
                    }
                }
            }
        }
    });

    // 2. Install Share Pie Chart
    const ctx2 = document.getElementById('installShareChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: CAMP_NAMES,
            datasets: [{
                label: 'Lượt tải',
                data: CAMP_INSTALLS,
                backgroundColor: [
                    '#ff6600', '#f97316', '#fb923c', '#fdba74', '#10b981', 
                    '#3b82f6', '#ec4899', '#06b6d4', '#14b8a6', '#84cc16'
                ],
                borderWidth: 1,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});
