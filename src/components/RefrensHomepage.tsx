import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RefrensHomepage = () => {
    const navigate = useNavigate();
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [showPricingDropdown, setShowPricingDropdown] = useState(false);
    const productsDropdownRef = useRef<HTMLDivElement>(null);
    const countryDropdownRef = useRef<HTMLDivElement>(null);
    const pricingDropdownRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close dropdowns
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
                setShowProductsDropdown(false);
            }
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
                setShowCountryDropdown(false);
            }
            if (pricingDropdownRef.current && !pricingDropdownRef.current.contains(event.target as Node)) {
                setShowPricingDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const scrollToBusinessSection = () => {
        const businessSection = document.getElementById('business-section');
        if (businessSection) {
            businessSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const productsData = {
        solutions: [
            
            'GST Billing Software',
            'Invoicing Software',
            'Quotation Software',
            'e-Invoicing Software',
            'eWay Bill Software',
            'Inventory Software',
            'Invoicing API'
        ],
        freeTools: [
            { name: 'GST Invoice Maker', route: '/invoice/gst-invoice' },
            { name: 'Invoice Generator', route: '/invoice/invoice-generator' },
            { name: 'Quotation Generator', route: '/invoice/quotation' },
            { name: 'Create Proforma Invoice', route: '/invoice/proforma-invoice' },
            { name: 'Invoice Formats', route: null },
            { name: 'Create Purchase Order', route: '/invoice/purchase-order' },
           
            { name: 'Create Delivery Challan', route: '/invoice/delivery-challan' },
            { name: 'Quotation Templates', route: null },

        ],
        categories: [
          
            'Startups',
            'Chartered Accountant',
            'Export/Import Business',
            'Professional Services',
            'Freelancers/Self-Employed'
        ]
    };

    const countries = [
        'India',
        'United States',
        'United Kingdom',
        'Canada',
        'Australia',
        'Singapore',
        'United Arab Emirates',
        'Germany',
        'France',
        'Netherlands',
        'Switzerland',
        'Japan',
        'South Korea',
        'Brazil',
        'Mexico',
        'Spain',
        'Italy',
        'Sweden',
        'Norway',
        'New Zealand'
    ];

   

    return (
        <div className="min-h-screen ">
            {/* Navigation Bar */}
            <nav className="bg-white/60 backdrop-blur-md shadow-sm sticky top-6 w-[80%] mx-auto rounded-xl z-[90]">
                <div className="max-w-7xl mx-auto px-6 py-2">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img 
                                src="/elite8digital-nav.png" 
                                alt="Elite8Digital Logo" 
                                className="h-12 w-auto"
                            />
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center gap-8">
                            {/* Products Dropdown */}
                            <div className="relative" ref={productsDropdownRef}>
                                <button
                                    onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                                    className="flex items-center gap-1 text-black-700 hover:text-purple-600 font-medium transition-colors"
                                >
                                    Products
                                    <ChevronDown className={`w-4 h-4 transition-transform ${showProductsDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showProductsDropdown && (
                                    <>
                                        {/* Backdrop overlay */}
                                        <div className="fixed inset-0 bg-black/20 z-[100]" style={{ top: '80px' }}></div>

                                        {/* Centered dropdown */}
                                        <div className="fixed left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl p-8 border border-black-100 z-[110]">
                                            <div className="grid grid-cols-3 gap-8">
                                                <div>
                                                    <h3 className="text-lg font-bold text-black-900 mb-4">Solutions</h3>
                                                    <ul className="space-y-3">
                                                        {productsData.solutions.map((item, idx) => (
                                                            <li key={idx}>
                                                                <button
                                                                    onClick={() => {
                                                                        alert(`${item} - Coming Soon!`);
                                                                        setShowProductsDropdown(false);
                                                                    }}
                                                                    className="text-left text-black-700 hover:text-red-600 transition-colors w-full"
                                                                >
                                                                    {item}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-black-900 mb-4">Free Tools</h3>
                                                    <ul className="space-y-3">
                                                        {productsData.freeTools.map((item, idx) => (
                                                            <li key={idx}>
                                                                <button
                                                                    onClick={() => {
                                                                        if (item.route) {
                                                                            setShowProductsDropdown(false);
                                                                            navigate(item.route);
                                                                        } else {
                                                                            alert(`${item.name} - Coming Soon!`);
                                                                            setShowProductsDropdown(false);
                                                                        }
                                                                    }}
                                                                    className="text-left text-black-700 hover:text-red-600 transition-colors w-full"
                                                                >
                                                                    {item.name}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-black-900 mb-4">Categories</h3>
                                                    <ul className="space-y-3">
                                                        {productsData.categories.map((item, idx) => (
                                                            <li key={idx}>
                                                                <button
                                                                    onClick={() => {
                                                                        alert(`${item} - Coming Soon!`);
                                                                        setShowProductsDropdown(false);
                                                                    }}
                                                                    className={`text-left w-full ${item === 'Consultants' ? 'text-black-600 font-medium' : 'text-black-700'} hover:text-red-600 transition-colors`}
                                                                >
                                                                    {item}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Pricing Dropdown */}
                            <div className="relative" ref={pricingDropdownRef}>
                                <button
                                    onClick={() => setShowPricingDropdown(!showPricingDropdown)}
                                    className="flex items-center gap-1 text-black-700 hover:text-purple-600 font-medium transition-colors"
                                >
                                    Pricing
                                    <ChevronDown className={`w-4 h-4 transition-transform ${showPricingDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showPricingDropdown && (
                                    <>
                                        {/* Backdrop overlay */}
                                        <div className="fixed inset-0 bg-black/20 z-[100]" style={{ top: '80px' }}></div>

                                        {/* Centered dropdown */}
                                        <div className="fixed left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl p-8 border border-black-100 z-[110]">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-gradient-to-br from-black-600 to-black-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-2xl font-bold text-black-900 mb-3">Free for Everyone!</h3>
                                                <p className="text-lg text-black-600 mb-6">
                                                    Currently, we are providing all services <span className="font-semibold text-red-600">completely free</span> for all users.
                                                </p>
                                                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                                                    <p className="text-black-700 mb-4">Enjoy unlimited access to:</p>
                                                    <ul className="space-y-2 text-left max-w-md mx-auto">
                                                        <li className="flex items-center gap-2 text-black-700">
                                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            Invoice Generation
                                                        </li>
                                                        <li className="flex items-center gap-2 text-black-700">
                                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            Quotation & Purchase Orders
                                                        </li>
                                                        <li className="flex items-center gap-2 text-black-700">
                                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            GST & Tax Compliance
                                                        </li>
                                                        <li className="flex items-center gap-2 text-black-700">
                                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            All Premium Features
                                                        </li>
                                                    </ul>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        setShowPricingDropdown(false);
                                                        navigate('/signup');
                                                    }}
                                                    className="px-8 py-3 bg-black-600 hover:bg-black text-white font-semibold rounded-xl transition-colors shadow-lg"
                                                >
                                                    Get Started for Free
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Country Dropdown */}
                            <div className="relative" ref={countryDropdownRef}>
                                <button
                                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                    className="flex items-center gap-1 text-black-700 hover:text-purple-600 font-medium transition-colors"
                                >
                                    India
                                    <ChevronDown className={`w-4 h-4 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showCountryDropdown && (
                                    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl p-4 border border-black-100 max-h-96 overflow-y-auto z-[110]">
                                        <ul className="space-y-2">
                                            {countries.map((country, idx) => (
                                                <li key={idx}>
                                                    <a
                                                        href="#"
                                                        className={`block px-4 py-2 rounded-lg ${country === 'India' ? 'bg-black-100 text-black-700 font-medium' : 'text-black-700 hover:bg-black-50'} transition-colors`}
                                                    >
                                                        {country}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center gap-8">
                            <button
                                onClick={() => navigate('/login')}
                                className="text-black-700 hover:text-purple-600 font-medium transition-colors"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate('/signup')}
                                className="px-4 py-2 bg-purple-400 hover:bg-purple-700 text-black font-medium rounded-xl transition-colors"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Rating Badge */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-black-900 font-medium">Rated 4.8/5 by businesses worldwide</span>
                    </div>
                </div>

                {/* Main Title */}
                <h1 className="text-3xl md:text-5xl font-bold text-center mt-20 text-black-900 mb-6 leading-tight">
                    Create All kind of Invoices free
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-center text-black-700 mb-12">
                    Trusted by 100,000+ businesses from 170+ countries.
                </p>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-4 mb-20">
                    <button
                        onClick={() => navigate('/signup')}
                        className="px-8 py-4 bg-purple-500 hover:bg-black text-white font-semibold rounded-xl transition-colors shadow-lg"
                    >
                        Try for Free
                    </button>
                    <button
                        onClick={scrollToBusinessSection}
                        className="px-8 py-4 bg-white/50 hover:bg-black-200 text-black-900 font-semibold rounded-xl border-2 border-black-200 transition-colors"
                    >
                        Get a Demo
                    </button>
                </div>

               
            </div>
        </div>
    );
};

export default RefrensHomepage;