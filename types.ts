
export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
  category: 'Hair' | 'Beard' | 'Combo' | 'Luxury';
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
}

export interface BookingState {
  serviceId: string | null;
  barberId: string | null;
  date: string | null;
  time: string | null;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
}
