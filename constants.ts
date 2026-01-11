
import { Service, Barber, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Classic Haircut',
    price: 40,
    duration: 30,
    description: 'A standard precision haircut with a clean finish and styling.',
    category: 'Hair'
  },
  {
    id: 's2',
    name: 'Example Beard Trim',
    price: 25,
    duration: 20,
    description: 'Sample beard grooming and shaping service using standard oils.',
    category: 'Beard'
  },
  {
    id: 's3',
    name: 'Luxury Shave Demo',
    price: 50,
    duration: 45,
    description: 'Example of a traditional hot towel straight-razor shave experience.',
    category: 'Luxury'
  },
  {
    id: 's4',
    name: 'The Sample Combo',
    price: 75,
    duration: 60,
    description: 'Our most popular example package: Haircut and Beard Trim combination.',
    category: 'Combo'
  },
  {
    id: 's5',
    name: 'Basic Lineup',
    price: 20,
    duration: 15,
    description: 'Simple edge-up and neck shave example service.',
    category: 'Hair'
  },
  {
    id: 's6',
    name: 'Sample Gray Blend',
    price: 35,
    duration: 40,
    description: 'A demonstration of natural gray blending for a more youthful look.',
    category: 'Luxury'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'b1',
    name: 'Person 1',
    role: 'Senior Barber',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    specialty: 'Modern Textures'
  },
  {
    id: 'b2',
    name: 'Person 2',
    role: 'Style Consultant',
    image: 'https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    specialty: 'Classic Shaves'
  },
  {
    id: 'b3',
    name: 'Person 3',
    role: 'Junior Barber',
    image: 'https://images.pexels.com/photos/1893922/pexels-photo-1893922.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    specialty: 'Fades & Tapers'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Client 1',
    text: 'This is an example of a client review. The service at this sample shop was excellent and very professional.',
    rating: 5,
    date: '1 day ago'
  },
  {
    id: 't2',
    author: 'Client 2',
    text: 'Another example testimonial. I really enjoyed the atmosphere of this example barbershop template.',
    rating: 5,
    date: '3 days ago'
  },
  {
    id: 't3',
    author: 'Client 3',
    text: 'Great demonstration of a luxury shave. The website layout makes booking very easy.',
    rating: 5,
    date: '1 week ago'
  }
];

export const BUSINESS_INFO = {
  name: 'Example Barbershop',
  phone: '(555) 000-0000',
  address: '123 Example St, Suite 101, Sample City',
  email: 'info@example-barber.com',
  hours: {
    mon_fri: '9:00 AM - 6:00 PM',
    sat: '10:00 AM - 4:00 PM',
    sun: 'Closed'
  }
};
