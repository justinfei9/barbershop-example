import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES, BARBERS } from '../constants';
import { ChevronRight, ChevronLeft, CheckCircle2, Calendar, User, ShoppingBag, Send } from 'lucide-react';

const BookingForm: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: '',
    barberId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const selectedService = SERVICES.find(s => s.id === formData.serviceId)?.name || 'Unknown';
    const selectedBarber = BARBERS.find(b => b.id === formData.barberId)?.name || 'Unknown';

    const submissionData = new FormData();
    // Pulling the key from Environment Variables
    submissionData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    submissionData.append("subject", `New Appointment: ${formData.name}`);
    submissionData.append("from_name", "Barbershop Booking");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("service", selectedService);
    submissionData.append("barber", selectedBarber);
    submissionData.append("date", formData.date);
    submissionData.append("time", formData.time);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-md w-full bg-zinc-50 dark:bg-zinc-900 p-12 text-center rounded-lg border border-zinc-200 dark:border-zinc-800 animate-in zoom-in-95 duration-500 shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4 text-zinc-900 dark:text-zinc-100">Booking Confirmed!</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Thanks {formData.name}! We've received your request for {formData.date} at {formData.time}. We'll see you soon!
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-indigo-900 dark:bg-amber-600 text-white dark:text-zinc-950 font-bold p-4 rounded-sm hover:bg-indigo-800 dark:hover:bg-amber-700 transition-all uppercase tracking-widest shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 tracking-tight uppercase text-zinc-900 dark:text-zinc-100">
            Reserve Your <span className="text-indigo-900 dark:text-amber-600 transition-colors">Chair</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-500">Professional grooming at your fingertips.</p>
        </div>

        {/* Stepper Header */}
        <div className="flex justify-between items-center mb-12 max-w-lg mx-auto">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                step === s ? 'border-indigo-900 dark:border-amber-600 bg-indigo-900 dark:bg-amber-600 text-white dark:text-zinc-950 font-bold' : 
                step > s ? 'border-indigo-900 dark:border-amber-600 bg-indigo-900/10 dark:bg-amber-600/20 text-indigo-900 dark:text-amber-600' : 'border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600'
              }`}>
                {step > s ? <CheckCircle2 size={18} /> : s}
              </div>
              <span className={`text-[10px] uppercase tracking-widest font-bold ${step >= s ? 'text-zinc-900 dark:text-zinc-200' : 'text-zinc-400 dark:text-zinc-600'}`}>
                {s === 1 ? 'Service' : s === 2 ? 'Barber' : s === 3 ? 'Time' : 'Contact'}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden shadow-xl">
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            
            {step === 1 && (
              <div className="animate-in fade-in duration-500 slide-in-from-right-4">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                  <ShoppingBag size={24} className="text-indigo-900 dark:text-amber-600" />
                  Select a service
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {SERVICES.map((s) => (
                    <label 
                      key={s.id} 
                      className={`relative flex flex-col p-6 border-2 cursor-pointer rounded-sm transition-all shadow-sm ${
                        formData.serviceId === s.id ? 'border-indigo-900 dark:border-amber-600 bg-indigo-900/5 dark:bg-amber-600/5' : 'border-zinc-200 dark:border-zinc-800 hover:border-indigo-900 dark:hover:border-zinc-700 bg-white dark:bg-zinc-950'
                      }`}
                    >
                      <input 
                        type="radio" 
                        className="sr-only" 
                        name="service" 
                        checked={formData.serviceId === s.id}
                        onChange={() => setFormData({...formData, serviceId: s.id})}
                      />
                      <span className="text-lg font-bold mb-1 text-zinc-900 dark:text-zinc-100">{s.name}</span>
                      <span className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">{s.duration} min</span>
                      <span className="text-xl font-serif font-black text-indigo-900 dark:text-amber-600 mt-auto transition-colors">${s.price}</span>
                      {formData.serviceId === s.id && <CheckCircle2 className="absolute top-4 right-4 text-indigo-900 dark:text-amber-600 transition-colors" size={20} />}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in duration-500 slide-in-from-right-4">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                  <User size={24} className="text-indigo-900 dark:text-amber-600" />
                  Select a barber
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {BARBERS.map((b) => (
                    <label 
                      key={b.id} 
                      className={`relative flex flex-col items-center p-6 border-2 cursor-pointer rounded-sm text-center transition-all bg-white dark:bg-zinc-950 ${
                        formData.barberId === b.id ? 'border-indigo-900 dark:border-amber-600 bg-indigo-900/5 dark:bg-amber-600/5' : 'border-zinc-200 dark:border-zinc-800 hover:border-indigo-900 dark:hover:border-zinc-700'
                      }`}
                    >
                      <input 
                        type="radio" 
                        className="sr-only" 
                        name="barber" 
                        checked={formData.barberId === b.id}
                        onChange={() => setFormData({...formData, barberId: b.id})}
                      />
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-zinc-200 dark:border-zinc-800 shadow-md">
                        <img src={b.image} alt={b.name} className="w-full h-full object-cover dark:grayscale transition-all duration-700" />
                      </div>
                      <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{b.name}</span>
                      <span className="text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-widest mt-1">{b.role}</span>
                      {formData.barberId === b.id && <CheckCircle2 className="absolute top-4 right-4 text-indigo-900 dark:text-amber-600 transition-colors" size={20} />}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in duration-500 slide-in-from-right-4">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                  <Calendar size={24} className="text-indigo-900 dark:text-amber-600" />
                  Choose a time
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <label className="block text-zinc-600 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Select Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 border p-4 rounded-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-indigo-900 dark:focus:border-amber-600 transition-colors shadow-sm"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-600 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Select Time Slot</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(t => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({...formData, time: t})}
                          className={`p-3 text-sm rounded-sm transition-all border shadow-sm ${
                            formData.time === t ? 'bg-indigo-900 dark:bg-amber-600 border-indigo-900 dark:border-amber-600 text-white dark:text-zinc-950 font-bold' : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-indigo-900 dark:hover:border-zinc-500'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in duration-500 slide-in-from-right-4">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                  <Send size={24} className="text-indigo-900 dark:text-amber-600" />
                  Contact Info
                </h3>
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zinc-600 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 border p-4 rounded-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-indigo-900 dark:focus:border-amber-600 transition-colors shadow-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-600 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Phone</label>
                      <input 
                        type="tel" 
                        placeholder="(555) 000-0000"
                        className="w-full bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 border p-4 rounded-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-indigo-900 dark:focus:border-amber-600 transition-colors shadow-sm"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-600 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 border p-4 rounded-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-indigo-900 dark:focus:border-amber-600 transition-colors shadow-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white/50 dark:bg-zinc-950/50 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-inner">
                  <h4 className="text-indigo-900 dark:text-amber-600 font-bold uppercase tracking-widest text-xs mb-4">Summary</h4>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <span className="text-zinc-500">Service:</span>
                    <span className="text-zinc-900 dark:text-zinc-100 font-bold">{SERVICES.find(s => s.id === formData.serviceId)?.name || 'None'}</span>
                    <span className="text-zinc-500">Barber:</span>
                    <span className="text-zinc-900 dark:text-zinc-100 font-bold">{BARBERS.find(b => b.id === formData.barberId)?.name || 'None'}</span>
                    <span className="text-zinc-500">Appointment:</span>
                    <span className="text-zinc-900 dark:text-zinc-100 font-bold">{formData.date} at {formData.time}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              {step > 1 && (
                <button type="button" onClick={handleBack} className="flex items-center gap-2 text-zinc-400 hover:text-indigo-900 dark:hover:text-amber-600 font-bold uppercase tracking-widest text-sm transition-colors">
                  <ChevronLeft size={20} /> Back
                </button>
              )}
              <div className="ml-auto">
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={(step === 1 && !formData.serviceId) || (step === 2 && !formData.barberId) || (step === 3 && (!formData.date || !formData.time))}
                    className="flex items-center gap-2 bg-indigo-900 dark:bg-amber-600 hover:bg-indigo-800 dark:hover:bg-amber-700 disabled:opacity-50 text-white dark:text-zinc-950 font-bold px-8 py-4 rounded-sm transition-all uppercase tracking-widest"
                  >
                    Continue <ChevronRight size={20} />
                  </button>
                ) : (
                  <div className="flex flex-col items-end">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email}
                      className="flex items-center gap-2 bg-indigo-900 dark:bg-amber-600 hover:bg-indigo-800 dark:hover:bg-amber-700 disabled:opacity-50 text-white dark:text-zinc-950 font-bold px-10 py-4 rounded-sm transition-all uppercase tracking-widest shadow-xl"
                    >
                      {isSubmitting ? 'Sending...' : 'Book Appointment'}
                    </button>
                    {errorMessage && <p className="text-red-500 text-xs mt-2">{errorMessage}</p>}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;