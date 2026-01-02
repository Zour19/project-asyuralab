'use client';

import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-8">
        {/* Phone */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Phone</h4>
          <a 
            href="tel:+1234567890"
            className="text-gray-700 hover:text-gray-900 text-lg"
          >
            +1 (234) 567-890
          </a>
        </div>

        {/* Email */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Email</h4>
          <a 
            href="mailto:hello@example.com"
            className="text-gray-700 hover:text-gray-900 text-lg break-all"
          >
            hello@example.com
          </a>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Location</h4>
          <p className="text-gray-700">
            City, Country
          </p>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
          <div className="text-gray-700 space-y-1">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
          <div className="flex space-x-6">
            <a 
              href="#"
              className="text-gray-700 hover:text-gray-900 transition text-2xl"
              aria-label="Instagram"
            >
              📷
            </a>
            <a 
              href="#"
              className="text-gray-700 hover:text-gray-900 transition text-2xl"
              aria-label="Facebook"
            >
              👍
            </a>
            <a 
              href="#"
              className="text-gray-700 hover:text-gray-900 transition text-2xl"
              aria-label="Twitter"
            >
              🐦
            </a>
            <a 
              href="#"
              className="text-gray-700 hover:text-gray-900 transition text-2xl"
              aria-label="LinkedIn"
            >
              💼
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
