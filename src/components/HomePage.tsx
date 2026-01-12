import RefrensHomepage from './RefrensHomepage';
import BusinessPage from './BusinessPage';
import WorkflowToolsCarousel from './WorkflowToolsCarousel';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div className='bg-gradient-to-br from-[#b579da] via-white to-[#7281d6]'>
            <RefrensHomepage />
            <div id="business-section">
                <BusinessPage />
            </div>
            <WorkflowToolsCarousel />
            <Footer/>
        </div>
    );
};

export default HomePage;
