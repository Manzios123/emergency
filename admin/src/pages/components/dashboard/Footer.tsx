import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-linear-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">Evergreen Rwanda</span>
            </div>
            <p className="text-slate-400 text-sm">
              Powered by Roots & Shoots
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-slate-400 text-sm">Follow us:</span>
            <div className="flex space-x-3">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/RwandaRoots?t=lo30QHg_KJs0J-IpkAV7Ug&s=08" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rootsandshoots.rw?utm_source=qr&igsh=N2Y3anMwMXJlNG9n" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-6 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Evergreen Rwanda. All rights reserved. 
            Building a sustainable future through education and environmental stewardship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;