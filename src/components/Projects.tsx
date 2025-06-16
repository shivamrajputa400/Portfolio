import React, { useState, useMemo } from 'react';
import { Code, ExternalLink, Github, Search, X, ChevronLeft, ChevronRight, Download, Heart, Folder } from 'lucide-react';

// Photo data structure
interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description?: string;
  tags: string[];
  aspectRatio: number;
}

type Category = 'all' | 'web' | 'mobile' | 'embedded' | 'design' | 'other';

// Sample project photos - replace with your actual project images
const projectPhotos: Photo[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Web Development Project',
    title: 'PORTFOLIO',
    category: 'web',
    description: 'Full-stack with React and Node.js',
    tags: ['react', 'nodejs', 'mongodb', 'stripe'],
    aspectRatio: 1.2
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'REACT App Interface',
    title: 'Task Management App',
    category: 'mobile',
    description: 'Cross-platform REACT app for productivity',
    tags: ['react-native', 'firebase', 'ui/ux'],
    aspectRatio: 0.75
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Embedded System Project',
    title: 'IoT Weather Station',
    category: 'embedded',
    description: 'Arduino-based weather monitoring system',
    tags: ['arduino', 'c++', 'sensors', 'iot'],
    aspectRatio: 1.3
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Web Application Dashboard',
    title: 'Analytics Dashboard',
    category: 'web',
    description: 'Real-time data visualization dashboard',
    tags: ['react', 'charts', 'api', 'dashboard'],
    aspectRatio: 1.5
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'CLI Design',
    title: 'Banking CLI',
    category: 'design',
    description: 'Modern banking application interface design',
    tags: ['PYTHON', 'tkinter', 'SQL'],
    aspectRatio: 0.8
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Database Management System',
    title: 'Inventory Management',
    category: 'web',
    description: 'Complete inventory tracking system',
    tags: ['mysql', 'php', 'bootstrap', 'crud'],
    aspectRatio: 1.1
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Embedded Circuit Board',
    title: 'Smart IRRIGATION Controller',
    category: 'embedded',
    description: 'Home automation control system',
    tags: ['ARDUINO', 'C++', 'BLYNK', 'automation'],
    aspectRatio: 1.0
  },
];

const categories = [
  { id: 'all' as const, label: 'All Projects', count: projectPhotos.length },
  { id: 'web' as const, label: 'Web Development', count: projectPhotos.filter(p => p.category === 'web').length },
  { id: 'embedded' as const, label: 'Embedded Systems', count: projectPhotos.filter(p => p.category === 'embedded').length },
  { id: 'other' as const, label: 'Other', count: projectPhotos.filter(p => p.category === 'other').length }
];

// Photo Card Component
const PhotoCard: React.FC<{ photo: Photo; onClick: () => void }> = ({ photo, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:border-green-500/50"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
          <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {photo.description}
          </p>
          
          {/* Category Badge */}
          <span className="inline-block mt-2 px-2 py-1 bg-green-500 text-xs font-medium rounded-full capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
            {photo.category}
          </span>
        </div>
        
        {/* Hover Icons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 bg-gray-900/80 rounded-full">
            <ExternalLink className="w-4 h-4 text-green-400" />
          </div>
          <div className="p-2 bg-gray-900/80 rounded-full">
            <Github className="w-4 h-4 text-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Photo Grid Component
const PhotoGrid: React.FC<{ photos: Photo[]; onPhotoClick: (photo: Photo, index: number) => void }> = ({ photos, onPhotoClick }) => {
  if (photos.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-500 mb-4">
          <Folder className="w-16 h-16 mx-auto" />
        </div>
        <p className="text-xl text-gray-400 mb-2">No projects found</p>
        <p className="text-gray-500">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {photos.map((photo, index) => (
        <div key={photo.id} className="break-inside-avoid">
          <PhotoCard
            photo={photo}
            onClick={() => onPhotoClick(photo, index)}
          />
        </div>
      ))}
    </div>
  );
};

// Photo Modal Component
const PhotoModal: React.FC<{
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalCount: number;
}> = ({ photo, isOpen, onClose, onNext, onPrevious, currentIndex, totalCount }) => {
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 max-w-7xl max-h-[90vh] mx-4 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">{photo.title}</h2>
            <p className="text-gray-400 mt-1">{photo.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {totalCount}
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative bg-gray-800">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full max-h-[70vh] object-contain"
          />
          
          {/* Navigation Buttons */}
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-900/90 hover:bg-gray-900 rounded-full shadow-lg transition-all duration-200 hover:scale-110 text-green-400"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-900/90 hover:bg-gray-900 rounded-full shadow-lg transition-all duration-200 hover:scale-110 text-green-400"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-800">
          <div className="flex flex-wrap gap-2">
            {photo.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm border border-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-green-400">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-green-400">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-green-400">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-green-400">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Projects Component
export const Projects = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter photos based on category and search query
  const filteredPhotos = useMemo(() => {
    let filtered = projectPhotos;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(photo => photo.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(photo => 
        photo.title.toLowerCase().includes(query) ||
        photo.description?.toLowerCase().includes(query) ||
        photo.tags.some(tag => tag.toLowerCase().includes(query)) ||
        photo.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const handlePhotoClick = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const handleNextPhoto = () => {
    const nextIndex = (selectedIndex + 1) % filteredPhotos.length;
    setSelectedIndex(nextIndex);
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePreviousPhoto = () => {
    const prevIndex = selectedIndex === 0 ? filteredPhotos.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="projects" className="py-20">
      <div className="space-y-2 mb-12 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700">
          <Code size={14} className="text-green-400 mr-2" />
          <span className="text-xs text-gray-300">Portfolio</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          My <span className="text-green-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          A showcase of my work spanning web development, mobile applications, embedded systems, and UI/UX design. 
          Each project represents a unique challenge and learning experience.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full pl-10 pr-10 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category.id
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
            }`}
          >
            {category.label}
            <span className="ml-2 text-sm opacity-75">({category.count})</span>
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <PhotoGrid
        photos={filteredPhotos}
        onPhotoClick={handlePhotoClick}
      />

      {/* Photo Modal */}
      <PhotoModal
        photo={selectedPhoto}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNextPhoto}
        onPrevious={handlePreviousPhoto}
        currentIndex={selectedIndex}
        totalCount={filteredPhotos.length}
      />
    </section>
  );
};