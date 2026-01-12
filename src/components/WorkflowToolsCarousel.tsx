import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkflowToolsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const tools = [
    {
      title: 'Invoice Generator',
      description: 'Create professional invoices with customizable templates for your business needs.',
      buttonText: 'Create Invoice',
      route: '/invoice/invoice-generator',
      icon: (
        <div className="w-32 h-40 mb-2 bg-white rounded-lg shadow-md p-4">
          <div className="text-xs font-semibold text-gray-700 mb-3">Invoice</div>
          <div className="space-y-2">
            <div className="flex gap-1">
              <div className="h-1.5 w-12 bg-red-500 rounded"></div>
              <div className="h-1.5 w-6 bg-gray-400 rounded"></div>
              <div className="h-1.5 w-6 bg-gray-400 rounded"></div>
            </div>
            <div className="h-1.5 w-16 bg-red-200 rounded"></div>
            <div className="h-1.5 w-20 bg-gray-200 rounded"></div>
            <div className="h-1.5 w-14 bg-gray-200 rounded"></div>
            <div className="h-2 w-20 bg-gray-500 rounded mt-4"></div>
          </div>
          <button className="mt-3 w-full bg-gray-600 text-white text-[10px] py-1.5 rounded-md flex items-center justify-center gap-1">
            <span className="text-sm">+</span> Create Invoice
            <ChevronRight className="w-2 h-2" />
          </button>
        </div>
      )
    },
    {
      title: 'Purchase Order Generator',
      description: 'Easily create and manage purchase orders for streamlined procurement.',
      buttonText: 'Create Purchase Order',
      route: '/invoice/purchase-order',
      featured: true,
      icon: (
        <div className="w-32 h-40 bg-white rounded-lg shadow-md p-4">
          <div className="text-xs font-semibold text-gray-700 mb-3">Purchase Order</div>
          <div className="space-y-2">
            <div className="flex gap-1">
              <div className="h-1.5 w-12 bg-red-400 rounded"></div>
              <div className="h-1.5 w-6 bg-gray-200 rounded"></div>
              <div className="h-1.5 w-6 bg-gray-200 rounded"></div>
            </div>
            <div className="h-1.5 w-14 bg-red-200 rounded"></div>
            <div className="flex gap-1">
              <div className="h-1.5 w-3 bg-gray-500 rounded-full"></div>
              <div className="h-1.5 w-3 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          <button className="mt-6 w-full bg-white text-red-500 text-[10px] py-1.5 rounded-md border border-red-200">
            Convert to Invoice
          </button>
        </div>
      )
    },
    {
      title: 'Quotation Generator',
      description: 'Quickly generate accurate quotations with detailed pricing and product information.',
      buttonText: 'Create Quotation',
      route: '/invoice/quotation',
      icon: (
        <div className="w-40 h-48 mb-2 bg-white rounded-xl shadow-lg p-6">
          <div className="text-sm font-semibold text-gray-700 mb-4">Quotation</div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="h-2 w-24 bg-gray-200 rounded"></div>
              <div className="h-2 w-8 bg-blue-300 rounded"></div>
            </div>
            <div className="h-2 w-20 bg-gray-200 rounded"></div>
            <div className="h-6 w-32 bg-blue-500 rounded flex items-center justify-center mt-4">
              <div className="h-3 w-20 bg-blue-400 rounded"></div>
            </div>
            <div className="text-2xl font-bold text-blue-500 mt-2">$$$$</div>
            <div className="h-2 w-20 bg-blue-400 rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: 'GST Invoice Generator',
      description: 'GST-compliant invoices, ensuring accuracy & tax regulation compliance',
      buttonText: 'Create GST Invoice',
      route: '/invoice/gst-invoice',
      featured: true,
      icon: (
        <div className="w-32 h-40 mb-2 bg-white rounded-lg shadow-md p-4">
          <div className="text-xs font-semibold text-gray-700 mb-3">GST Invoice</div>
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-[10px] text-gray-600">
              <div className="w-2 h-2 border border-gray-600 rounded"></div>
              <span>Generate E-invoice</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-blue-600">
              <div className="w-2 h-2 border border-blue-600 rounded"></div>
              <span>Generate E-way Bil...</span>
            </div>
            <div className="h-1.5 w-20 bg-orange-200 rounded mt-3"></div>
          </div>
        </div>
      )
    },
    {
      title: 'Delivery Challan Generator',
      description: 'Simplify delivery documentation with a user-friendly delivery challan creation tool.',
      buttonText: 'Create Delivery Challan',
      route: '/invoice/delivery-challan',
      icon: (
        <div className="w-32 h-40 mb-7 bg-white rounded-lg shadow-md p-4">
          <div className="text-xs font-semibold text-gray-700 mb-3">Delivery Challan</div>
          <div className="space-y-2">
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="h-1.5 w-20 bg-orange-200 rounded"></div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="h-1.5 w-18 bg-orange-200 rounded"></div>
            </div>
            <div className="flex gap-1 items-center mt-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="h-1.5 w-20 bg-green-200 rounded"></div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="h-1.5 w-16 bg-green-200 rounded"></div>
            </div>
          </div>
          <button className="mt-4 w-full bg-white text-gray-600 text-[10px] py-1.5 rounded-md border border-gray-200 flex items-center justify-center gap-1">
            <div className="w-2 h-2 border border-gray-600 rounded"></div>
            Interstate Delivery
          </button>
        </div>
      )
    },
    {
      title: 'Proforma Invoice Generator',
      description: 'Generate detailed proforma invoices for cost estimation & transaction clarify.',
      buttonText: 'Create Proforma Invoice',
      route: '/invoice/proforma-invoice',
      icon: (
        <div className="w-40 h-48 mb-2 bg-white rounded-xl shadow-lg p-6">
          <div className="text-sm font-semibold text-gray-700 mb-4">Proforma Invoice</div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="h-2 w-20 bg-gray-500 rounded"></div>
              <div className="h-2 w-8 bg-gray-400 rounded-full"></div>
              <div className="h-2 w-8 bg-gray-400 rounded-full"></div>
            </div>
            <div className="h-2 w-24 bg-gray-200 rounded"></div>
            <div className="h-2 w-28 bg-gray-200 rounded"></div>
            <div className="text-2xl font-bold text-gray-600 mt-4">$$$</div>
          </div>
        </div>
      )
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(tools.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };



  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl py-3 font-semibold text-gray-900 mb-3">
            Simplified Workflow Tools
          </h1>
          <p className="text-xl my-2 py-2 text-gray-600">
            Simple tools for freelancers, consultants, solopreneurs, and newly started businesses.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[450px]">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-colors ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Cards Grid */}
          <div className="overflow-hidden px-6">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[calc(33.333%-11px)] bg-white rounded-xl shadow-lg px-4 py-4 flex flex-col items-center text-center transition-all hover:shadow-xl ${tool.featured ? 'ring-2 ring-gray-200' : ''
                    }`}
                >
                  {/* Icon Container */}
                  <div className={`mb-2 ${tool.featured ? 'bg-gradient-to-br from-[#b67ed1] to-blue-700 p-4 rounded-2xl' : ''}`}>
                    {tool.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {tool.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-2 flex-grow line-clamp-2">
                    {tool.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    to={tool.route}
                    className="w-full py-1.5 px-2 border-2 border-gray-900 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-1"
                  >
                    {tool.buttonText}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-colors ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>


        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${currentSlide === index
                ? 'w-8 bg-gray-800'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowToolsCarousel;
