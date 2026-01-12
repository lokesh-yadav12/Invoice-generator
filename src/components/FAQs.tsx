import React from 'react';

const FAQs = () => {
	return (
		<div className="faqs-container p-6">
			<h1 className="faqs-title">Frequently Asked Questions</h1>
			<div className="faq-item">
				<h2 className="faq-question">What is your return policy?</h2>
				<p className="faq-answer">Our return policy allows returns within 30 days of purchase.</p>
			</div>
			<div className="faq-item">
				<h2 className="faq-question">How can I track my order?</h2>
				<p className="faq-answer">You can track your order using the tracking link sent to your email.</p>
			</div>
			<div className="faq-item">
				<h2 className="faq-question">What payment methods do you accept?</h2>
				<p className="faq-answer">We accept credit cards, PayPal, and bank transfers.</p>
			</div>
		</div>
	);
};

export default FAQs;
