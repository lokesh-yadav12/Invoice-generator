import { ChevronRight } from 'lucide-react';
import { Routes, Route, useParams, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './store';
import { setCurrentStep } from './store/invoiceSlice';
import HomePage from './components/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

// Import all invoice templates
import InvoiceGeneratorForm from './pages/invoice-templates/invoice-generator/Invoice';
import InvoiceGeneratorPreview from './pages/invoice-templates/invoice-generator/InvoicePreview';

import PurchaseOrderForm from './pages/invoice-templates/purchase-order/Invoice';
import PurchaseOrderPreview from './pages/invoice-templates/purchase-order/InvoicePreview';

import QuotationForm from './pages/invoice-templates/quotation/Invoice';
import QuotationPreview from './pages/invoice-templates/quotation/InvoicePreview';

import GSTInvoiceForm from './pages/invoice-templates/gst-invoice/Invoice';
import GSTInvoicePreview from './pages/invoice-templates/gst-invoice/InvoicePreview';

import DeliveryChallanForm from './pages/invoice-templates/delivery-challan/Invoice';
import DeliveryChallanPreview from './pages/invoice-templates/delivery-challan/InvoicePreview';

import ProformaInvoiceForm from './pages/invoice-templates/proforma-invoice/Invoice';
import ProformaInvoicePreview from './pages/invoice-templates/proforma-invoice/InvoicePreview';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const InvoiceApp = () => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.invoice.currentStep);
  const { templateType } = useParams<{ templateType: string }>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Map template types to their components and labels
  const templateConfig: Record<string, { FormComponent: React.ComponentType; PreviewComponent: React.ComponentType; label: string }> = {
    'invoice-generator': {
      FormComponent: InvoiceGeneratorForm,
      PreviewComponent: InvoiceGeneratorPreview,
      label: 'Invoice'
    },
    'purchase-order': {
      FormComponent: PurchaseOrderForm,
      PreviewComponent: PurchaseOrderPreview,
      label: 'Purchase Order'
    },
    'quotation': {
      FormComponent: QuotationForm,
      PreviewComponent: QuotationPreview,
      label: 'Quotation'
    },
    'gst-invoice': {
      FormComponent: GSTInvoiceForm,
      PreviewComponent: GSTInvoicePreview,
      label: 'GST Invoice'
    },
    'delivery-challan': {
      FormComponent: DeliveryChallanForm,
      PreviewComponent: DeliveryChallanPreview,
      label: 'Delivery Challan'
    },
    'proforma-invoice': {
      FormComponent: ProformaInvoiceForm,
      PreviewComponent: ProformaInvoicePreview,
      label: 'Proforma Invoice'
    }
  };

  const config = templateConfig[templateType || 'invoice-generator'];
  const FormComponent = config?.FormComponent || InvoiceGeneratorForm;
  const PreviewComponent = config?.PreviewComponent || InvoiceGeneratorPreview;
  const documentLabel = config?.label || 'Invoice';

  const steps = [
    { number: 1, label: `Add ${documentLabel} Details`, optional: false },
    { number: 2, label: 'Design & Share', optional: true }
  ];

  const handleStepClick = (stepNumber: number) => {
    dispatch(setCurrentStep(stepNumber));
  };

  return (
    <div className='min-h-screen bg-white py-2'>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-4 pb-8 mb-4 ">
          <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
            Create New {documentLabel}
          </h1>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex text-sm items-center gap-4">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => handleStepClick(step.number)}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-300 ${currentStep === step.number
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-300'
                      : currentStep > step.number
                        ? 'bg-purple-600 text-white cursor-pointer hover:shadow-lg'
                        : 'bg-gray-200 text-gray-500'
                      }`}
                  >
                    {step.number}
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-base font-medium transition-colors ${currentStep === step.number
                        ? 'text-purple-700'
                        : 'text-gray-500'
                        }`}
                    >
                      {step.label}
                    </span>
                    {step.optional
                      && (
                        <span className="text-sm text-gray-400">(optional)</span>
                      )
                    }
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <ChevronRight className="text-gray-300" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content based on current step */}
        {currentStep === 1 ? <FormComponent /> : <PreviewComponent />}
      </div>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route
          path="/invoice/:templateType"
          element={
            <ProtectedRoute>
              <InvoiceApp />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
