import { COMPANY_NAME, CONTACT_INFO } from '../../core/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-bold text-white mb-6">{COMPANY_NAME}</h2>
            <p className="text-text-secondary max-w-md">
              We are the architects of the digital future. Partner with us to build what others can only imagine.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Headquarters</h4>
            <p className="text-text-secondary mb-2">{CONTACT_INFO.address}</p>
            <p className="text-text-secondary">{CONTACT_INFO.email}</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-text-secondary">
              <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-text-secondary hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
