// Audio data configuration
const audioData = [
    {
        id: 0,
        text: "Những ngày này trời mưa nhiều khiến lòng buồn man mác. Chiếc laptop cũ cũng bắt đầu lag khiến công việc bị chậm trễ."
    },
    {
        id: 1,
        text: "Bảo hiểm hỗ trợ chín mươi phần trăm, bạn chỉ cần đóng mười phần trăm. Số tiền còn lại là năm trăm nghìn đồng."
    },
    {
        id: 2,
        text: "Mô hình này xử lý hơn một nghìn tỷ phép tính mỗi giây. Tốc độ xử lý đạt năm trăm teraflop trên mỗi chip."
    },
    {
        id: 3,
        text: "Cô ấy từ chối lời mời tham gia team một cách lịch sự. Mọi người đều hiểu và tôn trọng quyết định của cô."
    },
    {
        id: 4,
        text: "Nhiều người mắc chứng rối loạn ăn uống không thể kiểm soát được bản thân. Họ luôn cảm thấy áp lực về cân nặng."
    },
    {
        id: 5,
        text: "Chùm nho này trông thật tươi ngon, mình sẽ mua về để ăn vặt. Nhớ đăng ảnh lên story khoe với bạn bè nhé!"
    },
    {
        id: 6,
        text: "Hôm nay trời đẹp, có chút gió thổi nhẹ. Mình sẽ ra quán cà phê ngồi check mail và xem một vài clip ngắn."
    },
    {
        id: 7,
        text: "Chiếc vòng tay này là món quà từ thần tượng của tôi. Tôi luôn đeo nó khi đi dự tiệc để thêm tự tin."
    },
    {
        id: 8,
        text: "Để bảo vệ sức khỏe, quý vị nên tập thể dục đều đặn. Hãy bắt đầu với bài tập nhẹ như đi bộ mỗi ngày."
    },
    {
        id: 9,
        text: "Tôi đang sưu tập những chiếc laptop cũ để làm dự án. Mỗi lần tìm được một chiếc đẹp là tôi lại rất vui."
    }
];

// Model configurations - GIỮ NGUYÊN TÊN FOLDER
const models = [
    {
        name: "Ground Truth",
        folder: "Long_gt"
    },
    {
        name: "Neutral Long",
        folder: "Neutral_long"
    },
    {
        name: "North Female(Internal test)", 
        folder: "North_female"
    },
    {
        name: "ZH Siwei Female",
        folder: "ZH_Siwei_female"
    },
    {
        name: "ZH Houzhen Male",
        folder: "ZH_Houzhen_male"
    },
    {
        name: "Phung",
        folder: "Phung"
    },
];

// Cấu trúc dữ liệu cho nhiều bảng
const tableConfigs = [
    {
        id: "tts-comparison",
        title: "Audio Synthesis",
        description: "Audio model 1.0",
        audioData: [
            {
                id: 0,
                text: "Những ngày này trời mưa nhiều khiến lòng buồn man mác. Chiếc laptop cũ cũng bắt đầu lag khiến công việc bị chậm trễ."
            },
            {
                id: 1,
                text: "Bảo hiểm hỗ trợ chín mươi phần trăm, bạn chỉ cần đóng mười phần trăm. Số tiền còn lại là năm trăm nghìn đồng."
            },
            {
                id: 2,
                text: "Mô hình này xử lý hơn một nghìn tỷ phép tính mỗi giây. Tốc độ xử lý đạt năm trăm teraflop trên mỗi chip."
            },
            {
                id: 3,
                text: "Cô ấy từ chối lời mời tham gia team một cách lịch sự. Mọi người đều hiểu và tôn trọng quyết định của cô."
            },
            {
                id: 4,
                text: "Nhiều người mắc chứng rối loạn ăn uống không thể kiểm soát được bản thân. Họ luôn cảm thấy áp lực về cân nặng."
            },
            {
                id: 5,
                text: "Chùm nho này trông thật tươi ngon, mình sẽ mua về để ăn vặt. Nhớ đăng ảnh lên story khoe với bạn bè nhé!"
            },
            {
                id: 6,
                text: "Hôm nay trời đẹp, có chút gió thổi nhẹ. Mình sẽ ra quán cà phê ngồi check mail và xem một vài clip ngắn."
            },
            {
                id: 7,
                text: "Chiếc vòng tay này là món quà từ thần tượng của tôi. Tôi luôn đeo nó khi đi dự tiệc để thêm tự tin."
            },
            {
                id: 8,
                text: "Để bảo vệ sức khỏe, quý vị nên tập thể dục đều đặn. Hãy bắt đầu với bài tập nhẹ như đi bộ mỗi ngày."
            },
            {
                id: 9,
                text: "Tôi đang sưu tập những chiếc laptop cũ để làm dự án. Mỗi lần tìm được một chiếc đẹp là tôi lại rất vui."
            }
        ],
        models: [
            {
                name: "Ground Truth",
                folder: "Long_gt"
            },
            {
                name: "Neutral Long", 
                folder: "Neutral_long"
            },
            {
                name: "North Female(Internal test)", 
                folder: "North_female"
            },
            {
                name: "ZH Siwei Female",
                folder: "ZH_Siwei_female"
            },
            {
                name: "ZH Houzhen Male",
                folder: "ZH_Houzhen_male"
            },
            {
                name: "Phung",
                folder: "Phung"
            },
        ]
    },
    
    
    // {
    //     id: "voice-cloning",
    //     title: "Voice Cloning Comparison", 
    //     description: "Comparison of voice cloning models with different speakers.",
    //     audioData: [
    //         {
    //             id: 0,
    //             text: "Xin chào, tôi là giọng nói được nhân bản."
    //         },
    //         {
    //             id: 1, 
    //             text: "Công nghệ nhân bản giọng nói ngày càng phát triển."
    //         },
    //         {
    //             id: 2,
    //             text: "Tôi đang sưu tập những chiếc laptop cũ để làm dự án. Mỗi lần tìm được một chiếc đẹp là tôi lại rất vui."
    //         }
    //     ],
    //     models: [
    //         {
    //             name: "Original Voice",
    //             folder: "original_voice"
    //         },
    //         {
    //             name: "Cloned Voice A",
    //             folder: "cloned_a"
    //         },
    //         {
    //             name: "Cloned Voice B", 
    //             folder: "cloned_b"
    //         }
    //     ]
    // },
    // {
    //     id: "emotion-tts",
    //     title: "Emotion TTS Comparison",
    //     description: "Comparison of emotional speech synthesis models.",
    //     audioData: [
    //         {
    //             id: 0,
    //             text: "Tôi rất vui hôm nay!"
    //         },
    //         {
    //             id: 1,
    //             text: "Tôi cảm thấy buồn bã."
    //         }
    //     ],
    //     models: [
    //         {
    //             name: "Neutral",
    //             folder: "emotion_neutral"
    //         },
    //         {
    //             name: "Happy",
    //             folder: "emotion_happy"
    //         },
    //         {
    //             name: "Sad",
    //             folder: "emotion_sad"
    //         }
    //     ]
    // }
];

// DOM Elements
const comparisonTable = document.getElementById('comparisonTable');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderAllTables();
    setupEventListeners();
    setupAudioEvents();
    updateStats();
    // updateTableLayout(); 
});

function renderComparisonTable() {
    comparisonTable.innerHTML = '';
    
    audioData.forEach(audio => {
        const row = createComparisonRow(audio);
        comparisonTable.appendChild(row);
    });
}

function createComparisonRow(audio) {
    const row = document.createElement('tr');
    
    // Transcript column Ground Truth audio
    const transcriptCell = document.createElement('td');
    const transcriptDiv = document.createElement('div');
    transcriptDiv.className = 'transcript-text';
    transcriptDiv.textContent = audio.text;
    
    // Ground Truth audio 
    const groundTruthModel = models.find(m => m.name === "Ground Truth");
    if (groundTruthModel) {
        const audioPath = getAudioPath(groundTruthModel, audio.id);
        const audioPlayer = createAudioButton(groundTruthModel, audioPath, audio.text);
        audioPlayer.style.marginTop = '8px';
        
        transcriptCell.appendChild(transcriptDiv);
        transcriptCell.appendChild(audioPlayer);
    } else {
        transcriptCell.appendChild(transcriptDiv);
    }
    
    row.appendChild(transcriptCell);
    
    // Model columns 
    models.forEach(model => {
        if (model.name !== "Ground Truth") {
            const cell = document.createElement('td');
            const audioPath = getAudioPath(model, audio.id);
            const button = createAudioButton(model, audioPath, audio.text);
            cell.appendChild(button);
            row.appendChild(cell);
        }
    });
    
    return row;
}

function getAudioPath(model, id) {
    return `${model.folder}/audio_${id}.wav`;
}

function createAudioButton(model, audioPath, text) {
    const audio = document.createElement('audio');
    audio.src = audioPath;
    audio.controls = true;
    audio.preload = 'none';
    audio.style.width = '100%';
    audio.style.height = '30px';
    
    audio.title = `${model.name}`;
    
    return audio;
}

function setupAudioEvents() {
    document.addEventListener('play', function(e) {
        if (e.target.tagName === 'AUDIO') {
            const allAudios = document.querySelectorAll('audio');
            allAudios.forEach(audio => {
                if (audio !== e.target && !audio.paused) {
                    audio.pause();
                }
            });
        }
    }, true);
}

function setupEventListeners() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Stop all audio when page unloads
    window.addEventListener('beforeunload', function() {
        if (currentAudio) {
            currentAudio.pause();
        }
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const allAudios = document.querySelectorAll('audio');
        allAudios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }
});

function updateStats() {
    const totalSamplesElement = document.getElementById('totalSamples');
    const totalModelsElement = document.getElementById('totalModels');
    
    if (totalSamplesElement) {
        totalSamplesElement.textContent = audioData.length;
    }
    if (totalModelsElement) {
        totalModelsElement.textContent = models.length;
    }
}

function updateTableLayout() {
    const table = document.querySelector('.comparison-table');
    const modelCount = models.length;
    
    if (table) {
        const displayModelCount = modelCount - 1; // Don't count Ground Truth
        const transcriptWidth = 25; 
        const modelWidth = (100 - transcriptWidth) / displayModelCount;
        
        // Cập nhật CSS variables
        document.documentElement.style.setProperty('--model-count', displayModelCount);
        document.documentElement.style.setProperty('--model-width', `${modelWidth}%`);
        document.documentElement.style.setProperty('--transcript-width', `${transcriptWidth}%`);
        
        console.log(`Models: ${displayModelCount}, Transcript: ${transcriptWidth}%, Each Model: ${modelWidth}%`);
    }
    
    updateTableHeader();
}


function updateTableHeader() {
    const headerRow = document.querySelector('.comparison-table thead tr');
    if (headerRow) {
        const transcriptHeader = headerRow.querySelector('.transcript-col');
        headerRow.innerHTML = '';
        
        transcriptHeader.textContent = 'Transcript + Ground Truth';
        headerRow.appendChild(transcriptHeader);
        
        models.forEach(model => {
            if (model.name !== "Ground Truth") {
                const th = document.createElement('th');
                th.className = 'model-col';
                th.textContent = model.name;
                headerRow.appendChild(th);
            }
        });
    }
}

// Function create all tables automatically
function renderAllTables() {
    const demoSection = document.querySelector('.demo-section');
    
    tableConfigs.forEach((config, index) => {
        const tableContainer = document.createElement('div');
        tableContainer.className = 'table-section';
        tableContainer.innerHTML = `
            <h3><i class="fas fa-chart-bar"></i> ${config.title}</h3>
            <p>${config.description}</p>
            <div class="table-container">
                <table class="comparison-table" id="${config.id}">
                    <thead>
                        <tr>
                            <th class="transcript-col">Transcript + Ground Truth</th>
                            <!-- Headers sẽ được tạo tự động -->
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Rows sẽ được tạo tự động -->
                    </tbody>
                </table>
            </div>
        `;
        
        demoSection.appendChild(tableContainer);
        
        // Render table content
        renderTable(config);
    });
}

// Function render one table
function renderTable(config) {
    const table = document.getElementById(config.id);
    const tbody = table.querySelector('tbody');
    const headerRow = table.querySelector('thead tr');
    
    // Create header
    updateTableHeader(headerRow, config.models);
    
    // Create rows
    tbody.innerHTML = '';
    config.audioData.forEach(audio => {
        const row = createComparisonRow(audio, config.models);
        tbody.appendChild(row);
    });
    
    // Update layout
    updateTableLayout(table, config.models);
}
