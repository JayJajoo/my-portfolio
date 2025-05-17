import IMG1 from '../../assets/anomaly.jpg';
import IMG2 from '../../assets/object_detection.png';
import IMG3 from '../../assets/fungi_classification.png';
import IMG4 from '../../assets/malware.jpg';
import IMG5 from '../../assets/amazon_product.jpg';
import JGIPL from '../../assets/jgipl.png';
import IMG7 from '../../assets/rnn.jpg';
import IMG8 from '../../assets/LLM.jpg';
import IMG9 from '../../assets/agentic_rag.jpg';

export const projectsData = [
  {
    "id": 1,
    "image": IMG9,
    "title": "Agentic RAG",
    "techStack": "LangGraph, LangChain, GPT-4.1, Streamlit, Render",
    "duration": "Feb 2025 – May 2025",
    "responsibilities": [
      "Built an agentic RAG pipeline with LangGraph/LangChain to route queries via vector search, web search, or both using intent detection and relevancy scoring.",
      "Achieved 97% accuracy at $0.11/M tokens with GPT-4.1; deployed a scalable QA system on Streamlit/Render with unlimited file uploads and optimized vector DB."
    ],
    "link": "https://corrective-rag.onrender.com/"
  },
  {
    id: 2,
    image: IMG8,
    title: 'PDF QA Answer Extractor using LLMs',
    techStack: 'Streamlit, LangChain, HuggingFace, FAISS',
    duration: 'Jan 2025 – Apr 2025',
    responsibilities: [
      'Built a Streamlit-based QA system that uses LangChain, HuggingFace LLMs, and FAISS to extract and answer questions from uploaded PDF documents.',
      'Implemented document chunking, vector embeddings, and a conversational memory chain to enable context-aware interactions with unstructured text.'
    ],
    link: "https://github.com/JayJajoo/PDF-QNA-Extractor"
  },
  {
    id: 3,
    image: IMG7,
    title: 'Spelling Correction & Next Word Prediction',
    techStack: 'Pytorch, Flask, React.js',
    duration: 'Jan 2025 – Apr 2025',
    responsibilities: [
      'Developed a Flask-based API and React interface to perform real-time spelling correction using Levenshtein distance and custom word embeddings.',
      'Trained a next word prediction model on 6M+ context-output pairs using a Kaggle dataset, enhancing user input with smart text suggestions.'
    ],
    link: "https://github.com/JayJajoo/Spelling-Correction-and-Next-Word-Generation"
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    image: IMG5,
    title: 'Simplify Amazon',
    techStack: 'Express.js, React.js, Python',
    duration: 'Jan 2023 – Mar 2023',
    responsibilities: [
      'Automated sentiment analysis of Amazon product reviews using Logistic Regression (91% accuracy).',
      'Generated product summaries via OpenAI API and visualized data with Chart.js and D3.js.'
    ],
    link: "https://www.linkedin.com/posts/jay-jajoo-64958b15a_collegeproject-proudstudent-careerdevelopment-activity-7033495603439419392-Bmu3?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 9, // Incremented ID
    image: JGIPL || null, // Replace with actual image path or set to null if no image is available
    title: 'Jay Garments India Pvt. Ltd. E-Commerce Platform',
    techStack: 'MERN Stack',
    duration: 'Dec 2023 - March 2024', // Update this if you have a specific timeline
    responsibilities: [
      "Developed a full-featured e-commerce platform with user authentication, shopping cart, secure checkout, order management, and real-time stock updates.",
      "Built an admin dashboard with product and stock management, dynamic GST calculation, automated notifications, and data visualizations."
    ],
    link: "https://jgipl.netlify.app" // Temporary website link
  },
];