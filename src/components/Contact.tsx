import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init('Ke_eb7YETRdgtG118')
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs.send(
      'service_mfo1wev',     // e.g. "service_xxx123"
      'template_9t21jh9',    // e.g. "template_abc456"
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      }
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Thank you for your message!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('Email failed to send:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Interested in working together? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:contact@example.com" 
                    className={`transition-colors ${
                      darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    raffiquemuir@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className={`transition-colors ${
                      darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    +1 (876) 854-6687
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${
                  darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    St.Andrew/Kingston, Jamaica 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                      darkMode 
                        ? 'bg-gray-800 border border-gray-700 text-white focus:ring-blue-500' 
                        : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-500'
                    }`}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                      darkMode 
                        ? 'bg-gray-800 border border-gray-700 text-white focus:ring-blue-500' 
                        : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-500'
                    }`}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label 
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                    darkMode 
                      ? 'bg-gray-800 border border-gray-700 text-white focus:ring-blue-500' 
                      : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-500'
                  }`}
                />
              </div>
              <div className="mb-6">
                <label 
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                    darkMode 
                      ? 'bg-gray-800 border border-gray-700 text-white focus:ring-blue-500' 
                      : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-500'
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;