/* Javascript for Umoney Ads Dashboard */
const DAILY_DATES = ["2026-05-01", "2026-05-02", "2026-05-03", "2026-05-04", "2026-05-05", "2026-05-06", "2026-05-07", "2026-05-08", "2026-05-09", "2026-05-10", "2026-05-11", "2026-05-12", "2026-05-13", "2026-05-14", "2026-05-15", "2026-05-16", "2026-05-17", "2026-05-18", "2026-05-19", "2026-05-20", "2026-05-21", "2026-05-22", "2026-05-23", "2026-05-24", "2026-05-25", "2026-05-26", "2026-05-27", "2026-05-28", "2026-05-29", "2026-05-30", "2026-05-31"];
const DAILY_SPENDS = [216.41, 163.24, 198.13, 201.2, 251.82, 297.26, 291.33, 284.35, 278.86, 307.0, 264.31, 293.11, 268.84, 262.74, 265.5, 290.49, 301.7, 282.87, 286.24, 288.86, 279.67, 388.1, 471.57, 502.96, 473.8, 498.23, 499.08, 944.98, 1636.92, 1613.0, 1749.37];
const DAILY_INSTALLS = [330, 264, 268, 270, 279, 331, 374, 371, 321, 457, 449, 419, 383, 381, 363, 378, 341, 332, 385, 489, 329, 468, 554, 559, 696, 641, 745, 966, 1166, 1061, 1249];
const CAMP_NAMES = ["Umoney KYC 3_4", "Umoney KYC app google play  t4", "Umoney_App-Actions_Transfer b1", "Umoney_Followers_T4_Apr", "Umoney_App-Actions_Saving INB_", "Umoney_App-Actions_buy data cl", "Umoney KYC rmkt", "Umoney_Other_truyenthong  TT T", "Umoney_Followers_T5 new_May", "Umoney_App-Actions_buy data cl", "Umoney KYC app google play  t5", "Umoney_App-Actions_Transfer t5", "Umoney_App-Actions_Transfer  T", "Umoney_Followers_T5 new b2_May", "Umoney_Followers_T5 new post h", "Umoney KYC app google play  t5", "Umoney KYC app google play  t5", "Umoney_App-Actions_Transfer t5", "Umoney_App-Actions_Topup 20% T", "Umoney_App-Actions_Topup 20% T", "Umoney_App-Actions_Transfer t5", "Umoney_Followers_T5 new Transf", "Umoney_Followers_t5 video new ", "Umoney_App-Actions_Transfer t5", "Umoney_Followers_T5 Transfer N", "Umoney KYC app google play Tra"];
const CAMP_INSTALLS = [902, 7433, 0, 0, 0, 242, 554, 0, 222, 32, 1644, 0, 0, 186, 627, 1048, 844, 120, 88, 19, 17, 224, 252, 61, 378, 726];

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
