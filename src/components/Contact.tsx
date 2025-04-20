import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    
    // Reset submission state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-pastel-blue/30 to-pastel-mint/30"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative">
            <span className="relative z-10">Contact Me</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-pastel-darkBlue rounded-full"></span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-pastel-darkBlue to-pastel-darkMint text-white p-8 md:p-12">
                  <h3 className="text-2xl font-heading font-bold mb-6">Get In Touch</h3>
                  <p className="mb-8 opacity-90">Have a question or want to work together? Feel free to contact me!</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-white/20 rounded-lg mr-4">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Email</h4>
                        <p className="opacity-90">alluriakshitha1788@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-white/20 rounded-lg mr-4">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Phone</h4>
                        <p className="opacity-90">8309194107</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-white/20 rounded-lg mr-4">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Location</h4>
                        <p className="opacity-90">Hyderabad, India</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">Send Me a Message</h3>
                  
                  {isSubmitted ? (
                    <div className="bg-pastel-mint/30 p-6 rounded-lg text-pastel-darkMint animate-fade-in">
                      <p className="font-medium">Thank you for your message!</p>
                      <p>I'll get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-darkBlue focus:border-transparent transition-colors duration-300"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-darkBlue focus:border-transparent transition-colors duration-300"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-darkBlue focus:border-transparent transition-colors duration-300"
                          placeholder="Subject"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-darkBlue focus:border-transparent transition-colors duration-300 resize-none"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-pastel-darkBlue hover:bg-pastel-blue text-white hover:text-gray-800 rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                      >
                        <Send size={18} />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;