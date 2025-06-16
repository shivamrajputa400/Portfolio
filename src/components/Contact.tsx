import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="space-y-2 mb-12 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700">
          <Mail size={14} className="text-green-400 mr-2" />
          <span className="text-xs text-gray-300">Get In Touch</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Have a project in mind or want to discuss a potential collaboration? Feel free to reach out.
          I'm always open to new opportunities and challenges.
        </p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-gray-800 rounded-lg mr-4">
                  <Mail size={20} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Email</h4>
                  <a href="shivamrajputa400@gmail.com" className="text-green-400 hover:text-green-300">
                    shivamrajputa400@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-gray-800 rounded-lg mr-4">
                  <Phone size={20} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Phone</h4>
                  <a href="tel:+91 7055120143" className="text-green-400 hover:text-green-300">
                   +91 7055120143
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-gray-800 rounded-lg mr-4">
                  <MapPin size={20} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Location</h4>
                  <p className="text-gray-400">
                    Delhi(NCR)<br />
                    India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-gray-300 font-medium mb-3">Social Profiles</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/shivamrajputa400" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shivam-rajput-23a695201/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://x.com/shivamrajput500" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  aria-label="X Profile"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
            <p className="text-gray-400 mb-4">
              I'm currently available for freelance work and open to long-term opportunities.
              My typical response time is within 24 hours.
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Mon - Fri:</span>
                <span className="text-gray-400">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sat:</span>
                <span className="text-gray-400">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sun:</span>
                <span className="text-gray-400">Closed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-200 placeholder-gray-500"
                    placeholder="Shivam Rajput"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-200 placeholder-gray-500"
                    placeholder="shivamrajputa400@gmail.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-200 placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-200 placeholder-gray-500 resize-none"
                  placeholder="I'm interested in discussing a potential project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};