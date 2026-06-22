/* Javascript for Umoney Ads Dashboard */
const DAILY_DATES = ["2026-06-01", "2026-06-02", "2026-06-03", "2026-06-04", "2026-06-05", "2026-06-06", "2026-06-07", "2026-06-08", "2026-06-09", "2026-06-10", "2026-06-11", "2026-06-12", "2026-06-13", "2026-06-14", "2026-06-15", "2026-06-16", "2026-06-17", "2026-06-18", "2026-06-19", "2026-06-20", "2026-06-21", "2026-06-22"];
const DAILY_SPENDS = [1272.93, 883.95, 587.37, 320.77, 73.73, 577.97, 478.97, 428.46, 403.06, 345.47, 327.1, 297.13, 428.55, 366.49, 404.46, 452.6, 494.7, 489.53, 517.0, 554.13, 572.85, 228.74];
const DAILY_INSTALLS = [1309, 1053, 928, 382, 293, 205, 394, 493, 637, 461, 626, 781, 972, 801, 1008, 1113, 1180, 1054, 1030, 950, 983, 449];
const CAMP_NAMES = ["Umoney_App-Install-KYC_3_4_Apr", "Umoney_App-Install-KYC_app goo", "Umoney_Followers_T4_Apr", "Umoney_App-Actions_Saving INB_", "Umoney_App-Actions_buy data cl", "Umoney_App-Install-KYC_rmkt_Ma", "Umoney_Other_truyenthong  TT T", "Umoney_Followers_T5 new_May", "Umoney_App-Install-KYC_app goo", "Umoney_App-Actions_Transfer t5", "Umoney_App-Actions_Transfer  T", "Umoney_Followers_T5 new b2_May", "Umoney_Followers_T5 new post h", "Umoney_App-Install-KYC_app goo", "Umoney_App-Install-KYC_app goo", "Umoney_App-Actions_Transfer t5", "Umoney_App-Actions_Topup 20% T", "Umoney_App-Actions_Topup 20% T", "Umoney_App-Actions_Transfer t5", "Umoney_Followers_T5 new Transf", "Umoney_Followers_t5 video new ", "Umoney_App-Actions_Transfer t5", "Umoney_Followers_T5 Transfer N", "Umoney_App-Install-KYC_app goo", "Umoney_App-Actions_Saving_June", "Umoney_App-Action_Topup_June", "Umoney_App-Action_Buy-Data_Jun", "Umoney_App-Action_Transfer_Jun", "Umoney_KYC-App-Install_Install", "Umoney_KYC-App-Install_KYC_Jun", "Umoney_Other_TT _June", "Umoney_App-Install-KYC_ Google", "Umoney_App-Install-KYC_ Google"];
const CAMP_INSTALLS = [617, 716, 0, 0, 82, 487, 0, 7, 365, 0, 0, 179, 1240, 313, 282, 138, 0, 85, 222, 271, 760, 26, 851, 342, 77, 0, 213, 0, 6307, 374, 0, 1843, 1305];

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
