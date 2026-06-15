import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate contact form submission
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5 text-cyan-500" />,
      label: 'Email',
      value: 'ardra.sobharaj@gmail.com',
      href: 'mailto:ardra.sobharaj@gmail.com',
    },
    {
      icon: <Linkedin className="w-5 h-5 text-blue-500" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ardra-sobharaj',
      href: 'https://linkedin.com/in/ardra-sobharaj',
    },
    {
      icon: <Github className="w-5 h-5 text-slate-800 dark:text-white" />,
      label: 'GitHub',
      value: 'github.com/Ardra-Sobharaj',
      href: 'https://github.com/Ardra-Sobharaj',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            I am always open to internship opportunities, research collaborations, or software discussions. Feel free to drop a message!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-cyan to-primary-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info cards (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Let's connect
            </h3>
            <p className="text-slate-650 dark:text-slate-300 leading-relaxed">
              If you have any questions or want to discuss internships, student opportunities, or programming concepts, reach out via the form or email/social links.
            </p>

            <div className="space-y-4 pt-4">
              {contactLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-light-card dark:bg-dark-card glass hover:border-slate-350 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {link.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-light-card dark:bg-dark-card glass">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Message Sent!
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. I'll check my inbox and get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe how we can work together..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-cyan to-cyan-500 text-white font-medium hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/20 gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
