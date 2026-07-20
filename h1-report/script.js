/* H1 2026 Dashboard — Umoney */
const MONTHLY_LABELS   = ["T1/2026", "T2/2026", "T3/2026", "T4/2026", "T5/2026", "T6/2026 (n\u1eeda \u0111\u1ea7u)"];
const MONTHLY_SPENDS   = [2475.19, 5743.72, 6485.1, 6389.9, 14351.94, 7196.41];
const MONTHLY_INSTALLS = [1768, 7203, 2653, 5817, 15619, 10343];
const MONTHLY_CLICKS   = [61193, 244365, 422928, 393674, 707642, 354926];
const CAMP_NAMES       = ["video Speaker u-money", "u-money Lucky Wheel", "Video Register 122025", "Happy new year 2026", "Lao Airline1 Hung 14/1", "23/1 Loa Umoney H\u01b0ng1", "23/1 Topup install", "23/1 QR Hung1", "23/1 Buy Data Hung", "24/1 Rebrand awareness Hung1", "28/1 Storyboard Awareness Hung", "29/1 Intro-game Conver Hung", "30/1 Rebrand Booth Comm Hung1", "30/1 Visa Communication Hung", "3/2 Game30/1 Conver Login Hung", "4/2 Split Bill4/2 Convertion Hung", "5/2 Lao Airline4/2 Com Hung", "6/2 Game Video5/2 Conversion Hung", "6/2 Game5/2 Communication Hung", "9/2 Split Bill6/2 Conversion Hung", "11/2 Reband Friendly6/2 Communicati", "11/2 Reband Friendly7/2 Communicati", "13/2 Saving9/2 Awareness Hung", "13/2 Topup2/2 Awareness Hung", "13/2 Data9/2 Awareness Hung", "16/2 live HPNY Communication Hung", "19/2 Topup 9%18/2 Conversion Hung", "19/2 KYC14/2 Conversion Hung", "20/2 HPNY19/2 Awareness Hung", "21/2 Speaker20/2 Lead Hung", "26/2 Dance24/2 Awareness Hung", "Umoney_Followers_2/3 Topup 20%23/2 ", "5/3 Lottery Game5/3 Reach Hung", "13/3 Speaker9/3 Conversion Hung", "23/3 Loca23/3 Reach Hung", "Umoney_App-Install-KYC_3_4_Apr", "Test android", "Umoney Speaker post1", "Umoney Speaker click", "Umoney_App-Install-KYC_TT t4_Apr", "Umoney_App-Install-KYC_app google p", "Umoney_App-Actions_Transfer b1 inb ", "Umoney Saving TT T4", "Umoney_App-Install-KYC_app ios  t4_", "Umoney phu  TT T4", "Umoney TET  TT T4", "Umoney_Followers_T4_Apr", "Umoney Top up TT T4", "Umoney Buy data TT T4", "Umoney FTTH TT T4", "Umoney Split Bill  TT T4", "Umoney Saving TT RMT", "Umoney_App-Actions_Saving INB_May", "Umoney Buy data click app T4", "Umoney_App-Actions_buy data click t", "Umoney_App-Install-KYC_rmkt_May", "Umoney_Other_truyenthong  TT T4", "Umoney_Followers_T5 new_May", "Umoney_App-Actions_buy data click t", "Umoney_App-Install-KYC_app google p", "Umoney_App-Actions_Transfer t5 clic", "Umoney_App-Actions_Transfer  TT T5 ", "Umoney_Followers_T5 new b2_May", "Umoney_Followers_T5 new post hinh_M", "Umoney_App-Install-KYC_app google p", "Umoney_App-Install-KYC_app google p", "Umoney_App-Actions_Transfer t5 vide", "Umoney_App-Actions_Topup 20% T5 suk", "Umoney_App-Actions_Topup 20% T5 cli", "Umoney_App-Actions_Transfer t5 vide", "Umoney_Followers_T5 new Transfer_Ma", "Umoney_App-Install-KYC_t5 video new", "Umoney_App-Actions_Transfer t5 vide", "Umoney_Followers_T5 Transfer No Fee", "Umoney_App-Install-KYC_app google p", "Umoney_App-Actions_Saving_June", "Umoney_App-Action_Topup_June", "Umoney_App-Action_Buy-Data_June", "Umoney_App-Action_Transfer_June", "Umoney_App-Install-KYC_Install_June", "Umoney_App-Install-KYC_KYC_June", "Umoney_Other_TT _June", "Umoney_App-Install-KYC_ Google Play", "Umoney_App-Install-KYC_ Google Play"];
const CAMP_INSTALLS    = [0, 0, 0, 0, 0, 153, 282, 449, 597, 0, 0, 353, 0, 0, 7044, 77, 0, 2582, 0, 68, 0, 0, 0, 0, 0, 0, 6, 13, 0, 0, 0, 0, 0, 0, 0, 1646, 6, 0, 0, 0, 13708, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 358, 1102, 0, 229, 32, 2009, 0, 0, 365, 1633, 1361, 1126, 258, 88, 103, 178, 495, 923, 87, 1052, 1068, 77, 0, 93, 0, 2560, 247, 0, 528, 441];

// Excel conversion metrics
const EX_DAILY_DATES   = ["T.01 (01/01-04/01)", "T.02 (05/01-11/01)", "T.03 (12/01-18/01)", "T.04 (19/01-25/01)", "T.05 (26/01-01/02)", "T.06 (02/02-08/02)", "T.07 (09/02-15/02)", "T.08 (16/02-22/02)", "T.09 (23/02-01/03)", "T.10 (02/03-08/03)", "T.11 (09/03-15/03)", "T.12 (16/03-22/03)", "T.13 (23/03-29/03)", "T.14 (30/03-05/04)", "T.15 (06/04-12/04)", "T.16 (13/04-19/04)", "T.17 (20/04-26/04)", "T.18 (27/04-03/05)", "T.19 (04/05-10/05)", "T.20 (11/05-17/05)", "T.21 (18/05-24/05)", "T.22 (25/05-31/05)", "T.23 (01/06-07/06)", "T.24 (08/06-14/06)", "T.25 (15/06)"];
const EX_DAILY_SPENDS  = [291.93, 499.46, 486.72, 477.06, 720.02, 578.88, 786.8600000000001, 1961.94, 2643.6100000000006, 1627.8700000000001, 1674.3500000000001, 1862.8000000000002, 832.7, 1124.63, 1333.53, 1980.7599999999998, 1472.41, 1316.1599999999999, 1911.8200000000002, 1946.69, 2500.27, 7415.38, 4195.6900000000005, 2596.26, 404.38];
const EX_DAILY_TOPUPS  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 1576, 9383, 9041, 8050, 972];
const EX_DAILY_BUYDATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 18, 967, 1065, 1273, 3286, 3431, 2651, 347];
const CPA_LABELS       = ["Th\u00e1ng 5/2026", "Th\u00e1ng 6/2026 (n\u1eeda \u0111\u1ea7u)"];
const CPA_CPIS         = [0.92, 0.7];
const CPA_TOPUPS       = [1.31, 0.4];
const CPA_BUYDATA      = [2.17, 1.12];

// Comparison tab weekly metrics
const IMPACT_WEEKLY_LABELS = ["T.01 (01/01-04/01)", "T.02 (05/01-11/01)", "T.03 (12/01-18/01)", "T.04 (19/01-25/01)", "T.05 (26/01-01/02)", "T.06 (02/02-08/02)", "T.07 (09/02-15/02)", "T.08 (16/02-22/02)", "T.09 (23/02-01/03)", "T.10 (02/03-08/03)", "T.11 (09/03-15/03)", "T.12 (16/03-22/03)", "T.13 (23/03-29/03)", "T.14 (30/03-05/04)", "T.15 (06/04-12/04)", "T.16 (13/04-19/04)", "T.17 (20/04-26/04)", "T.18 (27/04-03/05)", "T.19 (04/05-10/05)", "T.20 (11/05-17/05)", "T.21 (18/05-24/05)", "T.22 (25/05-31/05)", "T.23 (01/06-07/06)", "T.24 (08/06-14/06)", "T.25 (15/06)"];
const IMPACT_WEEKLY_SPENDS = [291.93, 499.46, 486.72, 477.06, 720.02, 578.88, 786.8600000000001, 1961.94, 2643.6100000000006, 1627.8700000000001, 1674.3500000000001, 1862.8000000000002, 832.7, 1124.63, 1333.53, 1980.7599999999998, 1472.41, 1316.1599999999999, 1911.8200000000002, 1946.69, 2500.27, 7415.38, 4195.6900000000005, 2596.26, 404.38];
const IMPACT_WEEKLY_INSTALLS = [0, 0, 0, 1171, 597, 1584, 819, 2362, 2590, 997, 869, 440, 195, 0, 863, 1983, 1786, 2047, 2403, 2714, 3116, 6524, 4564, 4771, 1008];
const IMPACT_WEEKLY_REGISTERS = [1318, 2354, 2372, 2612, 3442, 3809, 3417, 4161, 4210, 2780, 2680, 2627, 3020, 3188, 3492, 2430, 3135, 3015, 2492, 2651, 3739, 4769, 4187, 4515, 824];
const IMPACT_WEEKLY_KYC = [191, 393, 375, 371, 375, 426, 454, 430, 470, 453, 413, 392, 439, 464, 422, 209, 367, 320, 355, 298, 315, 350, 311, 315, 52];
const IMPACT_WEEKLY_PSGD = [1741, 3102, 3153, 4357, 3899, 4284, 3992, 4390, 2337, 4586, 4650, 4043, 1681, 2902, 3774, 1515, 4770, 4666, 4615, 4124, 3947, 4028, 3110, 3496, 858];
const IMPACT_WEEKLY_MAUS = [61, 113, 152, 189, 27, 107, 154, 180, 28, 105, 136, 172, 204, 89, 142, 172, 205, 56, 116, 157, 192, 225, 102, 154, 161];
const IMPACT_WEEKLY_TOPUPS = [24, 45, 46, 43, 48, 46, 47, 44, 49, 48, 47, 49, 54, 52, 54, 39, 49, 46, 45, 45, 45, 49, 47, 50, 7];
const IMPACT_WEEKLY_BUYDATA = [7, 13, 13, 13, 14, 15, 15, 15, 17, 17, 17, 18, 19, 20, 19, 18, 18, 20, 19, 19, 19, 20, 20, 21, 3];

function switchTab(evt, tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}
function openLightbox(src) {
    document.getElementById('lightboxModal').style.display = 'block';
    document.getElementById('img01').src = src;
}
function closeLightbox() {
    document.getElementById('lightboxModal').style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
    // Monthly Spend Bar Chart
    const ctx1 = document.getElementById('monthlySpendChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: MONTHLY_LABELS,
            datasets: [
                {
                    label: 'Chi phí (USD)',
                    data: MONTHLY_SPENDS,
                    backgroundColor: 'rgba(255,102,0,0.8)',
                    borderColor: '#ff6600',
                    borderWidth: 1,
                    borderRadius: 6,
                    yAxisID: 'y'
                },
                {
                    label: 'Lượt Cài đặt',
                    data: MONTHLY_INSTALLS,
                    type: 'line',
                    borderColor: '#10b981',
                    backgroundColor: 'transparent',
                    borderDash: [5,5],
                    tension: 0.3,
                    pointRadius: 5,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            interaction: { mode: 'index', intersect: false },
            scales: {
                y: {
                    type: 'linear', position: 'left',
                    grid: { color: '#f1f5f9' },
                    ticks: { color: '#64748b', callback: v => '$' + v.toLocaleString() }
                },
                y1: {
                    type: 'linear', position: 'right',
                    grid: { drawOnChartArea: false },
                    ticks: { color: '#10b981' }
                },
                x: { grid: { color: '#f1f5f9' }, ticks: { color: '#64748b' } }
            },
            plugins: { legend: { labels: { color: '#0f172a' } } }
        }
    });

    // Campaign Install Doughnut
    const ctx2 = document.getElementById('installShareChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: CAMP_NAMES,
            datasets: [{
                label: 'Lượt tải',
                data: CAMP_INSTALLS,
                backgroundColor: [
                    '#ff6600','#f97316','#fb923c','#fdba74','#10b981',
                    '#3b82f6','#ec4899','#06b6d4','#14b8a6','#84cc16'
                ],
                borderWidth: 1, borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } }
        }
    });

    // Weekly Transaction and Spend Chart
    if (EX_DAILY_DATES && EX_DAILY_DATES.length > 0) {
        const ctx3 = document.getElementById('dailyTransactionChart').getContext('2d');
        new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: EX_DAILY_DATES,
                datasets: [
                    {
                        label: 'Topup Success (Lượt)',
                        data: EX_DAILY_TOPUPS,
                        backgroundColor: 'rgba(16, 185, 129, 0.7)',
                        borderColor: '#10b981',
                        borderWidth: 1,
                        borderRadius: 4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Buy Data Success (Lượt)',
                        data: EX_DAILY_BUYDATA,
                        backgroundColor: 'rgba(59, 130, 246, 0.7)',
                        borderColor: '#3b82f6',
                        borderWidth: 1,
                        borderRadius: 4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Chi phí (USD)',
                        data: EX_DAILY_SPENDS,
                        type: 'line',
                        borderColor: '#ff6600',
                        backgroundColor: 'transparent',
                        tension: 0.2,
                        pointRadius: 2,
                        borderWidth: 2,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: { mode: 'index', intersect: false },
                scales: {
                    y: {
                        type: 'linear', position: 'left',
                        grid: { color: '#f1f5f9' },
                        ticks: { color: '#64748b' },
                        title: { display: true, text: 'Số lượng giao dịch (lượt)', color: '#64748b' }
                    },
                    y1: {
                        type: 'linear', position: 'right',
                        grid: { drawOnChartArea: false },
                        ticks: { color: '#ff6600', callback: v => '$' + v.toLocaleString() },
                        title: { display: true, text: 'Chi phí quảng cáo (USD)', color: '#ff6600' }
                    },
                    x: { 
                        grid: { display: false }, 
                        ticks: { color: '#64748b', maxRotation: 45, minRotation: 45 } 
                    }
                },
                plugins: { legend: { position: 'top', labels: { color: '#0f172a' } } }
            }
        });
    }

    // Monthly CPA Comparison Chart
    if (CPA_LABELS && CPA_LABELS.length > 0) {
        const ctx4 = document.getElementById('cpaComparisonChart').getContext('2d');
        new Chart(ctx4, {
            type: 'bar',
            data: {
                labels: CPA_LABELS,
                datasets: [
                    {
                        label: 'CPI (Lượt tải)',
                        data: CPA_CPIS,
                        backgroundColor: '#10b981',
                        borderRadius: 6,
                    },
                    {
                        label: 'CPA Topup',
                        data: CPA_TOPUPS,
                        backgroundColor: '#ff6600',
                        borderRadius: 6,
                    },
                    {
                        label: 'CPA Buy Data',
                        data: CPA_BUYDATA,
                        backgroundColor: '#3b82f6',
                        borderRadius: 6,
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        grid: { color: '#f1f5f9' },
                        ticks: { color: '#64748b', callback: v => '$' + v.toFixed(2) },
                        title: { display: true, text: 'Chi phí trên mỗi hành động (USD)', color: '#64748b' }
                    },
                    x: { grid: { display: false }, ticks: { color: '#64748b' } }
                },
                plugins: { legend: { position: 'top', labels: { color: '#0f172a' } } }
            }
        });
    }

    // Weekly Correlation Chart (Spend vs. Installs & Registers)
    if (IMPACT_WEEKLY_LABELS && IMPACT_WEEKLY_LABELS.length > 0) {
        const ctxWeeklyCorr = document.getElementById('weeklyCorrelationChart').getContext('2d');
        new Chart(ctxWeeklyCorr, {
            type: 'line',
            data: {
                labels: IMPACT_WEEKLY_LABELS,
                datasets: [
                    {
                        label: 'App Install',
                        data: IMPACT_WEEKLY_INSTALLS,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.05)',
                        yAxisID: 'y',
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 3
                    },
                    {
                        label: 'Register',
                        data: IMPACT_WEEKLY_REGISTERS,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.05)',
                        yAxisID: 'y',
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 3
                    },
                    {
                        label: 'Amount Spent',
                        data: IMPACT_WEEKLY_SPENDS,
                        borderColor: '#ff6600',
                        backgroundColor: 'transparent',
                        borderDash: [5, 5],
                        yAxisID: 'y1',
                        tension: 0.3,
                        borderWidth: 2.5,
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: { mode: 'index', intersect: false },
                scales: {
                    y: {
                        type: 'linear', position: 'left',
                        grid: { color: '#f1f5f9' },
                        ticks: { color: '#64748b' },
                        title: { display: true, text: 'Số lượng (lượt)', color: '#64748b' }
                    },
                    y1: {
                        type: 'linear', position: 'right',
                        grid: { drawOnChartArea: false },
                        ticks: { color: '#ff6600', callback: v => '$' + v.toLocaleString() },
                        title: { display: true, text: 'Amount Spent (USD)', color: '#ff6600' }
                    },
                    x: { grid: { display: false }, ticks: { color: '#64748b', maxRotation: 45, minRotation: 45 } }
                },
                plugins: { legend: { position: 'top', labels: { color: '#0f172a' } } }
            }
        });

        // Weekly App Action Correlation Chart (Spend vs. Installs, Topups & Buy Data)
        const ctxWeeklyAction = document.getElementById('weeklyAppActionChart').getContext('2d');
        new Chart(ctxWeeklyAction, {
            type: 'line',
            data: {
                labels: IMPACT_WEEKLY_LABELS,
                datasets: [
                    {
                        label: 'App Install',
                        data: IMPACT_WEEKLY_INSTALLS,
                        borderColor: '#10b981',
                        backgroundColor: 'transparent',
                        yAxisID: 'y',
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 3
                    },
                    {
                        label: 'Số lượng Topup',
                        data: IMPACT_WEEKLY_TOPUPS,
                        borderColor: '#f59e0b',
                        backgroundColor: 'transparent',
                        yAxisID: 'y',
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 3
                    },
                    {
                        label: 'Số lượng Buy Data',
                        data: IMPACT_WEEKLY_BUYDATA,
                        borderColor: '#06b6d4',
                        backgroundColor: 'transparent',
                        yAxisID: 'y',
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 3
                    },
                    {
                        label: 'Amount Spent',
                        data: IMPACT_WEEKLY_SPENDS,
                        borderColor: '#ff6600',
                        backgroundColor: 'transparent',
                        borderDash: [5, 5],
                        yAxisID: 'y1',
                        tension: 0.3,
                        borderWidth: 2.5,
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: { mode: 'index', intersect: false },
                scales: {
                    y: {
                        type: 'linear', position: 'left',
                        grid: { color: '#f1f5f9' },
                        ticks: { color: '#64748b' },
                        title: { display: true, text: 'Số lượng hành động (lượt)', color: '#64748b' }
                    },
                    y1: {
                        type: 'linear', position: 'right',
                        grid: { drawOnChartArea: false },
                        ticks: { color: '#ff6600', callback: v => '$' + v.toLocaleString() },
                        title: { display: true, text: 'Amount Spent (USD)', color: '#ff6600' }
                    },
                    x: { grid: { display: false }, ticks: { color: '#64748b', maxRotation: 45, minRotation: 45 } }
                },
                plugins: { legend: { position: 'top', labels: { color: '#0f172a' } } }
            }
        });

        // Weekly MAU Growth vs. Spend & KYC Chart (Full Width)
        const ctxWeeklyMau = document.getElementById('weeklyMauChart').getContext('2d');
        new Chart(ctxWeeklyMau, {
            type: 'line',
            data: {
                labels: IMPACT_WEEKLY_LABELS,
                datasets: [
                    {
                        label: 'App Install',
                        data: IMPACT_WEEKLY_INSTALLS,
                        borderColor: '#10b981',
                        backgroundColor: 'transparent',
                        yAxisID: 'y',
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 3
                    },
                    {
                        label: 'New KYC Online',
                        data: IMPACT_WEEKLY_KYC,
                        borderColor: '#3b82f6',
                        backgroundColor: 'transparent',
                        yAxisID: 'y',
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 3
                    },
                    {
                        label: 'Amount Spent',
                        data: IMPACT_WEEKLY_SPENDS,
                        borderColor: '#ff6600',
                        backgroundColor: 'transparent',
                        yAxisID: 'y',
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 3
                    },
                    {
                        label: 'MAU',
                        data: IMPACT_WEEKLY_MAUS,
                        borderColor: '#ec4899',
                        backgroundColor: 'rgba(236, 72, 153, 0.05)',
                        yAxisID: 'y1',
                        tension: 0.3,
                        borderWidth: 3.5,
                        pointRadius: 4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: { mode: 'index', intersect: false },
                scales: {
                    y: {
                        type: 'linear', position: 'left',
                        grid: { color: '#f1f5f9' },
                        ticks: { color: '#64748b' },
                        title: { display: true, text: 'Amount Spent, Install & KYC', color: '#64748b' }
                    },
                    y1: {
                        type: 'linear', position: 'right',
                        grid: { drawOnChartArea: false },
                        ticks: { color: '#ec4899', callback: v => v.toLocaleString() },
                        title: { display: true, text: 'MAU', color: '#ec4899' }
                    },
                    x: { grid: { display: false }, ticks: { color: '#64748b', maxRotation: 45, minRotation: 45 } }
                },
                plugins: { legend: { position: 'top', labels: { color: '#0f172a' } } }
            }
        });
    }
});
