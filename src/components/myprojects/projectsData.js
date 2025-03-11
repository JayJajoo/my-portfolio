import IMG1 from '../../assets/anomaly.jpg';
import IMG2 from '../../assets/object_detection.png';
import IMG3 from '../../assets/fungi_classification.png';
import IMG4 from '../../assets/malware.jpg';
import IMG5 from '../../assets/amazon_product.jpg';


export const projectsData = [
  {
    id: 1,
    image: IMG1,
    title: 'Home Anomaly Detection',
    techStack: 'PyTorch, LSTM Autoencoder',
    duration: 'Sept 2024 – Dec 2024',
    responsibilities: [
      'Developed an LSTM Autoencoder model for anomaly detection, achieving a reconstruction error threshold of 0.016% at the 95th percentile.',
      'Evaluated multiple models (Isolation Forest, DBSCAN, LSTM) and optimized preprocessing pipelines.'
    ],
    link: "https://github.com/JayJajoo/IDMP-project"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Object Detection and 3D Coordinates Prediction',
    techStack: 'Python, MiDaS, YOLO',
    duration: 'Sept 2024 – Dec 2024',
    responsibilities: [
      'Integrated YOLOv8 for object detection and MiDaS for depth estimation, enabling real-time 3D perception for autonomous driving.',
      'Achieved optimal performance with YOLOv8 Medium (mAP50: 0.9391, mAP50:90: 0.889).'
    ],
    link: "https://github.com/JayJajoo/3D-dept-Estimation"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Fungi Classification using Deep Learning',
    techStack: 'TensorFlow, VGG156, ResNet50, IncV3',
    duration: 'Dec 2023 – May 2024',
    responsibilities: [
      'Engineered a ResNet-based deep learning model for fungal classification, achieving 98.90% accuracy.',
      'Published research in Springer’s IDBA 2024, receiving commendation for its innovative approach.'
    ],
    link: "https://github.com/JayJajoo/Capstone-project"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Metamorphic Malware Detection using RNNs',
    techStack: 'TensorFlow, LSTM, Bi-LSTM, GRU',
    duration: 'Jan 2023 – Mar 2023',
    responsibilities: [
      'Hyper-tuned RNN models (LSTM, Bi-LSTM, GRU) to detect metamorphic malware, achieving 93.25% accuracy.',
      'Presented findings at IEEE ICDSNS 2023, earning recognition for advancements in malware detection.'
    ],
    link: "https://github.com/JayJajoo/Metamorphic-Malware-Detection"
  },
  {
    id: 5,
    image: IMG5,
    title: 'Simplify Amazon',
    techStack: 'Express.js, React.js, Python',
    duration: 'Jan 2023 – Mar 2023',
    responsibilities: [
      'Automated sentiment analysis of Amazon product reviews using Logistic Regression (91% accuracy).',
      'Generated product summaries via OpenAI API and visualized data with Chart.js and D3.js.'
    ],
    link: "https://www.linkedin.com/posts/jay-jajoo-64958b15a_collegeproject-proudstudent-careerdevelopment-activity-7033495603439419392-Bmu3?utm_source=share&utm_medium=member_desktop"
  }
];