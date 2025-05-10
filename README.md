# 🚦 Smart Traffic Management System

<div align="center">
  
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.95+-green.svg)](https://fastapi.tiangolo.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.6.0-red.svg)](https://pytorch.org/)
[![CUDA](https://img.shields.io/badge/CUDA-11.8-brightgreen.svg)](https://developer.nvidia.com/cuda-toolkit)

<img src="https://via.placeholder.com/1200x400?text=Smart+Traffic+Management+System+Banner" alt="Smart Traffic Management System" width="100%"/>

### _Revolutionizing Urban Mobility with AI-Powered Traffic Solutions_

</div>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#key-features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#system-capabilities">Capabilities</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## 📋 Overview

The Smart Traffic Management System is an AI-powered solution designed to revolutionize urban traffic monitoring and control. By leveraging computer vision, machine learning, and IoT technologies, this system addresses critical challenges in modern urban transportation including congestion, violations, emergency response, and public safety.

The system consists of a FastAPI backend for processing video streams and traffic data, coupled with a React frontend for intuitive visualization and management. Our solution provides real-time insights and automated responses to traffic situations, creating safer and more efficient roadways.

## ✨ Key Features

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">

<div style="width: 48%; min-width: 300px; margin-bottom: 20px;">

### 🎥 Traffic Monitoring & Analysis

- **Multi-Camera Processing**: Handle multiple video streams simultaneously
- **Lane Detection**: Identify and track lane positions and occupancy
- **Speed Estimation**: Calculate vehicle speeds for flow analysis and violation detection
- **Traffic Statistics**: Generate comprehensive analytics on traffic patterns

<img src="https://via.placeholder.com/500x300?text=Traffic+Monitoring+Dashboard" alt="Traffic Monitoring Dashboard" width="100%"/>

</div>

<div style="width: 48%; min-width: 300px; margin-bottom: 20px;">

### 🚨 Safety & Emergency Features

- **Violation Detection**: Automatically identify traffic violations (speeding, wrong-way driving, etc.)
- **E-Challan Generation**: Create digital traffic tickets with evidence for violations
- **Emergency Vehicle Detection**: Prioritize routes for ambulances, fire trucks, and police vehicles
- **Women's Safety Module**: Audio-based distress detection system with emergency alerts

<img src="https://via.placeholder.com/500x300?text=Emergency+Response+System" alt="Emergency Response System" width="100%"/>

</div>

<div style="width: 48%; min-width: 300px; margin-bottom: 20px;">

### 🚥 Traffic Control

- **Intelligent Signal Control**: Optimize traffic signal timing based on real-time conditions
- **Congestion Management**: Identify and address traffic bottlenecks proactively
- **Emergency Mode**: Automatically adjust traffic flow during emergencies

<img src="https://via.placeholder.com/500x300?text=Smart+Signal+Control" alt="Smart Signal Control" width="100%"/>

</div>

<div style="width: 48%; min-width: 300px; margin-bottom: 20px;">

### ☁️ Cloud Integration

- **Firebase Storage**: Secure storage for violation evidence and traffic statistics
- **Real-time Updates**: Instant synchronization of data across the system
- **Violation Store**: Organized repository of traffic violations with metadata

<img src="https://via.placeholder.com/500x300?text=Cloud+Dashboard" alt="Cloud Dashboard" width="100%"/>

</div>

</div>

## 🎬 Demo

<div align="center">
  <img src="https://via.placeholder.com/800x450?text=Traffic+Detection+GIF" alt="Traffic Detection Demo" width="80%"/>
  <p><i>AI-powered traffic detection and tracking in action</i></p>
</div>

<div style="display: flex; justify-content: space-between; margin: 20px 0; flex-wrap: wrap;">
  <div style="width: 32%; min-width: 250px; margin-bottom: 15px;">
    <img src="https://via.placeholder.com/400x225?text=Lane+Detection" alt="Lane Detection" width="100%"/>
    <p align="center"><i>Lane Detection</i></p>
  </div>
  <div style="width: 32%; min-width: 250px; margin-bottom: 15px;">
    <img src="https://via.placeholder.com/400x225?text=Violation+Detection" alt="Violation Detection" width="100%"/>
    <p align="center"><i>Violation Detection</i></p>
  </div>
  <div style="width: 32%; min-width: 250px; margin-bottom: 15px;">
    <img src="https://via.placeholder.com/400x225?text=Dashboard+View" alt="Dashboard View" width="100%"/>
    <p align="center"><i>Analytics Dashboard</i></p>
  </div>
</div>

## 🏗️ Architecture

<div align="center">
  <img src="https://via.placeholder.com/1000x600?text=System+Architecture+Diagram" alt="System Architecture" width="80%"/>
</div>

The system follows a client-server architecture:

```
┌─────────────────────┐            ┌─────────────────────┐
│                     │            │                     │
│   React Frontend    │◄───────────┤    FastAPI Backend  │
│                     │    API     │                     │
└─────────────────────┘            └─────────────────────┘
        ▲                                    ▲
        │                                    │
        │                           ┌────────┴───────────┐
        │                           │                    │
        │                           │   Video Streams    │
        │                           │                    │
        │                           └────────────────────┘
        │                                    ▲
        │                                    │
┌───────┴───────────┐             ┌──────────┴─────────┐
│                   │             │                    │
│  Firebase Cloud   │             │  Traffic Cameras   │
│                   │             │                    │
└───────────────────┘             └────────────────────┘
```

## 🛠️ Technologies Used

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
  <div style="width: 48%; min-width: 300px; background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
    <h3>🧠 Backend</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
      <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"/>
      <img src="https://img.shields.io/badge/YOLOv5-00FFFF?style=for-the-badge&logo=yolo&logoColor=black" alt="YOLOv5"/>
      <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV"/>
      <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch"/>
      <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
      <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
      <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy"/>
      <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas"/>
    </div>
    <ul style="margin-top: 15px;">
      <li><strong>FastAPI</strong>: High-performance API framework</li>
      <li><strong>YOLOv5</strong>: Real-time object detection for vehicles and pedestrians</li>
      <li><strong>OpenCV</strong>: Computer vision processing of video streams</li>
      <li><strong>PyTorch</strong>: Deep learning framework with CUDA acceleration</li>
      <li><strong>Firebase Admin</strong>: Cloud integration for data storage and retrieval</li>
      <li><strong>Vosk</strong>: Audio processing for distress detection</li>
      <li><strong>FilterPy</strong>: Kalman filtering for object tracking</li>
      <li><strong>Pandas & NumPy</strong>: Data processing and analysis</li>
    </ul>
  </div>

  <div style="width: 48%; min-width: 300px; background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
    <h3>🎨 Frontend (Separate Repository)</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
      <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
      <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux"/>
      <img src="https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material UI"/>
      <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
      <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"/>
    </div>
    <ul style="margin-top: 15px;">
      <li><strong>React.js</strong>: User interface development</li>
      <li><strong>Redux</strong>: State management</li>
      <li><strong>Material-UI</strong>: Component library</li>
      <li><strong>Axios</strong>: API integration</li>
      <li><strong>React Router</strong>: Navigation</li>
    </ul>
  </div>
</div>

<div align="center">
  <img src="https://via.placeholder.com/1000x250?text=AI+Traffic+Analysis+GIF" alt="AI Traffic Analysis" width="80%"/>
  <p><i>AI processing in action: vehicle detection, tracking, and speed estimation</i></p>
</div>

## 🚀 Getting Started

<div align="center">
  <img src="https://via.placeholder.com/800x300?text=Installation+Process+Visualization" alt="Installation Process" width="80%"/>
</div>

### Prerequisites

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  <ul>
    <li>Python 3.8+</li>
    <li>CUDA-compatible GPU (recommended)</li>
    <li>Node.js and npm (for frontend)</li>
    <li>Camera feeds or video files for testing</li>
  </ul>
</div>

### Installation

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
  <div style="width: 49%; min-width: 300px; margin-bottom: 20px;">
    <h4>🔧 Backend Setup</h4>
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
      <ol>
        <li>Clone the repository:
          <pre style="background-color: #282c34; color: #abb2bf; padding: 10px; border-radius: 5px; overflow-x: auto;"><code>git clone https://github.com/mohitrawat061/Smart-Traffic-Management-System-Backend.git
cd Smart-Traffic-Management-System-Backend</code></pre>
        </li>
        <li>Create and activate a virtual environment:
          <pre style="background-color: #282c34; color: #abb2bf; padding: 10px; border-radius: 5px; overflow-x: auto;"><code>python -m venv venv
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate</code></pre>
        </li>
        <li>Install dependencies:
          <pre style="background-color: #282c34; color: #abb2bf; padding: 10px; border-radius: 5px; overflow-x: auto;"><code>pip install -r requirements.txt</code></pre>
        </li>
        <li>Install PyTorch with CUDA support:
          <pre style="background-color: #282c34; color: #abb2bf; padding: 10px; border-radius: 5px; overflow-x: auto;"><code>pip install torch==2.6.0+cu118 torchvision==0.21.0+cu118 torchaudio==2.6.0 --index-url https://download.pytorch.org/whl/cu118</code></pre>
        </li>
        <li>Configure Firebase:
          <ul>
            <li>Place your <code>serviceAccountKey.json</code> in the root directory</li>
            <li>Update Firebase configuration in <code>firebase_utils.py</code></li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
  
  <div style="width: 49%; min-width: 300px; margin-bottom: 20px;">
    <h4>🎨 Frontend Setup</h4>
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
      <ol>
        <li>Clone the frontend repository:
          <pre style="background-color: #282c34; color: #abb2bf; padding: 10px; border-radius: 5px; overflow-x: auto;"><code>git clone https://github.com/mohitrawat061/Smart-Traffic-Management-System-Frontend.git
cd Smart-Traffic-Management-System-Frontend</code></pre>
        </li>
        <li>Install dependencies:
          <pre style="background-color: #282c34; color: #abb2bf; padding: 10px; border-radius: 5px; overflow-x: auto;"><code>npm install</code></pre>
        </li>
      </ol>
    </div>
  </div>
</div>

### Running the System

<div style="display: flex; justify-content: space-between; flex-wrap: wrap; margin-top: 20px;">
  <div style="width: 49%; min-width: 300px; margin-bottom: 20px;">
    <h4>▶️ Start Backend</h4>
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
      <pre style="background-color: #282c34; color: #abb2bf; padding: 10px; border-radius: 5px; overflow-x: auto;"><code>uvicorn main:app --reload</code></pre>
      <p>The API will be available at <code>http://localhost:8000</code></p>
      <p>API Documentation: <code>http://localhost:8000/docs</code></p>
    </div>
  </div>
  
  <div style="width: 49%; min-width: 300px; margin-bottom: 20px;">
    <h4>▶️ Start Frontend</h4>
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
      <pre style="background-color: #282c34; color: #abb2bf; padding: 10px; border-radius: 5px; overflow-x: auto;"><code>npm start</code></pre>
      <p>The application will open in your browser at <code>http://localhost:3000</code></p>
    </div>
  </div>
</div>

<div align="center" style="margin-top: 30px;">
  <img src="https://via.placeholder.com/800x250?text=Application+Running+Example" alt="Application Running Example" width="80%"/>
  <p><i>The Smart Traffic Management System dashboard in action</i></p>
</div>

## 📁 Project Structure

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=Project+Structure+Visualization" alt="Project Structure" width="80%"/>
</div>

<div style="display: flex; justify-content: space-between; flex-wrap: wrap; margin-top: 30px;">
  <div style="width: 48%; min-width: 300px; background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
    <h3>📂 Backend Components</h3>
    <pre style="background-color: #282c34; color: #abb2bf; padding: 15px; border-radius: 5px; max-height: 400px; overflow-y: auto;">
smart-traffic-backend/
├── _pycache_/             # Python cache files
├── cameras/               # Camera configuration and management
├── e_challans/            # Electronic challan generation system
├── models/                # ML models for detection and analysis
├── snapshots/             # Violation snapshots storage
├── Dockerfile             # Container configuration
├── e_challan_generator.py # Challan creation module
├── emergency_alert.wav    # Emergency sound file
├── emergency_detector.py  # Emergency vehicle detection
├── firebase_utils.py      # Firebase integration utilities
├── lane_detection.py      # Lane identification module
├── main.py                # Application entry point
├── multi_camera_processor.py # Multi-stream processing
├── requirements.txt       # Python dependencies
├── safety_alert_api.py    # Safety alert system
├── serviceAccountKey.json # Firebase credentials
├── sort.py                # SORT tracking algorithm
├── speed_estimator.py     # Vehicle speed calculation
├── stats_manager.py       # Traffic statistics generation
├── traffic_api.py         # Traffic data API
├── traffic_signal_controller.py # Signal timing control
├── video_stream.py        # Video stream handling
├── violation_store.py     # Violation data management
├── women_safety_audio.py  # Women safety audio analysis
└── yolov5s.pt             # YOLOv5 model weights
    </pre>
  </div>

  <div style="width: 48%; min-width: 300px; margin-bottom: 20px;">
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
      <h3>🧠 Core ML Components</h3>
      <ul>
        <li><strong>YOLOv5</strong>: Object detection for vehicles, pedestrians, and traffic elements</li>
        <li><strong>SORT Algorithm</strong>: Multi-object tracking across video frames</li>
        <li><strong>Lane Detection</strong>: Computer vision-based lane identification</li>
        <li><strong>Speed Estimation</strong>: Calculates vehicle velocities using temporal data</li>
      </ul>
      <div align="center" style="margin-top: 15px;">
        <img src="https://via.placeholder.com/400x200?text=Core+ML+Components" alt="Core ML Components" width="100%"/>
      </div>
    </div>
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px;">
      <h3>🔧 Utility Components</h3>
      <ul>
        <li><strong>Firebase Utils</strong>: Cloud storage and database integration</li>
        <li><strong>E-Challan Generator</strong>: Creates digital traffic violation tickets</li>
        <li><strong>Safety Alert API</strong>: Emergency notification system</li>
        <li><strong>Stats Manager</strong>: Traffic data analytics and reporting</li>
        <li><strong>Women Safety Audio</strong>: Audio processing for distress detection</li>
      </ul>
      <div align="center" style="margin-top: 15px;">
        <img src="https://via.placeholder.com/400x200?text=Utility+Components" alt="Utility Components" width="100%"/>
      </div>
    </div>
  </div>
</div>

<div align="center" style="margin: 40px 0;">
  <img src="https://via.placeholder.com/1000x250?text=System+Integration+Diagram" alt="System Integration" width="80%"/>
  <p><i>System integration showing data flow between components</i></p>
</div>

## 📊 System Capabilities

<div align="center">
  <img src="https://via.placeholder.com/1000x300?text=System+Capabilities+Overview" alt="System Capabilities Overview" width="80%"/>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">

  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white;">
    <h3>🚗 Traffic Monitoring</h3>
    <ul>
      <li>Process multiple camera feeds simultaneously</li>
      <li>Detect and classify vehicles (cars, buses, trucks, motorcycles)</li>
      <li>Track individual vehicles across frames</li>
      <li>Estimate vehicle speeds and lane occupancy</li>
    </ul>
    <div align="center" style="margin-top: 15px;">
      <img src="https://via.placeholder.com/250x150?text=Traffic+Monitoring" alt="Traffic Monitoring" width="100%"/>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%); padding: 20px; border-radius: 10px; color: white;">
    <h3>🚫 Violation Detection</h3>
    <ul>
      <li>Speeding violations</li>
      <li>Red light violations</li>
      <li>Wrong-way driving</li>
      <li>Illegal lane changes</li>
      <li>Parking violations</li>
    </ul>
    <div align="center" style="margin-top: 15px;">
      <img src="https://via.placeholder.com/250x150?text=Violation+Detection" alt="Violation Detection" width="100%"/>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 20px; border-radius: 10px; color: white;">
    <h3>🛡️ Safety Features</h3>
    <ul>
      <li>Detect and analyze distress calls or screams</li>
      <li>Generate emergency alerts with location data</li>
      <li>Notify nearby authorities through the system</li>
      <li>Special focus on women's safety</li>
    </ul>
    <div align="center" style="margin-top: 15px;">
      <img src="https://via.placeholder.com/250x150?text=Safety+Features" alt="Safety Features" width="100%"/>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 10px; color: white;">
    <h3>📈 Analytics Dashboard</h3>
    <ul>
      <li>Heat maps of traffic congestion</li>
      <li>Daily, weekly, and monthly traffic reports</li>
      <li>Violation statistics by type and location</li>
      <li>Peak traffic time analysis</li>
    </ul>
    <div align="center" style="margin-top: 15px;">
      <img src="https://via.placeholder.com/250x150?text=Analytics+Dashboard" alt="Analytics Dashboard" width="100%"/>
    </div>
  </div>

</div>

<div align="center" style="margin-top: 40px;">
  <img src="https://via.placeholder.com/1000x250?text=Traffic+Flow+Optimization+GIF" alt="Traffic Flow Optimization" width="80%"/>
  <p><i>AI-powered traffic flow optimization in action</i></p>
</div>

## 🚀 Future Roadmap

<div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 30px 0;">
  <div style="text-align: center; width: 30%; min-width: 200px; margin-bottom: 20px;">
    <div style="font-size: 40px;">🤖</div>
    <h3>Advanced AI Models</h3>
    <p>Integration of more sophisticated models for prediction and analysis</p>
  </div>
  <div style="text-align: center; width: 30%; min-width: 200px; margin-bottom: 20px;">
    <div style="font-size: 40px;">🌐</div>
    <h3>City-wide Integration</h3>
    <p>Expanding to cover entire metropolitan areas</p>
  </div>
  <div style="text-align: center; width: 30%; min-width: 200px; margin-bottom: 20px;">
    <div style="font-size: 40px;">📱</div>
    <h3>Mobile Applications</h3>
    <p>Development of citizen-facing mobile apps for traffic updates</p>
  </div>
</div>

## 👥 Contributing

<div align="center">
  <img src="https://via.placeholder.com/800x250?text=Collaborative+Development" alt="Collaborative Development" width="70%"/>
</div>

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

<div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
  <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>
</div>

## 📞 Contact

<div style="display: flex; justify-content: center; align-items: center; margin: 30px 0; flex-wrap: wrap;">
  <img src="https://via.placeholder.com/150x150?text=MR" alt="Mohit Rawat" style="border-radius: 50%; margin-right: 30px;"/>
  <div>
    <h3>Mohit Rawat</h3>
    <p>Smart Traffic Systems Engineer</p>
    <p>
      <a href="https://github.com/mohitrawat061" target="_blank">GitHub</a> •
      <a href="mailto:example@example.com" target="_blank">Email</a> •
      <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
    </p>
  </div>
</div>

<div align="center">
  <p>Project Links:</p>
  <p>
    <a href="https://github.com/mohitrawat061/Smart-Traffic-Management-System-Backend" target="_blank">Backend Repository</a> •
    <a href="https://github.com/mohitrawat061/Smart-Traffic-Management-System-Frontend" target="_blank">Frontend Repository</a>
  </p>
</div>

---

<div align="center">
  <img src="https://via.placeholder.com/800x100?text=Smart+Traffic+Management" alt="Smart Traffic" width="80%"/>
  <p style="font-size: 18px; margin-top: 20px;">Built with ❤️ for smarter, safer cities</p>
  <p>© 2025 Mohit Rawat • All Rights Reserved</p>
</div>
