import React from 'react';

const Footer = () => {
	const companyLinks = [
		{ name: 'About Us', href: '#about' },
		{ name: 'Contact Us', href: '#contact' },
		
		{ name: 'Blog', href: '#blog' },
	];

	const helpfulLinks = [
		{ name: 'Pricing', href: '#pricing' },
		{ name: 'Terms of Service', href: '#terms' },
		{ name: 'Privacy Policy', href: '#privacy' },
	
	];

	const products = [
		{ name: 'Accounting Software', href: '#accounting' },
		{ name: 'GST Billing Software', href: '#gst' },
		{ name: 'e-way Bill Software', href: '#eway' },
	];

	return (
		<div className="min-h-screen flex items-end">
			<footer className="w-full text-gray-400 relative">
				{/* Top border gradient */}
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

				<div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-10 sm:py-10 lg:py-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-10 lg:gap-12">
						{/* Brand Section */}
						<div className="flex flex-col gap-1 items-center sm:items-start sm:col-span-2 lg:col-span-1">
							<div className="flex items-center gap-2">
								<div className="flex items-center py-1 gap-2">
									<img
										src="/elite8digital-nav.png"
										alt="Refrens Logo"
										className="w-40 h-48 sm:w-36 sm:h-40 md:w-32 md:h-44 lg:w-36 lg:h-32 object-contain"
									/>
								</div>
							</div>

							{/* Social Media Icons */}
							<div className="flex gap-3 mt-0">
								<a
									href="#facebook"
									className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
								>
									<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</a>
								<a
									href="#twitter"
									className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
								>
									<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
									</svg>
								</a>
								<a
									href="#linkedin"
									className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
								>
									<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
							</div>

							{/* Contact Information */}
						</div>

						{/* Company Section */}
						<div className="flex flex-col items-center sm:items-start">
							<h3 className="text-lg sm:text-lg font-semibold text-black mb-5 sm:mb-5 lg:mb-6 relative pb-3 sm:pb-3">
								Company
								<span className="absolute bottom-0 left-0 sm:left-0 w-10 sm:w-10 h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
							</h3>

							<div className="flex flex-col gap-3 sm:gap-2.5 lg:gap-3 mb-5 sm:mb-5 lg:mb-6 items-center sm:items-start w-full">
								{companyLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										className="text-sm sm:text-sm text-black hover:text-purple-700 hover:pl-2 transition-all duration-300 flex items-center before:content-['|'] before:mr-2 sm:before:mr-2 before:opacity-30"
									>
										{link.name}
									</a>
								))}
							</div>
						</div>
						

						{/* Helpful Links Section */}
						<div className="flex flex-col items-center sm:items-start">
							<h3 className="text-lg sm:text-lg font-semibold text-black mb-5 sm:mb-5 lg:mb-6 relative pb-3 sm:pb-3">
								Helpful Links
								<span className="absolute bottom-0 left-0 sm:left-0 w-10 sm:w-10 h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
							</h3>
							<div className="flex flex-col gap-3 sm:gap-2.5 lg:gap-3 items-center sm:items-start w-full">
								{helpfulLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										className="text-sm sm:text-sm text-black hover:text-purple-700 hover:pl-2 transition-all duration-300 flex items-center before:content-['|'] before:mr-2 sm:before:mr-2 before:opacity-30"
									>
										{link.name}
									</a>
								))}
							</div>
						</div>

						{/* Products Section */}
						<div className="flex flex-col items-center sm:items-start sm:col-span-2 lg:col-span-1">
							<h3 className="text-lg sm:text-lg font-semibold text-black mb-5 sm:mb-5 lg:mb-6 relative pb-3 sm:pb-3">
								Products
								<span className="absolute bottom-0 left-0 sm:left-0 w-10 sm:w-10 h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
							</h3>
							<div className="flex flex-col gap-3 sm:gap-2.5 lg:gap-3 items-center sm:items-start w-full">
								{products.map((product) => (
									<a
										key={product.name}
										href={product.href}
										className="text-sm sm:text-sm text-black hover:text-purple-300 hover:pl-2 transition-all duration-300 flex items-center before:content-['|'] before:mr-2 sm:before:mr-2 before:opacity-30"
									>
										{product.name}
									</a>
								))}
							</div>
						</div>


						<div className="flex flex-col gap-2  items-center sm:items-start">
							{/* Phone */}
							<h3 className="text-lg sm:text-lg font-semibold text-black mb-2 sm:mb-5 lg:mb-2 relative pb-3 sm:pb-3">
								Reach to us
								<span className="absolute bottom-0 left-0 sm:left-0 w-10 sm:w-10 h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
							</h3>
							<a
								href="tel:+919104043036"
								className="flex items-center gap-2 text-black hover:text-purple-700 transition-colors duration-300"
							>
								<div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
									<svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
									</svg>
								</div>
								<span className="text-sm font-medium">+91 9104043036</span>
							</a>

							{/* WhatsApp */}
							<a
								href="https://wa.me/919104043036"
								className="flex items-center gap-2 text-black hover:text-purple-700 transition-colors duration-300"
							>
								<div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
									<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
									</svg>
								</div>
								<span className="text-sm font-medium">+91 9104043036</span>
							</a>

							{/* Email */}
							<a
								href="mailto:care@refrens.com"
								className="flex items-center gap-2 text-black hover:text-purple-700 transition-colors duration-300"
							>
								<div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
									<svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
									</svg>
								</div>
								<span className="text-sm font-medium">care@refrens.com</span>
							</a>
						</div>
					</div>

					{/* Footer Bottom */}
					<div className="mt-10 sm:mt-10 lg:mt-12 pt-7 sm:pt-7 lg:pt-8 border-t border-gray-800/50 text-center text-sm sm:text-sm text-black">
						<p>&copy; 2025 Elite8 Digital. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
