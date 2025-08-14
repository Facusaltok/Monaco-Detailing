import React, { useState, useEffect } from 'react';
import { 
  Home as HomeIcon, 
  Car as CarIcon, 
  Truck as TruckIcon, 
  Motorcycle as MotorcycleIcon,
  Shield as ShieldIcon,
  PlayCircle as PlayIcon,
  Phone as PhoneIcon,
  MapPin as MapIcon,
  MessageCircle as MessageIcon,
  Instagram as InstagramIcon,
  ExternalLink as ExternalLinkIcon,
  CheckCircle as CheckIcon
} from 'lucide-react';

export default function MonacoDetailingSite() {
  const phone = "5491127469781";
  
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    vehicle: '',
    service: ''
  });

  // Servicios actualizados
  const services = {
    autos: [
      { 
        name: "Interior (Hatch / Sedan)", 
        desc: "Aspirado profundo, descontaminación del habitáculo y reacondicionamiento de plásticos.", 
        price: 150000, 
        time: "1 día",
        features: ["Aspirado profundo", "Descontaminación", "Reacondicionamiento"]
      },
      { 
        name: "Interior al Detalle (Hatch / Sedan)", 
        desc: "Desarme, aspirado profundo, limpieza de techo y tapizados, descontaminación y reacondicionamiento de plásticos.", 
        price: 250000, 
        time: "2-3 días",
        features: ["Desarme completo", "Limpieza de techo", "Descontaminación", "Reacondicionamiento"]
      },
      { 
        name: "Motor a Vapor (Hatch / Sedan)", 
        desc: "Limpieza técnica del vano motor a vapor.", 
        price: 100000, 
        time: "En el día",
        features: ["Limpieza técnica", "Protección de componentes", "Secado profesional"]
      },
      { 
        name: "Paquete Completo (Hatch / Sedan)", 
        desc: "Abrillantado + Interior + Motor a Vapor.", 
        price: 350000, 
        time: "2–3 días",
        features: ["Abrillantado profesional", "Interior completo", "Motor a vapor", "Protección final"]
      }
    ],
    suv: [
      { 
        name: "Interior (SUV / Pick-Up)", 
        desc: "Aspirado profundo, descontaminación del habitáculo y reacondicionamiento de plásticos.", 
        price: 200000, 
        time: "1 día",
        features: ["Aspirado profundo", "Descontaminación", "Reacondicionamiento"]
      },
      { 
        name: "Interior al Detalle (SUV / Pick-Up)", 
        desc: "Desarme, aspirado profundo, limpieza de techo y tapizados, descontaminación y reacondicionamiento de plásticos.", 
        price: 300000, 
        time: "2-3 días",
        features: ["Desarme completo", "Limpieza de techo", "Descontaminación", "Reacondicionamiento"]
      },
      { 
        name: "Motor a Vapor (SUV / Pick-Up)", 
        desc: "Limpieza técnica del vano motor a vapor.", 
        price: 130000, 
        time: "En el día",
        features: ["Limpieza técnica", "Protección de componentes", "Secado profesional"]
      },
      { 
        name: "Paquete Completo SUV / Pick-Up", 
        desc: "Abrillantado + Interior + Motor a Vapor.", 
        price: 450000, 
        time: "2–3 días",
        features: ["Abrillantado profesional", "Interior completo", "Motor a vapor", "Protección final"]
      }
    ],
    motos: [
      { 
        name: "Tratamiento Motos", 
        desc: "Lavado + descontaminación + reacondicionamiento de plásticos + lubricación de cadena + protección (Acrílico o Cerámico).", 
        price: "150.000 – 250.000", 
        time: "En el día",
        features: ["Lavado profesional", "Descontaminación", "Lubricación de cadena", "Protección"]
      }
    ]
  };

  // Tratamientos con detalles mejorados
  const tratamientos = [
    {
      grupo: "Autos (Hatch / Sedan)",
      icon: CarIcon,
      items: [
        { 
          name: "Acrílico", 
          detalle: "Duración 6 meses", 
          price: 300000,
          benefits: ["Brillo intenso", "Protección UV", "Resistencia a rayos"]
        },
        { 
          name: "Cerámico", 
          detalle: "Duración 1 año", 
          price: 400000,
          benefits: ["Protección superior", "Auto-limpieza", "Resistencia química"]
        },
        { 
          name: "Cerámico c/Grafeno", 
          detalle: "Duración 2 años", 
          price: 500000,
          benefits: ["Máxima protección", "Super hidrofóbico", "Durabilidad extrema"]
        }
      ]
    },
    {
      grupo: "Pick-Up / SUV",
      icon: TruckIcon,
      items: [
        { 
          name: "Acrílico", 
          detalle: "Duración 6 meses", 
          price: 400000,
          benefits: ["Brillo intenso", "Protección UV", "Resistencia a rayos"]
        },
        { 
          name: "Cerámico", 
          detalle: "Duración 1 año", 
          price: 500000,
          benefits: ["Protección superior", "Auto-limpieza", "Resistencia química"]
        },
        { 
          name: "Cerámico c/Grafeno", 
          detalle: "Duración 2 años", 
          price: 600000,
          benefits: ["Máxima protección", "Super hidrofóbico", "Durabilidad extrema"]
        }
      ]
    }
  ];

  // Videos de YouTube
  const videos = [
    { id: 'hmG6tQvjoa0', title: 'Resultado de Abrillantado', views: '12.5K' },
    { id: 'wWcvlO_A0Ew', title: 'Limpieza de Interior', views: '8.2K' },
    { id: 'bqqJszdkWN0', title: 'Tratamiento Cerámico', views: '15.7K' }
  ];

  // Helper functions
  const formatPrice = (value) => {
    if (typeof value === 'number') {
      return `$${value.toLocaleString('es-AR')}`;
    }
    return `$${value}`;
  };

  const sendMessage = (message) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `Hola Monaco Detailing, quiero reservar:\nNombre: ${formData.name}\nVehículo: ${formData.vehicle}\nServicio: ${formData.service}`;
    sendMessage(message);
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'servicios', 'tratamientos', 'videos', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation on mount
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Service Card Component
  const ServiceCard = ({ service, category }) => {
    const ServiceIcon = category === 'motos' ? MotorcycleIcon : 
                       category === 'suv' ? TruckIcon : CarIcon;

    return (
      <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-green-500/20 rounded-lg mr-3">
            <ServiceIcon className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white">{service.name}</h3>
        </div>
        
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.desc}</p>
        
        <div className="space-y-2 mb-4">
          {service.features && service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm">
              <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
              <span className="text-gray-400">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-green-400">{formatPrice(service.price)}</span>
          <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{service.time}</span>
        </div>

        <button
          onClick={() => sendMessage(`Hola Monaco Detailing, quiero reservar: ${service.name} (${formatPrice(service.price)}).`)}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <MessageIcon className="w-4 h-4" />
          <span>Reservar por WhatsApp</span>
        </button>
      </div>
    );
  };

  // Treatment Card Component
  const TreatmentCard = ({ treatment }) => {
    const Icon = treatment.icon;
    
    return (
      <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-green-500/20 rounded-lg mr-3">
            <Icon className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{treatment.grupo}</h3>
        </div>
        
        <div className="space-y-4">
          {treatment.items.map((item, idx) => (
            <div key={idx} className="border-t border-gray-700 pt-4 first:border-t-0 first:pt-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-white">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.detalle}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-400">{formatPrice(item.price)}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-3">
                {item.benefits.map((benefit, bidx) => (
                  <div key={bidx} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {benefit}
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => sendMessage(`Hola, me interesa el tratamiento ${item.name} (${treatment.grupo}) por ${formatPrice(item.price)}.`)}
                className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center"
              >
                <MessageIcon className="w-3 h-3 mr-1" />
                Consultar por WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Video Card Component
  const VideoCard = ({ video }) => {
    return (
      <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300">
        <div className="relative pb-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&controls=1`}
            title={video.title}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-green-500/90 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <PlayIcon className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-white font-semibold mb-1">{video.title}</h3>
          <p className="text-gray-400 text-sm">👁️ {video.views} vistas</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-green-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-green-400">
                <CarIcon className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                MONACO DETAILING
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Inicio', icon: HomeIcon },
                { id: 'servicios', label: 'Servicios', icon: CarIcon },
                { id: 'tratamientos', label: 'Tratamientos', icon: ShieldIcon },
                { id: 'videos', label: 'Videos', icon: PlayIcon },
                { id: 'contacto', label: 'Contacto', icon: PhoneIcon }
              ].map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                    activeSection === id 
                      ? 'text-green-400' 
                      : 'text-gray-300 hover:text-green-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <a
              href={`https://wa.me/${phone}?text=Hola%20Monaco%20Detailing%2C%20me%20gustaría%20agendar%20un%20turno.`}
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-black px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200"
            >
              <MessageIcon className="w-5 h-5" />
              <span>Agendar ahora</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: 'hero', label: 'Inicio', icon: HomeIcon },
                  { id: 'servicios', label: 'Servicios', icon: CarIcon },
                  { id: 'tratamientos', label: 'Tratamientos', icon: ShieldIcon },
                  { id: 'videos', label: 'Videos', icon: PlayIcon },
                  { id: 'contacto', label: 'Contacto', icon: PhoneIcon }
                ].map(({ id, label, icon: Icon }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-gray-300 hover:text-green-400 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </a>
                ))}
                <a
                  href={`https://wa.me/${phone}?text=Hola%20Monaco%20Detailing%2C%20me%20gustaría%20agendar%20un%20turno.`}
                  className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-black bg-gradient-to-r from-green-500 to-green-600 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200"
                >
                  <MessageIcon className="w-5 h-5" />
                  <span>Agendar ahora</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll opacity-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Monaco <span className="text-green-400">Detailing</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-green-400 mb-6">Detailing Premium</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Especialistas en estética vehicular: interior profundo, abrillantado, motor a vapor y tratamientos de protección.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <button
                onClick={() => sendMessage("Hola, quiero un turno para el paquete completo.")}
                className="bg-gradient-to-r from-green-500 to-green-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageIcon className="w-5 h-5" />
                <span>Reservar por WhatsApp</span>
              </button>
              <a
                href="#servicios"
                className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 hover:text-black transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <CarIcon className="w-5 h-5" />
                <span>Ver servicios</span>
              </a>
            </div>
            
            <div className="text-sm text-gray-400 bg-gray-900/50 rounded-lg p-4 max-w-md mx-auto backdrop-blur-sm border border-gray-800">
              <p><span className="font-semibold">Tiempos de servicio:</span> Motor: <b>En el día</b> • Interiores: <b>1 día</b> • Paquetes: <b>2–3 días</b></p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <CarIcon className="w-8 h-8 text-green-400 mr-3" />
              Servicios
            </h2>
            <p className="text-xl text-gray-300">Elegí tu categoría y reservá en un clic.</p>
          </div>

          {/* Autos */}
          <div className="mb-16 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center justify-center">
              <CarIcon className="w-6 h-6 mr-3" />
              Autos — Hatch / Sedan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.autos.map((service, index) => (
                <ServiceCard key={index} service={service} category="autos" />
              ))}
            </div>
          </div>

          {/* SUV/Pick-Up */}
          <div className="mb-16 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center justify-center">
              <TruckIcon className="w-6 h-6 mr-3" />
              SUV / Pick-Up
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.suv.map((service, index) => (
                <ServiceCard key={index} service={service} category="suv" />
              ))}
            </div>
          </div>

          {/* Motos */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center justify-center">
              <MotorcycleIcon className="w-6 h-6 mr-3" />
              Motos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.motos.map((service, index) => (
                <ServiceCard key={index} service={service} category="motos" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="tratamientos" className="py-16 bg-gray-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <ShieldIcon className="w-8 h-8 text-green-400 mr-3" />
              Tratamientos de Protección
            </h2>
            <p className="text-xl text-gray-300">Elegí el recubrimiento y la duración que necesitás.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tratamientos.map((treatment, index) => (
              <TreatmentCard key={index} treatment={treatment} />
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <PlayIcon className="w-8 h-8 text-green-400 mr-3" />
              Videos
            </h2>
            <p className="text-xl text-gray-300">Algunos trabajos y resultados recientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-gray-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
                  <PhoneIcon className="w-8 h-8 text-green-400 mr-3" />
                  Contacto
                </h2>
                <p className="text-xl text-gray-300">Escribinos y coordinamos tu turno.</p>
              </div>

              <div className="space-y-4 mb-8">
                <button
                  onClick={() => sendMessage("Hola Monaco Detailing, me gustaría agendar un turno.")}
                  className="flex items-center space-x-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-black p-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200"
                >
                  <MessageIcon className="w-6 h-6" />
                  <span className="font-semibold text-lg">WhatsApp directo</span>
                </button>
                
                <a
                  href="https://www.instagram.com/monacodetailing.arg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full border-2 border-green-500 text-green-400 p-4 rounded-xl hover:bg-green-500 hover:text-black transition-all duration-200"
                >
                  <InstagramIcon className="w-6 h-6" />
                  <span className="font-semibold text-lg">Instagram @monacodetailing.arg</span>
                </a>
              </div>

              <form onSubmit={handleFormSubmit} className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <CheckIcon className="w-6 h-6 text-green-400 mr-2" />
                  Reservá ahora
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Nombre</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Modelo del vehículo</label>
                    <input
                      type="text"
                      value={formData.vehicle}
                      onChange={(e) => updateFormData('vehicle', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                      placeholder="Ej: Toyota Corolla 2020"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Servicio o tratamiento</label>
                    <select
                      value={formData.service}
                      onChange={(e) => updateFormData('service', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                      required
                    >
                      <option value="">Elegí un servicio o tratamiento</option>
                      
                      <optgroup label="Servicios — Autos (Hatch / Sedan)">
                        {services.autos.map((s, i) => (
                          <option key={`oa-${i}`} value={`${s.name} — ${formatPrice(s.price)}`}>
                            {s.name} — {formatPrice(s.price)}
                          </option>
                        ))}
                      </optgroup>
                      
                      <optgroup label="Servicios — SUV / Pick-Up">
                        {services.suv.map((s, i) => (
                          <option key={`os-${i}`} value={`${s.name} — ${formatPrice(s.price)}`}>
                            {s.name} — {formatPrice(s.price)}
                          </option>
                        ))}
                      </optgroup>
                      
                      <optgroup label="Servicios — Motos">
                        {services.motos.map((s, i) => (
                          <option key={`om-${i}`} value={`${s.name} — ${formatPrice(s.price)}`}>
                            {s.name} — {formatPrice(s.price)}
                          </option>
                        ))}
                      </optgroup>
                      
                      <optgroup label="Tratamientos">
                        {tratamientos.flatMap((t, gi) =>
                          t.items.map((it, i) => (
                            <option key={`tr-${gi}-${i}`} value={`${it.name} (${t.grupo}) — ${formatPrice(it.price)}`}>
                              {it.name} ({t.grupo}) — {formatPrice(it.price)}
                            </option>
                          ))
                        )}
                      </optgroup>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <CheckIcon className="w-5 h-5" />
                    <span>Confirmar reserva</span>
                  </button>
                  
                  <p className="text-sm text-gray-400 text-center">
                    Tiempos: motor en el día; interiores 1 día; paquetes 2–3 días.
                  </p>
                </div>
              </form>
            </div>

            {/* Location */}
            <div className="animate-on-scroll opacity-0">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
                  <MapIcon className="w-8 h-8 text-green-400 mr-3" />
                  Ubicación
                </h2>
                <p className="text-xl text-gray-300">Carlos Francisco Melo 3685, Vicente López, Buenos Aires</p>
              </div>
              
              <div className="rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1955973070765!2d-58.49162822425967!3d-34.59861107295553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7683b6e0d5d%3A0x8e7b6b3c67c1f4a8!2sCarlos%20Francisco%20Melo%203685%2C%20Vicente%20L%C3%B3pez!5e0!3m2!1ses!2sar!4v1690000000000!5m2!1ses!2sar"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Monaco Detailing"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Monaco Detailing. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/monacodetailing.arg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center"
              >
                <InstagramIcon className="w-5 h-5 mr-2" />
                Instagram
              </a>
              <button
                onClick={() => sendMessage("Hola, vengo desde la web y quiero consultar por un servicio.")}
                className="bg-gradient-to-r from-green-500 to-green-600 text-black px-6 py-2 rounded-full font-semibold flex items-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all duration-200"
              >
                <MessageIcon className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
