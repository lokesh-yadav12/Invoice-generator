import React from 'react';

const Footer = () => {
  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'We are Hiring', href: '#hiring' },
    { name: 'Blog', href: '#blog' }
  ];

  const helpfulLinks = [
    // { name: 'Refrens Knowledge Base', href: '#kb' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
   
    { name: 'Refrens iOS App', href: '#ios' }
  ];

  const products = [
    { name: 'Accounting Software', href: '#accounting' },
    { name: 'GST Billing Software', href: '#gst' },
    { name: 'e-way Bill Software', href: '#eway' }
  ];

  return (
    <div className="max-h-screen  flex items-end">
      <footer className="w-full  text-gray-400 relative">
        {/* Top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-5 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#b67ed1] to-indigo-300 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-purple-500/40">
                  
                </div>
                <h2 className="text-3xl font-bold text-black tracking-tight">Elite8Digital</h2>
              </div>
              
              <div className="text-black font-medium">
                Elite8Digital Internet Pvt. Ltd.
              </div>
              
              {/* <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-indigo-600 relative">
                <div className="text-center text-[10px] font-bold text-gray-900 leading-tight">
                  ISO<br/>27001:2022<br/>CERTIFIED
                </div>
              </div> */}
            </div>

            {/* Company Section with Social & Contact */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-black mb-6 relative pb-3">
                Company
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
              </h3>
              
              <div className="flex flex-col gap-3 mb-6">
                {companyLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-black hover:text-purple-300 hover:pl-2 transition-all duration-300 flex items-center before:content-['|'] before:mr-2 before:opacity-30"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

             

              {/* Contact Info */}
              
            </div>

            {/* Helpful Links Section */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-black mb-6 relative pb-3">
                Helpful Links
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
              </h3>
              <div className="flex flex-col gap-3">
                {helpfulLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-black hover:text-purple-300 hover:pl-2 transition-all duration-300 flex items-center before:content-['|'] before:mr-2 before:opacity-30"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Products Section */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-black mb-6 relative pb-3">
                Products
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
              </h3>
              <div className="flex flex-col gap-3">
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className="text-sm text-black hover:text-purple-300 hover:pl-2 transition-all duration-300 flex items-center before:content-['|'] before:mr-2 before:opacity-30"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-sm text-black">
            <p>&copy; 2025 Elite8Digital Internet Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;