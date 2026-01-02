import ContactForm from '@/components/contact/Form';
import ContactInfo from '@/components/contact/Info';

export const metadata = {
  title: 'Contact | My Photography Portfolio',
  description: 'Get in touch with me for bookings and inquiries',
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
