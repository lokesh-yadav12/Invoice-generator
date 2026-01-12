import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, FileText, Shield, CreditCard, Package, Receipt, TrendingUp, Users } from 'lucide-react';

type FeatureKey = 'Accounting' | 'Invoicing' | 'Compliance' | 'Payments' | 'Inventory' | 'Expenses' | 'Sales' | 'Vendors';

const BusinessPage = () => {
    const [activeTab, setActiveTab] = useState<FeatureKey>('Accounting');
    const navigate = useNavigate();

    const features: Record<FeatureKey, {
        title: string;
        description: string;
        icon: React.ReactElement;
        color: string;
    }> = {
        Accounting: {
            title: 'Accounting',
            description: 'Automatically update your books when you make a sale or record a purchase, generate financial reports, automate bank reconciliation, access audit trails, create E-invoices & E-way Bills, generate GSTR-1 & GSTR-2B Reports, and automate GSTR-2B reconciliation.',
            icon: <BarChart3 className="w-56 h-56" />,
            color: '#8B5CF6'
        },
        Invoicing: {
            title: 'Invoicing',
            description: 'Create professional invoices in seconds, customize templates to match your brand, send automated payment reminders, track invoice status in real-time, accept online payments, and manage recurring invoices effortlessly.',
            icon: <FileText className="w-56 h-56" />,
            color: '#06B6D4'
        },
        Compliance: {
            title: 'Compliance',
            description: 'Stay compliant with tax regulations, automate GST filing, generate tax reports, maintain digital records, track compliance deadlines, and get alerts for upcoming submissions to avoid penalties.',
            icon: <Shield className="w-56 h-56" />,
            color: '#10B981'
        },
        Payments: {
            title: 'Payments',
            description: 'Accept payments through multiple channels, process credit cards and digital wallets, automate payment tracking, send payment links, reconcile payments automatically, and reduce payment collection time.',
            icon: <CreditCard className="w-56 h-56" />,
            color: '#F59E0B'
        },
        Inventory: {
            title: 'Inventory',
            description: 'Track stock levels in real-time, set up low stock alerts, manage multiple warehouses, automate reordering, track batch and serial numbers, and generate inventory valuation reports.',
            icon: <Package className="w-56 h-56" />,
            color: '#EF4444'
        },
        Expenses: {
            title: 'Expenses',
            description: 'Track business expenses effortlessly, capture receipts on the go, categorize expenses automatically, manage employee reimbursements, set budget limits, and generate expense reports for better financial control.',
            icon: <Receipt className="w-56 h-56" />,
            color: '#EC4899'
        },
        Sales: {
            title: 'Sales',
            description: 'Manage your sales pipeline, track leads and opportunities, create quotes and estimates, convert quotes to invoices, analyze sales performance, and forecast revenue with powerful analytics.',
            icon: <TrendingUp className="w-56 h-56" />,
            color: '#6366F1'
        },
        Vendors: {
            title: 'Vendors',
            description: 'Manage vendor relationships, track purchase orders, maintain vendor databases, monitor vendor performance, automate vendor payments, and streamline procurement processes for better supplier management.',
            icon: <Users className="w-56 h-56" />,
            color: '#14B8A6'
        }
    };

    const currentFeature = features[activeTab];

    const handleTryForFree = () => {
        navigate('/signup');
    };

    const handleExplore = () => {
        if (activeTab === 'Invoicing') {
            navigate('/invoice/invoice-generator');
        } else {
            alert(`${activeTab} feature coming soon!`);
        }
    };

    return (
        <div className="min-h-screen my-12 ">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 py-4 mt-8">
                <h1 className="text-2xl md:text-3xl py-8 font-bold text-gray-900 text-center mb-8">
                    Everything You Need To Grow Your Business
                </h1>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                    {Object.keys(features).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as FeatureKey)}
                            className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${activeTab === tab
                                ? 'bg-white text-gray-900 shadow-lg'
                                : 'bg-white/50 text-gray-800 hover:bg-white hover:shadow-md'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className=" rounded-3xl shadow-xl p-12 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center mx-20">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                {currentFeature.title}
                            </h2>
                            <p className="text-lg text-black leading-relaxed">
                                {currentFeature.description}
                            </p>
                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={handleTryForFree}
                                    className="px-6 py-2 bg-purple-600 hover:bg-black text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg"
                                >
                                    Try for Free
                                </button>
                                <button
                                    onClick={handleExplore}
                                    className="px-6 py-2 bg-white hover:bg-blue-300 text-blue-900 font-semibold rounded-xl border-2 border-blue-200 transition-colors duration-300"
                                >
                                    Explore {currentFeature.title}
                                </button>
                            </div>
                        </div>

                        {/* Right Icon */}
                        <div className="flex justify-center items-center">
                            <div
                                className="transition-all text-blue-500  duration-500 transform hover:scale-105"
                                // style={{ color: currentFeature.color }}
                            >
                                {currentFeature.icon}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessPage;