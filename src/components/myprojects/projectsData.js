import anomaly_img from '../../assets/anomaly.jpg';
import obj_detection_img from '../../assets/object_detection.png';
import fungi_classification_img from '../../assets/fungi_classification.png';
import malware_img from '../../assets/malware.jpg';
import amazon_product_img from '../../assets/amazon_product.jpg';
import JGIPL from '../../assets/jgipl.png';
import rnn_img from '../../assets/rnn.jpg';
import LLM_img from '../../assets/LLM.jpg';
import agentic_rag_img from '../../assets/agentic_rag.jpg';
import ai_cv_gen from '../../assets/ai_cv_gen.png';

export const projectsData = [
  {
    id: 10,
    image: ai_cv_gen, 
    title: 'AI Cover Letter Chrome Extension',
    techStack: 'Vanilla JS, Flask, Playwright, LangChain, LangGraph, MongoDB, Docker',
    // duration: 'April 2024 – Present',
description: 'Built a Chrome Extension to generate AI-based cover letters from job URLs. Supports LinkedIn, Nuworks via web scraping and maximum carrier pages, with manual JD input fallback.',
    link: 'https://github.com/JayJajoo/CoverLetterGen', 
  },
  {
    id: 1,
    image: agentic_rag_img,
    title: 'Agentic RAG',
    techStack: 'LangGraph, LangChain, GPT-4.1, Streamlit, Render',
    // duration: 'Feb 2025 – May 2025',
    description: 'Built a LangGraph-based agentic RAG pipeline with dynamic query routing and 97% accuracy. Deployed scalable Streamlit QA app with optimized vector DB.',
    link: 'https://corrective-rag.onrender.com/',
  },
  {
    id: 2,
    image: LLM_img,
    title: 'PDF QA Answer Extractor using LLMs',
    techStack: 'Streamlit, LangChain, HuggingFace, FAISS',
    // duration: 'Jan 2025 – Apr 2025',
    description: 'Developed a Streamlit QA tool using LLMs to extract answers from PDFs. Enabled contextual interactions with chunked embeddings and memory chains.',
    link: 'https://github.com/JayJajoo/PDF-QNA-Extractor',
  },
  {
    id: 3,
    image: rnn_img,
    title: 'Spelling Correction & Next Word Prediction',
    techStack: 'Pytorch, Flask, React.js',
    // duration: 'Jan 2025 – Apr 2025',
    description: 'Created a real-time Flask-React spell corrector and next-word predictor. Trained on 6M+ samples with embeddings and smart suggestions.',
    link: 'https://github.com/JayJajoo/Spelling-Correction-and-Next-Word-Generation',
  },
  {
    id: 4,
    image: anomaly_img,
    title: 'Home Anomaly Detection',
    techStack: 'PyTorch, LSTM Autoencoder',
    // duration: 'Sept 2024 – Dec 2024',
    description: 'Built an LSTM Autoencoder for anomaly detection with a 0.016% error threshold. Compared Isolation Forest, DBSCAN, and optimized pipelines.',
    link: 'https://github.com/JayJajoo/IDMP-project',
  },
  {
    id: 5,
    image: obj_detection_img,
    title: 'Object Detection and 3D Coordinates Prediction',
    techStack: 'Python, MiDaS, YOLO',
    // duration: 'Sept 2024 – Dec 2024',
    description: 'Combined YOLOv8 and MiDaS to predict 3D coordinates for autonomous driving. Achieved high precision (mAP50: 0.9391, mAP50:90: 0.889).',
    link: 'https://github.com/JayJajoo/3D-dept-Estimation',
  },
  {
    id: 6,
    image: fungi_classification_img,
    title: 'Fungi Classification using Deep Learning',
    techStack: 'TensorFlow, VGG156, ResNet50, IncV3',
    // duration: 'Dec 2023 – May 2024',
    description: 'Trained ResNet-based classifier achieving 98.9% accuracy for fungal species. Published results in Springer’s IDBA 2024.',
    link: 'https://github.com/JayJajoo/Capstone-project',
  },
  {
    id: 7,
    image: malware_img,
    title: 'Metamorphic Malware Detection using RNNs',
    techStack: 'TensorFlow, LSTM, Bi-LSTM, GRU',
    // duration: 'Jan 2023 – Mar 2023',
    description: 'Built LSTM, Bi-LSTM, and GRU models for detecting metamorphic malware with 93.25% accuracy. Presented at IEEE ICDSNS 2023.',
    link: 'https://github.com/JayJajoo/Metamorphic-Malware-Detection',
  },
  {
    id: 8,
    image: amazon_product_img,
    title: 'Simplify Amazon',
    techStack: 'Express.js, React.js, Python',
    // duration: 'Jan 2023 – Mar 2023',
    description: 'Analyzed Amazon reviews with 91% sentiment accuracy and generated summaries via OpenAI. Visualized insights using D3.js and Chart.js.',
    link: 'https://www.linkedin.com/posts/jay-jajoo-64958b15a_collegeproject-proudstudent-careerdevelopment-activity-7033495603439419392-Bmu3?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 9,
    image: JGIPL,
    title: 'Jay Garments India Pvt. Ltd. E-Commerce Platform',
    techStack: 'MERN Stack',
    // duration: 'Dec 2023 - March 2024',
    description: 'Built a complete MERN eCommerce platform with cart, orders, checkout, and admin dashboard. Included GST logic, stock alerts, and analytics.',
    link: 'https://jgipl.netlify.app',
  },
];
