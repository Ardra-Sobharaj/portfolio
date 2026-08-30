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

    console.log('Form data submitted:', formData);

    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5 text-[#6B1F2A]" />,
      label: 'Email',
      value: 'ardrasobharaj@gmail.com',
      href: 'mailto:ardrasobharaj@gmail.com',
    },
    {
      icon: <Linkedin className="w-5 h-5 text-[#6B1F2A]" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ardra-sobharaj',
      href: 'https://linkedin.com/in/ardra-sobharaj',
    },
    {
      icon: <Github className="w-5 h-5 text-[#6B1F2A]" />,
      label: 'GitHub',
      value: 'github.com/Ardra-Sobharaj',
      href: 'https://github.com/Ardra-Sobharaj',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#F5EFE6] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6B1F2A]">
            Get In Touch
          </h2>

          <p className="mt-4 text-[#6B1F2A]/70">
            I am always open to internship opportunities, research
            collaborations, or software discussions. Feel free to drop a
            message!
          </p>

          <div className="w-16 h-1 bg-[#6B1F2A] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form and Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6">

            <h3 className="text-2xl font-bold text-[#6B1F2A]">
              Let's connect
            </h3>

            <p className="text-[#6B1F2A]/70 leading-relaxed">
              If you have any questions or want to discuss internships,
              student opportunities, or programming concepts, reach out via
              the form or email/social links.
            </p>

            <div className="space-y-4 pt-4">
              {contactLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl border border-[#6B1F2A]/10 bg-[#FBF8F2] glass hover:border-[#6B1F2A]/30 hover:bg-[#6B1F2A]/5 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-[#6B1F2A]/10">
                    {link.icon}
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-[#6B1F2A]/50 uppercase tracking-wider">
                      {link.label}
                    </div>

                    <div className="text-sm sm:text-base font-bold text-[#6B1F2A]">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-[#6B1F2A]/10 bg-[#FBF8F2] glass">

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">

                <CheckCircle className="w-16 h-16 text-[#6B1F2A] mx-auto animate-bounce" />

                <h4 className="text-xl font-bold text-[#6B1F2A]">
                  Message Sent!
                </h4>

                <p className="text-[#6B1F2A]/70 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. I'll check my inbox and get back
                  to you as soon as possible.
                </p>

              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#6B1F2A] mb-2"
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
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-[#6B1F2A]/20 bg-[#F5EFE6] text-[#6B1F2A] placeholder-[#6B1F2A]/40 focus:outline-none focus:ring-2 focus:ring-[#6B1F2A]/30 focus:border-[#6B1F2A]/40 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#6B1F2A] mb-2"
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
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-[#6B1F2A]/20 bg-[#F5EFE6] text-[#6B1F2A] placeholder-[#6B1F2A]/40 focus:outline-none focus:ring-2 focus:ring-[#6B1F2A]/30 focus:border-[#6B1F2A]/40 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#6B1F2A] mb-2"
                  >
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
                    className="w-full px-4 py-3 rounded-lg border border-[#6B1F2A]/20 bg-[#F5EFE6] text-[#6B1F2A] placeholder-[#6B1F2A]/40 focus:outline-none focus:ring-2 focus:ring-[#6B1F2A]/30 focus:border-[#6B1F2A]/40 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#6B1F2A] text-white font-medium hover:bg-[#4A1720] transition-colors shadow-lg shadow-[#6B1F2A]/20 gap-2 cursor-pointer"
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
