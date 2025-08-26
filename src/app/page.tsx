
'use client';

import { useState, useEffect } from 'react';
import { getProjects, getCategories, getPopularTags, formatNumber, Project, Category } from '@/lib/api';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [popularTags, setPopularTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy] = useState('popular');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSortDropdown(false);
    };

    if (showSortDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSortDropdown]);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        const [projectsData, categoriesData, tagsData] = await Promise.all([
          getProjects({ category: selectedCategory, sortBy }),
          getCategories(),
          getPopularTags()
        ]);
        
        setProjects(projectsData.projects);
        setCategories(categoriesData);
        setPopularTags(tagsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [selectedCategory, sortBy]);

  // Handle search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    try {
      const result = await getProjects({ search: searchQuery, sortBy });
      setProjects(result.projects);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
  };

  // Handle tag click
  const handleTagClick = async (tag: string) => {
    setLoading(true);
    setSearchQuery(tag);
    try {
      const result = await getProjects({ search: tag, sortBy });
      setProjects(result.projects);
    } catch (error) {
      console.error('Error filtering by tag:', error);
    } finally {
      setLoading(false);
    }
  };

  // Project Card Component
  const ProjectCard = ({ project }: { project: Project }) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(project.likes);

    const handleLike = async () => {
      if (liked) return; // Prevent multiple likes
      
      setLiked(true);
      setLikesCount(prev => prev + 1);
      
      // In a real app, you would call the API
      // await likeProject(project.id);
    };

    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[4/3] relative overflow-hidden">
          <div 
            className="w-full h-full flex items-center justify-center text-white font-semibold text-lg"
            style={{ 
              background: project.colors.length > 1 
                ? `linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]})` 
                : project.colors[0] 
            }}
          >
            {project.title}
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={handleLike}
              className={`p-2 rounded-full ${liked ? 'bg-pink-500 text-white' : 'bg-white text-gray-600'} shadow-lg hover:scale-110 transition-transform`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">
                  {project.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{project.author.name}</p>
                {(project.author.isPro || project.author.isTeam) && (
                  <span className={`text-xs px-2 py-1 rounded uppercase font-bold ${
                    project.author.isPro ? 'bg-pink-500 text-white' : 'bg-gray-500 text-white'
                  }`}>
                    {project.author.isPro ? 'PRO' : 'TEAM'}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <svg className={`w-4 h-4 ${liked ? 'text-pink-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">{formatNumber(likesCount)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">{formatNumber(project.views)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-20">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight mb-6">
                Discover the{" "}
                <span className="block">World&apos;s Top Designers</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Explore work from the most talented and accomplished designers ready to take on your next project.
              </p>

              {/* Tab Navigation */}
              <div className="flex items-center mb-8">
                <div className="flex bg-gray-100 rounded-full p-1">
                  <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    Shots
                  </button>
                  <button className="flex items-center px-4 py-2 text-gray-600 text-sm font-medium hover:text-gray-900">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Designers
                  </button>
                  <button className="flex items-center px-4 py-2 text-gray-600 text-sm font-medium hover:text-gray-900">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    Services
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative mb-8">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="What type of design are you interested in?"
                    className="w-full px-6 py-4 text-lg border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-2 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Popular Tags */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-gray-600 font-medium">Popular:</span>
                <div className="flex flex-wrap gap-2">
                  {popularTags.slice(0, 6).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl p-8 lg:p-12 overflow-hidden min-h-[300px] lg:min-h-[400px]">
                <div className="relative z-10 h-full">
                  {/* Sun */}
                  <div className="absolute top-6 lg:top-12 right-6 lg:right-12 w-14 h-14 lg:w-20 lg:h-20 bg-yellow-400 rounded-full shadow-lg"></div>
                  
                  {/* Curved path/orbit */}
                  <div className="absolute top-16 lg:top-24 left-8 lg:left-16 w-32 lg:w-48 h-16 lg:h-24">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                      <path d="M 10 50 Q 100 10 190 50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                    </svg>
                  </div>
                  
                  {/* Mountains - More detailed */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 400 160" className="w-full h-32 lg:h-40">
                      {/* Back mountains */}
                      <polygon points="0,160 80,60 160,100 240,40 320,80 400,90 400,160" fill="#2563eb" opacity="0.7" />
                      {/* Front mountains */}
                      <polygon points="0,160 60,80 140,120 220,70 300,110 380,100 400,160" fill="#3b82f6" opacity="0.8" />
                      {/* Foreground hills */}
                      <polygon points="0,160 100,130 200,140 300,135 400,145 400,160" fill="#1e40af" opacity="0.9" />
                    </svg>
                  </div>
                  
                  {/* Trees - More varied */}
                  <div className="absolute bottom-16 lg:bottom-20 left-6 lg:left-10">
                    <div className="w-2 h-4 lg:w-3 lg:h-6 bg-amber-700 rounded-sm"></div>
                    <div className="w-4 h-6 lg:w-6 lg:h-8 bg-green-700 rounded-full -mt-2"></div>
                  </div>
                  <div className="absolute bottom-20 lg:bottom-24 right-12 lg:right-16">
                    <div className="w-2 h-5 lg:w-3 lg:h-7 bg-amber-700 rounded-sm"></div>
                    <div className="w-5 h-7 lg:w-7 lg:h-10 bg-green-700 rounded-full -mt-2"></div>
                  </div>
                  <div className="absolute bottom-14 lg:bottom-18 right-24 lg:right-32">
                    <div className="w-1.5 h-3 lg:w-2 lg:h-5 bg-amber-700 rounded-sm"></div>
                    <div className="w-3 h-5 lg:w-5 lg:h-7 bg-green-700 rounded-full -mt-1"></div>
                  </div>
                  <div className="absolute bottom-18 lg:bottom-22 left-16 lg:left-24">
                    <div className="w-2 h-4 lg:w-2.5 lg:h-6 bg-amber-700 rounded-sm"></div>
                    <div className="w-4 h-6 lg:w-6 lg:h-8 bg-green-700 rounded-full -mt-2"></div>
                  </div>
                  
                  {/* Person with fishing rod - More detailed */}
                  <div className="absolute bottom-24 lg:bottom-28 left-1/2 transform -translate-x-1/2">
                    {/* Person body */}
                    <div className="w-3 h-6 lg:w-4 lg:h-8 bg-orange-500 rounded-full"></div>
                    {/* Hat */}
                    <div className="w-4 h-2 lg:w-5 lg:h-3 bg-orange-600 rounded-full -mt-1 -ml-0.5"></div>
                    {/* Fishing rod */}
                    <div className="w-0.5 h-12 lg:w-1 lg:h-16 bg-amber-800 transform rotate-12 origin-bottom absolute -right-1 top-2"></div>
                    {/* Fishing line */}
                    <div className="w-px h-8 lg:h-12 bg-gray-300 transform rotate-12 origin-top absolute right-2 lg:right-3 top-0"></div>
                  </div>
                  
                  {/* Water reflection */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 lg:h-12 bg-gradient-to-t from-blue-400 to-transparent opacity-30"></div>
                </div>
                
                {/* MUTI Badge */}
                <div className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6 bg-white rounded-full p-2 lg:p-3 shadow-lg">
                  <div className="flex items-center space-x-1 lg:space-x-2">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs lg:text-sm font-bold">M</span>
                    </div>
                    <span className="text-xs lg:text-sm font-medium">MUTI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-8 overflow-x-auto">
              <div className="relative">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSortDropdown(!showSortDropdown);
                  }}
                  className="flex items-center text-gray-900 font-medium whitespace-nowrap"
                >
                  {categories.find(c => c.id === selectedCategory)?.name || 'Popular'}
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showSortDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          handleCategoryChange(category.id);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                          selectedCategory === category.id ? 'text-pink-500 bg-pink-50' : 'text-gray-700'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="hidden lg:flex items-center space-x-8">
                {categories.slice(1, 9).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === category.id 
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                  Sign up to continue
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
