import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  { name: "Sun Oncology", logo: "/logo-img/logo.png", description: "Reaching People And Touching Lives Globally As A Leading Provider Of Valued Medicines" },
  { name: "RPG Lifesciences", logo: "/logo-img/logo1.png", description: "Accessible Quality Healthcare to Society" },
  { name: "Samarth", logo: "/logo-img/logo2.png", description: "Advanced oncology solutions." },
  { name: "Hetro", logo: "/logo-img/logo3.jpg", description: "Cutting-edge medicine production." },
  { name: "Intas", logo: "/logo-img/logo4.png", description: "In The Heart of Trust, we Thrive." },
  { name: "Zydus", logo: "/logo-img/logo5.jpg", description: "Dedicated To Life." },
  { name: "Wembrace", logo: "/logo-img/logo6.png", description: "Embracing Lives, redefining Patients’ Journey" },
  { name: "Axiommax Oncology", logo: "/logo-img/logo7.png", description: "A step towards excellence" },
  { name: "Johnson & Johnson", logo: "/logo-img/logo8.svg", description: "Pioneers in medicine." },
  { name: "Merck", logo: "/logo-img/logo9.svg", description: "Pharmaceutical innovation leaders." },
  { name: "MSD", logo: "/logo-img/logo10.svg", description: "Improving Health, Improving Lives." },
  { name: "AstraZeneca", logo: "/logo-img/logo12.png", description: "What science can do" },
  { name: "BD", logo: "/logo-img/logo13.svg", description: "Advancing the world of health." },
  { name: "DRL", logo: "/logo-img/logo14.svg", description: "Good Health Can’t Wait." },
];

export default function PartnersCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (partners.length - 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-10 bg-[radial-gradient(circle,#f8f9fa,#dee2e6)]">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Supporters</h2>
      <div className="relative w-full max-w-4xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {partners.slice(index, index + 3).map((partner) => (
              <div key={partner.name} className="bg-white shadow-lg p-6 rounded-2xl flex flex-col items-center border border-gray-300">
                <img src={partner.logo} alt={partner.name} className="w-20 h-20 object-contain mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">{partner.name}</h3>
                <p className="text-gray-500 text-center">{partner.description}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
