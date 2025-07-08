import React, { useState } from 'react';
import {
    Monitor,
    Smartphone,
    Tablet,
    Code,
    Figma,
    ExternalLink,
    Play,
    Eye,
    Download,
    Star,
    Zap,
    Layers,
    Palette,
    Globe,
    ArrowRight,
    Filter,
    Search,
    Grid3X3,
    List,
    ChevronRight,
    Github,
    Sparkles,
    Rocket,
    Target,
    TrendingUp,
    Clock,
    Users,
    Award,
    CheckCircle
} from 'lucide-react';

const Templates = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['All', 'E-commerce', 'SaaS', 'Portfolio', 'Corporate', 'Landing Page', 'Dashboard'];

    const templates = [
        {
            id: 1,
            title: "Lifecare Diagnostics & Wellness",
            category: "Healthcare",
            description: "Modern healthcare website with comprehensive medical services, appointment booking system, and patient management. Built with React and TypeScript for optimal user experience and professional medical presentation.",
            figmaUrl: "https://www.figma.com/file/example1",
            demoUrl: "https://lifecare-diagnostics-wellness-template-o5f3snxsc.vercel.app/",
            githubUrl: "https://github.com/wevadmedia/techflow-template",
            image: "./Templates/Healthcare.png",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "Vite"],
            features: ["Appointment Booking", "Service Management", "Patient Testimonials", "Accessibility Compliant", "Contact Integration", "SEO Optimized"],
            rating: 4.9,
            downloads: 124,
            price: "Free",
            complexity: "Advanced",
            buildTime: "2-3 weeks",
            responsive: true,
            darkMode: true,
            animations: true,
            performanceScore: 98,
            mobileOptimized: true
        },
        {
            id: 2,
            title: "Luxe Beauty Salon Website",
            category: "Beauty & Wellness",
            description: "Premium beauty salon website featuring elegant design, comprehensive service showcase, and seamless appointment booking system. Built with modern React architecture for exceptional user experience.",
            figmaUrl: "https://www.figma.com/file/example2",
            demoUrl: "https://saloon-roan.vercel.app/",
            githubUrl: "https://github.com/wevadmedia/ecoshop-template",
            image: "./Templates/Saloon.png",
            technologies: ["React.js", "TypeScript ", "Tailwind CSS", "React Router", "Lucide React", "Vite"],
            features: ["Booking System", "Service Portfolio", "Responsive Design", "Team Profiles", "Client Testimonials", "Contact Integration"],
            rating: 4.9,
            downloads: 89,
            price: "$49",
            complexity: "Intermediate",
            buildTime: "1-2 weeks",
            responsive: true,
            darkMode: false,
            animations: true,
            performanceScore: 95,
            mobileOptimized: true
        },
        {
            id: 3,
            title: "Smart Portfolio – Developer Portfolio Template",
            category: "Portfolio",
            description: "A modern personal developer portfolio featuring a dark theme, timeline-based experience layout, dynamic skill tiles, and project showcases. Built with React and Tailwind CSS, it integrates seamlessly with GitHub and supports multiple languages.",
            figmaUrl: "https://www.figma.com/file/example3",
            demoUrl: "https://smart-portfolio-xi.vercel.app/",
            githubUrl: "https://github.com/wevadmedia/portfolio-template",
            image: "./Templates/Portfolio.png",
            technologies: ["Vue.js", "GSAP", "Three.js", "Nuxt.js", "Netlify"],
            features: ["GitHub integration", "Multi-language", "Timeline Experience", "Blog Integration", "Project Filtering", "Testimonials"],
            rating: 4.9,
            downloads: 115,
            price: "Free",
            complexity: "Beginner",
            buildTime: "3-5 days",
            responsive: true,
            darkMode: true,
            animations: true,
            performanceScore: 92,
            mobileOptimized: true
        },
        {
            id: 4,
            title: "FinanceFlow Dashboard",
            category: "Dashboard",
            description: "Comprehensive financial dashboard with real-time market data, portfolio tracking, analytics, and investment insights.",
            figmaUrl: "https://www.figma.com/file/example4",
            demoUrl: "https://financeflow-demo.netlify.app",
            githubUrl: "https://github.com/wevadmedia/finance-dashboard",
            image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=800",
            technologies: ["React", "D3.js", "Material-UI", "Node.js", "MongoDB"],
            features: ["Real-time Data", "Advanced Charts", "Portfolio Tracking", "Market Analysis", "Risk Assessment", "Reports"],
            rating: 4.7,
            downloads: 743,
            price: "$99",
            complexity: "Advanced",
            buildTime: "3-4 weeks",
            responsive: true,
            darkMode: true,
            animations: true,
            performanceScore: 96,
            mobileOptimized: true
        },
        {
            id: 5,
            title: "StartupLaunch Landing",
            category: "Landing Page",
            description: "High-converting landing page template perfect for startup launches, product announcements, and marketing campaigns.",
            figmaUrl: "https://www.figma.com/file/example5",
            demoUrl: "https://startuplaunch-demo.netlify.app",
            githubUrl: "https://github.com/wevadmedia/startup-landing",
            image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400&h=800",
            technologies: ["HTML5", "CSS3", "JavaScript", "AOS", "Netlify"],
            features: ["Conversion Optimized", "A/B Testing Ready", "Email Integration", "Analytics", "Lead Capture", "Social Proof"],
            rating: 4.8,
            downloads: 2134,
            price: "Free",
            complexity: "Beginner",
            buildTime: "1-2 days",
            responsive: true,
            darkMode: false,
            animations: true,
            performanceScore: 99,
            mobileOptimized: true
        },
        {
            id: 6,
            title: "CorporateEdge Business",
            category: "Corporate",
            description: "Professional corporate website template with team pages, services showcase, contact forms, and company information.",
            figmaUrl: "https://www.figma.com/file/example6",
            demoUrl: "https://corporateedge-demo.netlify.app",
            githubUrl: "https://github.com/wevadmedia/corporate-template",
            image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=800",
            technologies: ["WordPress", "PHP", "MySQL", "Bootstrap", "jQuery"],
            features: ["CMS Integration", "Team Management", "Service Pages", "Contact Forms", "News Section", "Multi-language"],
            rating: 4.6,
            downloads: 567,
            price: "$79",
            complexity: "Intermediate",
            buildTime: "1-2 weeks",
            responsive: true,
            darkMode: false,
            animations: false,
            performanceScore: 88,
            mobileOptimized: true
        }
    ];

    const filteredTemplates = templates.filter(template => {
        const matchesCategory = activeFilter === 'All' || template.category === activeFilter;
        const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            template.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const getComplexityColor = (complexity: string) => {
        switch (complexity) {
            case 'Beginner': return 'text-green-600 bg-green-100';
            case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
            case 'Advanced': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    const getPriceColor = (price: string) => {
        return price === 'Free' ? 'text-green-600 bg-green-100' : 'text-blue-600 bg-blue-100';
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="flex items-center justify-center space-x-2 mb-6">
                            <Sparkles className="h-8 w-8 text-blue-400" />
                            <span className="text-blue-400 font-semibold text-lg">Premium Templates</span>
                            <Sparkles className="h-8 w-8 text-blue-400" />
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                            Production-Ready
                            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                                Web Templates
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Explore our collection of meticulously crafted templates with live demos, Figma designs,
                            and complete source code. Built with modern technologies and best practices for rapid deployment.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Figma className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Figma Designs</h3>
                                <p className="text-gray-300">Complete design systems with components, styles, and prototypes</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Globe className="h-12 w-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Live Demos</h3>
                                <p className="text-gray-300">Interactive previews deployed on modern hosting platforms</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Code className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Source Code</h3>
                                <p className="text-gray-300">Clean, documented code ready for customization and deployment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-6 bg-white border-b top-16 z-40 backdrop-blur-md bg-white/95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search templates, technologies..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Filter className="h-5 w-5 text-gray-600" />
                                <span className="text-gray-600 font-medium">Category:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveFilter(category)}
                                        className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${activeFilter === category
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Templates Grid - Two Column Cards */}
            <section className="py-10 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {filteredTemplates.length} Template{filteredTemplates.length !== 1 ? 's' : ''} Found
                        </h2>
                        <p className="text-gray-600">
                            {activeFilter !== 'All' && `Filtered by ${activeFilter} • `}
                            Professional templates ready for production
                        </p>
                    </div>

                    {/* Desktop: 2 cards per row, Mobile: 1 card per row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredTemplates.map((template) => (
                            <div
                                key={template.id}
                                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 flex flex-col lg:flex-row"
                            >
                                {/* Left Side: Image */}
                                <div className="w-full lg:w-2/5 relative">
                                    <img
                                        src={template.image}
                                        alt={template.title}
                                        className="w-full h-full object-cover lg:aspect-[9/16] group-hover:scale-105 transition-transform duration-300"
                                    />

                                    {/* Overlay Buttons */}
                                    

                                    {/* Feature Icons + Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriceColor(template.price)}`}>{template.price}</span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(template.complexity)}`}>{template.complexity}</span>
                                    </div>
                                    <div className="absolute top-4 right-4 flex space-x-1">
                                        {template.responsive && (
                                            <div className="bg-green-500 p-1 rounded-full">
                                                <Smartphone className="h-3 w-3 text-white" />
                                            </div>
                                        )}
                                        {template.darkMode && (
                                            <div className="bg-gray-800 p-1 rounded-full">
                                                <Monitor className="h-3 w-3 text-white" />
                                            </div>
                                        )}
                                        {template.animations && (
                                            <div className="bg-purple-500 p-1 rounded-full">
                                                <Zap className="h-3 w-3 text-white" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="w-full lg:w-3/5 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">{template.title}</h3>
                                                <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">{template.category}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                                <span className="text-sm font-medium text-gray-700">{template.rating}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4 text-sm">{template.description}</p>

                                        {/* Technologies */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Technologies:</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {template.technologies.slice(0, 3).map((tech, i) => (
                                                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">{tech}</span>
                                                ))}
                                                {template.technologies.length > 3 && (
                                                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">+{template.technologies.length - 3} more</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Key Features (Optional) */}
                                        {template.features && (
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-900 mb-1">Key Features:</h4>
                                                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                                    {template.features.slice(0, 4).map((f, i) => (
                                                        <li key={i} className="flex items-center">
                                                            <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                                                            {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                                            <div>
                                                <Download className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                                                <div className="text-sm font-semibold">{template.downloads.toLocaleString()}</div>
                                                <div className="text-xs text-gray-500">Downloads</div>
                                            </div>
                                            <div>
                                                <Clock className="h-4 w-4 text-orange-600 mx-auto mb-1" />
                                                <div className="text-sm font-semibold">{template.buildTime}</div>
                                                <div className="text-xs text-gray-500">Build Time</div>
                                            </div>
                                            <div>
                                                <TrendingUp className="h-4 w-4 text-green-600 mx-auto mb-1" />
                                                <div className="text-sm font-semibold">{template.performanceScore}%</div>
                                                <div className="text-xs text-gray-500">Performance</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-2 mt-4">
                                        <a href={template.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-1 text-sm">
                                            <Globe className="h-4 w-4" />
                                            <span>Demo</span>
                                        </a>
                                        {/* <a href={template.figmaUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-700 px-3 py-2 rounded-xl font-semibold hover:bg-gray-200 flex items-center space-x-1 text-sm">
                                            <Figma className="h-4 w-4" />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Template Performance</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our templates are built for performance, scalability, and developer experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "50+", label: "Premium Templates", icon: <Layers className="h-6 w-6" /> },
                            { number: "10K+", label: "Total Downloads", icon: <Download className="h-6 w-6" /> },
                            { number: "4.8/5", label: "Average Rating", icon: <Star className="h-6 w-6" /> },
                            { number: "99%", label: "Performance Score", icon: <TrendingUp className="h-6 w-6" /> }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-4">
                                    <div className="text-blue-600 mb-4 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <Rocket className="h-16 w-16 text-white mx-auto mb-8" />
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Need a Custom Template?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Can't find exactly what you're looking for? Let our team create a custom template
                            tailored to your specific needs and brand requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 group"
                            >
                                Request Custom Template
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </a>
                            <a
                                href="/portfolio"
                                className="inline-flex items-center text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Templates;