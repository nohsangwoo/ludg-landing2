
export default function Home() {
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
              <div className="relative mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="What type of design are you interested in?"
                    className="w-full px-6 py-4 text-lg border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <button className="absolute right-2 top-2 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-gray-600 font-medium">Popular:</span>
                <div className="flex flex-wrap gap-2">
                  {['dashboard', 'landing page', 'e-commerce', 'logo', 'card', 'icons'].map((tag) => (
                    <button
                      key={tag}
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
              <button className="flex items-center text-gray-900 font-medium whitespace-nowrap">
                Popular
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="hidden lg:flex items-center space-x-8">
                {['Discover', 'Animation', 'Branding', 'Illustration', 'Mobile', 'Print', 'Product Design', 'Typography', 'Web Design'].map((category) => (
                  <button
                    key={category}
                    className="text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap transition-colors"
                  >
                    {category}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Birdie Guild</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Type08</p>
                      <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded uppercase font-bold">PRO</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">81</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">10.2k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 relative flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">K</span>
                  </div>
                  <h3 className="text-white font-semibold">Kreatank logo 5.0</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Daniel Bodea</p>
                      <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded uppercase font-bold">PRO</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">93</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">15.1k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500 to-pink-500 relative flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Humanize</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Deividas Bielskis</p>
                      <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded uppercase font-bold">PRO</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">115</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">13.8k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 relative flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-700 mb-2">Your funds, full</div>
                  <div className="text-2xl font-bold text-purple-600">control, anytime.</div>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Emote</p>
                      <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded uppercase font-bold">TEAM</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">55</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">3.5k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Sign up to continue
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
