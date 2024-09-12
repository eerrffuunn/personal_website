import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import erfanImage from '../assets/images/erfan.png';
import bmelogo from '../assets/images/bme_logo.jpg';
import gdgLogo from '../assets/images/gdg.png';
import tumLogo from '../assets/images/tum.png';
import ContactForm from './ContactForm';

const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-display">
        {title}
      </h2>
      <div className={`${isExpanded ? 'max-h-full' : 'max-h-64 overflow-hidden'} md:max-h-full transition-all duration-500 ease-in-out relative`}>
        {children}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        )}
      </div>
      <button 
        className="md:hidden text-accent mt-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-background px-4 py-2 rounded-full shadow-md"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

const Home = () => {
  const observerRef = useRef(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.observe').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 md:py-32 text-primary">
      <section className="flex flex-col md:flex-row items-center mb-16 md:mb-32">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-80 h-80 mx-auto md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] mt-16">
            <img 
              src={erfanImage} 
              alt="Mohammaderfan Koupaei" 
              className="rounded-full w-full h-full object-cover shadow-lg observe"
              style={{ objectPosition: '30% 10%' }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary font-display observe">
            Mohammaderfan Koupaei
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-secondary observe">
            Software Engineering Graduate
          </p>
          <p className="text-lg md:text-xl mb-6 observe">
            Specializing in AI, machine learning, and visual computing solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={process.env.PUBLIC_URL + '/KouapeiCV.pdf'} 
              download="KouapeiCV.pdf"
              className="bg-accent text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300 text-center"
            >
              Download CV
            </a>
            <Link 
              to="/thesis" 
              className="bg-transparent border border-accent text-accent py-2 px-4 rounded-full hover:bg-accent hover:text-white transition duration-300 text-center"
            >
              View Thesis
            </Link>
          </div>
        </div>
      </section>

      <ExpandableSection title="About Me">
        <div className="bg-card-bg p-6 md:p-8 rounded-lg shadow-xl">
          <p className="text-lg mb-4">As a Computer Science Engineering graduate from <a href="https://www.bme.hu/?language=en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Budapest University of Technology and Economics (BME)</a>, I've developed a deep passion for pushing the boundaries of AI and machine learning. Under the mentorship of esteemed professor <a href="https://laszlo.grad-gyenge.com/#!/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Dr. László Grad-Gyenge</a>, I've honed my skills in visual computing, data science, and advanced machine learning techniques.</p>
          <p className="text-lg mb-4">My expertise lies in developing cutting-edge AI solutions that bridge the gap between theoretical research and practical applications. I'm particularly fascinated by the potential of deep learning in visual computing and its applications in fields such as computer vision, augmented reality, and generative AI.</p>
          <p className="text-lg">Driven by a relentless curiosity and a commitment to innovation, I'm dedicated to contributing to the next wave of AI advancements. My goal is to develop intelligent systems that not only process and analyze visual data but also understand and interact with the visual world in increasingly sophisticated ways.</p>
        </div>
      </ExpandableSection>

      <ExpandableSection title="Education">
        <div className="bg-card-bg p-6 md:p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center md:items-start">
          <img src={bmelogo} alt="BME Logo" className="w-24 h-24 mb-4 md:mb-0 md:mr-8" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Science Engineering</h3>
            <p className="text-xl mb-2">Budapest University of Technology and Economics (BME)</p>
            <p className="text-lg mb-2">2020 - 2024</p>
            <p className="text-lg">GPA: 4.2 / 5.0</p>
            <p className="text-lg mt-4">Specialization in Visual Computing, AI, and Machine Learning</p>
          </div>
        </div>
      </ExpandableSection>

      <section id="experience" className="mb-32 observe">
        <h2 className="text-4xl font-bold mb-8 text-primary font-display">Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent"></div>
          {[
            {
              title: 'AI Research Assistant',
              company: 'BME AI Lab',
              period: '2023 - Present',
              description: 'Conducting cutting-edge research in visual computing and deep learning. Developing novel algorithms for 3D scene understanding and reconstruction from 2D images. Implementing and optimizing state-of-the-art computer vision models using PyTorch and TensorFlow.'
            },
            {
              title: 'Machine Learning Engineer Intern',
              company: 'Tech Innovations Ltd.',
              period: 'Summer 2023',
              description: 'Collaborated on a project applying generative AI to create photorealistic 3D environments. Implemented and fine-tuned GANs for texture synthesis and style transfer in virtual environments. Contributed to the development of a real-time object detection system for autonomous drones.'
            },
            {
              title: 'Full Stack Developer',
              company: 'TimeTrack Gmbh',
              period: '2022 - 2023',
              description: 'Led the development of an AI-powered time tracking system, integrating computer vision algorithms for automatic activity recognition. Implemented a machine learning pipeline for predictive analytics, improving project time estimations by 30%. Spearheaded the migration to a microservices architecture, significantly enhancing system scalability and performance.'
            }
          ].map((job, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center mb-16`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <p className="text-xl text-secondary mb-2">{job.company}</p>
                <p className="text-lg">{job.period}</p>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
              </div>
              <div className="w-5/12">
                <p className="text-lg">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mb-32 observe">
        <h2 className="text-4xl font-bold mb-8 text-primary font-display">Key Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "AI-Powered Music Composer",
              description: "Developed a deep learning system that generates original musical compositions using advanced NLP and GPT models. This project formed the core of my thesis work.",
              link: "/thesis"
            },
            {
              title: "3D Scene Reconstruction from 2D Images",
              description: "Created an AI algorithm that reconstructs detailed 3D environments from a series of 2D photographs, with applications in virtual reality and urban planning.",
              link: "#"
            },
            {
              title: "Real-time Facial Expression Analysis",
              description: "Implemented a computer vision system that analyzes facial expressions in real-time, with potential applications in human-computer interaction and emotion recognition.",
              link: "#"
            },
            {
              title: "Generative Art Installation",
              description: "Designed and implemented an interactive art installation that uses GANs to create evolving, abstract visual art based on audience interaction.",
              link: "#"
            }
          ].map((project, index) => (
            <div key={index} className="bg-card-bg p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <Link to={project.link} className="text-accent hover:underline">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mb-32 observe">
        <h2 className="text-4xl font-bold mb-8 text-primary font-display">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Computer Vision', 'Deep Learning', 'Neural Networks', 'Data Science', 
            'Machine Learning', 'Python', 'PyTorch', 'TensorFlow',
            '3D Modeling', 'GANs', 'Natural Language Processing', 'Reinforcement Learning'
          ].map((skill, index) => (
            <div key={index} className="bg-card-bg p-6 rounded-lg shadow-md text-center hover:bg-accent hover:text-white transition-all duration-300 text-lg">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="thesis" className="mb-32 observe">
        <h2 className="text-4xl font-bold mb-8 text-primary font-display">Thesis Project</h2>
        <div className="bg-card-bg p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Music Generation using Deep Learning Models</h3>
          <p className="text-lg mb-4">My thesis explores the fascinating intersection of artificial intelligence and music composition, focusing on using seq2seq transformer models for generating melodies from lyrics. This project pushes the boundaries of AI applications in creative domains.</p>
          <p className="text-lg mb-6">Key aspects include the development of a custom MIDI dataset, implementation of advanced NLP techniques, and comprehensive evaluation of the model's musical output.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={process.env.PUBLIC_URL + '/erfan_thesis.pdf'}  download className="bg-accent text-white py-3 px-6 rounded-full hover:bg-opacity-80 transition duration-300 text-lg text-center">
              Download Thesis
            </a>
            <Link to="/thesis" className="bg-transparent border border-accent text-accent py-3 px-6 rounded-full hover:bg-accent hover:text-white transition duration-300 text-lg text-center">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section id="workshops" className="mb-32 observe">
        <h2 className="text-4xl font-bold mb-8 text-primary font-display">Workshops & Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card-bg p-6 rounded-lg shadow-xl flex items-center">
            <img src={gdgLogo} alt="GDG Budapest logo" className="w-16 h-16 mr-4 bg-gray-300 rounded-full" />
            <div>
              <h3 className="text-xl font-bold mb-2">Advanced Computer Vision Techniques</h3>
              <p className="text-lg text-secondary">GDG Budapest</p>
            </div>
          </div>
          <div className="bg-card-bg p-6 rounded-lg shadow-xl flex items-center">
            <img src={tumLogo} alt="TUM University logo" className="w-16 h-16 mr-4 bg-gray-300 rounded-full" />
            <div>
              <h3 className="text-xl font-bold mb-2">AUTOMOTIVE AND AEROSPACE DESIGN FOR CRASHWORTHINES</h3>
              <p className="text-lg text-secondary">TUM University</p>
            </div>
          </div>
        </div>
      </section>

      <section id="references" className="mb-32 observe">
        <h2 className="text-4xl font-bold mb-8 text-primary font-display">Professional References</h2>
        <div className="bg-card-bg p-8 rounded-lg shadow-xl">
          <p className="text-xl mb-6 font-semibold">I've had the privilege of working with and learning from exceptional professionals in the fields of AI, machine learning, and computer science. Their insights and guidance have been instrumental in shaping my research and career trajectory.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. László Grad-Gyenge",
                title: "Thesis Supervisor, BME University Budapest",
                quote: "Mohammaderfan demonstrates an exceptional ability to bridge theoretical concepts with practical applications in AI and machine learning.",
                website: "https://laszlo.grad-gyenge.com/#!/"
              },
              {
                name: "Dr. Mahmoud Ibrahim Azmi Darwish",
                title: "Professor, BME University Budapest",
                quote: "His innovative approach to problem-solving and deep understanding of complex algorithms set him apart as a rising talent in the field of AI."
              },
              {
                name: "Dr. Balla Katalin",
                title: "Software Technology Group, BME University Budapest",
                quote: "Mohammaderfan's work in visual computing showcases not only technical proficiency but also a keen eye for creative applications of AI.",
                website: "https://www.iit.bme.hu/users/dr-balla-katalin"
              },
              {
                name: "David Sik",
                title: "Mobile and Web-based Software Course Supervisor, BME",
                quote: "His ability to seamlessly integrate AI and machine learning concepts into practical software solutions is truly impressive.",
                website: "https://www.aut.bme.hu/Staff/siktdavid"
              },
              {
                name: "Mohammad Saleem",
                title: "Data-driven Programming Course Instructor, BME",
                quote: "Mohammaderfan's data science skills, combined with his machine learning expertise, position him as a valuable asset in any cutting-edge AI research team.",
                website: "https://www.aut.bme.hu/Staff/msaleem"
              }
            ].map((reference, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">
                  {reference.website ? (
                    <a href={reference.website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      {reference.name}
                    </a>
                  ) : (
                    reference.name
                  )}
                </h3>
                <p className="text-lg text-secondary mb-4">{reference.title}</p>
                <p className="text-lg italic">"{reference.quote}"</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg">For full letters of recommendation or to discuss my qualifications further, please don't hesitate to reach out.</p>
        </div>
      </section>

      <section id="contact" className="observe">
        <h2 className="text-4xl font-bold mb-8 text-primary font-display">Let's Connect</h2>
        <div className="bg-card-bg p-8 rounded-lg shadow-xl">
          <p className="text-xl mb-6">I'm always excited to explore new opportunities in AI, machine learning, and software engineering. Whether you're looking to collaborate on cutting-edge research, innovate in industry applications, or discuss the future of technology, I'd love to connect.</p>
          <button 
            onClick={() => setIsContactFormOpen(true)} 
            className="bg-accent text-white py-3 px-8 rounded-full hover:bg-opacity-80 transition duration-300 text-lg font-semibold"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {isContactFormOpen && (
        <ContactForm onClose={() => setIsContactFormOpen(false)} />
      )}
    </div>
  );
};

export default Home;