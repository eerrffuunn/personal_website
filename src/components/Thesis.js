import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-card-bg p-8 rounded-lg shadow-xl mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className={`text-lg ${isExpanded ? '' : 'max-h-48 overflow-hidden'}`}>
        {children}
      </div>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-accent hover:underline focus:outline-none"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </section>
  );
};

const Thesis = () => {
  return (
    <div className="container mx-auto px-4 py-24 text-primary">
      <h1 className="text-5xl font-bold mb-8 text-primary font-display">Music Generation Using Deep Learning Models</h1>
      
      <Section title="Abstract">
        <p className="mb-4">
          This thesis explores the intersection of artificial intelligence and music composition, focusing on the generation of melodies from lyrics using advanced deep learning techniques. Specifically, it investigates the capability of seq2seq transformer models to capture the emotional and creative depth of human-composed music, with a primary emphasis on converting lyrics into coherent and appealing melodies.
        </p>
        <p className="mb-4">
          The research addresses several key challenges in the field of AI-driven music generation, including the lack of aligned lyric-melody datasets, the complexity of musical structure representation, and the need for models that can understand both linguistic and musical contexts simultaneously.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Key Musical Elements:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Pitch: The highness or lowness of a sound, represented by MIDI note numbers (e.g., 60 for middle C)</li>
            <li>Duration: The length of time a note is played, often represented as fractions of a beat</li>
            <li>Rest: Periods of silence in music, crucial for rhythm and phrasing</li>
            <li>Melody: The sequence of notes that form the main tune of a piece of music</li>
          </ul>
        </div>
      </Section>

      <Section title="Methodology">
        <h3 className="text-2xl font-semibold mb-2">1. Data Collection and Preprocessing</h3>
        <p className="mb-4">
          The Lakh MIDI Dataset (LMD) served as the primary data source, focusing on the LMD-matched subset. A rigorous preprocessing pipeline was implemented:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Melody Extraction: Custom algorithm inspired by the Skyline method to identify the primary melody line from multi-track MIDI files.</li>
          <li>Lyric Tokenization: Using NLTK for breaking down lyrics into tokens and syllables, aligning with musical notes.</li>
          <li>Phoneme Analysis: Extraction of phonemes to improve the accuracy of lyric-to-melody mapping.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2">2. Model Architecture</h3>
        <p className="mb-4">
          A seq2seq transformer model was chosen for its effectiveness in handling sequential data:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Encoder: Processes lyrical input using Word2Vec embeddings.</li>
          <li>Self-Attention Mechanism: Weighs the importance of words in relation to each other.</li>
          <li>Decoder: Generates musical notes based on encoded lyrics.</li>
          <li>Multi-Head Attention: Captures complex relationships between lyrics and melody.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2">3. Training Process</h3>
        <p className="mb-4">
          Training was conducted on an NVIDIA A100 GPU over 15 epochs:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Batch Processing: Efficient memory usage and faster convergence.</li>
          <li>Loss Function: Mean Squared Error (MSE) for evaluating model performance.</li>
          <li>Backpropagation: Continuous weight updates to improve lyric-to-melody mapping.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2">4. Evaluation Framework</h3>
        <p className="mb-4">
          A comprehensive evaluation process was implemented:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Quantitative Analysis: Measuring pitch accuracy, duration prediction, and rest prediction.</li>
          <li>Qualitative Evaluation: Human assessment of harmony, rhythm, and emotional resonance.</li>
        </ul>
      </Section>

      <Section title="Key Findings and Results">
        <h3 className="text-2xl font-semibold mb-2">Quantitative Analysis</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Pitch Accuracy: 40.58%, particularly strong in the range of 64 to 75 MIDI notes</li>
          <li>Duration Prediction: 52.31% accuracy, excelling in quarter note prediction</li>
          <li>Rest Prediction: High accuracy at 70.88%</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2">Qualitative Evaluation</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Harmony and Rhythm: Positively rated by human evaluators</li>
          <li>Emotional Content: Capable of capturing basic emotional cues from lyrics</li>
          <li>Limitations: Lack of complexity in chord progressions and nuanced emotional expression</li>
        </ul>

        <p className="mb-4">
          The model demonstrated success in generating basic musical elements from lyrics, showing potential in AI-assisted music composition. However, limitations in capturing complex emotional nuances and advanced musical structures were observed.
        </p>
      </Section>

      <Section title="Challenges and Limitations">
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Dataset Complexity: Limited to Western music and 4/4 time signatures, restricting generalization</li>
          <li>Computational Intensity: High resource requirements for the seq2seq transformer model</li>
          <li>Emotional Depth: Struggles with translating complex emotional undertones into melodies</li>
          <li>Note Duration Prediction: Difficulties in accurately predicting longer note durations</li>
        </ul>
        <p>
          These challenges highlight areas for future improvement and research in AI-driven music composition.
        </p>
      </Section>

      <Section title="Conclusions and Future Work">
        <p className="mb-4">
          This research demonstrates the significant potential of deep learning in bridging natural language processing and music generation. While the model shows promise in basic melody generation, there are several avenues for future improvement:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Integration of advanced musical theory elements for richer compositions</li>
          <li>Development of interactive AI-human collaborative systems for music creation</li>
          <li>Expansion of the dataset to include diverse genres and non-Western musical structures</li>
          <li>Further research into capturing and expressing complex emotions in AI-generated music</li>
          <li>Exploration of techniques to improve duration prediction accuracy</li>
        </ul>
        <p>
          The future of AI in music composition looks promising, with potential applications in assisting human composers and pushing the boundaries of creative expression.
        </p>
      </Section>

      <Section title="Acknowledgements">
        <p className="mb-4">
          I extend my deepest gratitude to my supervisor, Dr. László Grad-Gyenge, for his invaluable guidance and support throughout this research. His expertise and insights were crucial in shaping the direction and depth of this study.
        </p>
        <p className="mb-4">
          I would also like to thank Budapest University of Technology and Economics for providing the resources and environment that made this project possible. The support of the faculty, staff, and my fellow students has been instrumental in the success of this research.
        </p>
        <p>
          Special thanks to the musicians and evaluators who contributed their time and expertise in assessing the generated melodies, providing crucial insights into the qualitative aspects of AI-generated music.
        </p>
      </Section>

      <div className="flex justify-center space-x-4 mt-8">
        <a href="/assets/pdfs/erfan_thesis.pdf" download className="bg-accent text-white py-3 px-6 rounded-full hover:bg-opacity-80 transition duration-300 text-lg">
          Download Full Thesis
        </a>
        <Link to="/" className="bg-transparent border border-accent text-accent py-3 px-6 rounded-full hover:bg-accent hover:text-white transition duration-300 text-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Thesis;