import mockData from '@/data/mockData.json';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
  views: number;
  author: {
    name: string;
    username: string;
    avatar: string;
    isPro: boolean;
    isTeam: boolean;
  };
  tags: string[];
  category: string;
  createdAt: string;
  colors: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface SortOption {
  id: string;
  name: string;
}

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getCategories(): Promise<Category[]> {
  await delay(100);
  return mockData.categories;
}

export async function getPopularTags(): Promise<string[]> {
  await delay(100);
  return mockData.popularTags;
}

export async function getSortOptions(): Promise<SortOption[]> {
  await delay(100);
  return mockData.sortOptions;
}

export async function getProjects(params?: {
  category?: string;
  search?: string;
  sortBy?: string;
  limit?: number;
  offset?: number;
}): Promise<{
  projects: Project[];
  total: number;
  hasMore: boolean;
}> {
  await delay(300);
  
  let filteredProjects = [...mockData.projects];
  
  // Filter by category
  if (params?.category && params.category !== 'popular' && params.category !== 'discover') {
    filteredProjects = filteredProjects.filter(project => 
      project.category === params.category
    );
  }
  
  // Filter by search
  if (params?.search) {
    const searchLower = params.search.toLowerCase();
    filteredProjects = filteredProjects.filter(project =>
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
      project.author.name.toLowerCase().includes(searchLower)
    );
  }
  
  // Sort projects
  if (params?.sortBy) {
    switch (params.sortBy) {
      case 'recent':
        filteredProjects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'liked':
        filteredProjects.sort((a, b) => b.likes - a.likes);
        break;
      case 'viewed':
        filteredProjects.sort((a, b) => b.views - a.views);
        break;
      case 'popular':
      default:
        // Default popular sort (combination of likes and views)
        filteredProjects.sort((a, b) => (b.likes + b.views / 100) - (a.likes + a.views / 100));
        break;
    }
  }
  
  const limit = params?.limit || 12;
  const offset = params?.offset || 0;
  
  const paginatedProjects = filteredProjects.slice(offset, offset + limit);
  const hasMore = offset + limit < filteredProjects.length;
  
  return {
    projects: paginatedProjects,
    total: filteredProjects.length,
    hasMore
  };
}

export async function getProjectsByTag(tag: string): Promise<Project[]> {
  await delay(200);
  return mockData.projects.filter(project =>
    project.tags.some(projectTag => 
      projectTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

export async function likeProject(projectId: number): Promise<{ success: boolean; likes: number }> {
  await delay(150);
  // In a real app, this would update the database
  const project = mockData.projects.find(p => p.id === projectId);
  if (project) {
    project.likes += 1;
    return { success: true, likes: project.likes };
  }
  return { success: false, likes: 0 };
}

export async function searchProjects(query: string): Promise<Project[]> {
  await delay(250);
  
  if (!query.trim()) {
    return [];
  }
  
  const searchLower = query.toLowerCase();
  return mockData.projects.filter(project =>
    project.title.toLowerCase().includes(searchLower) ||
    project.description.toLowerCase().includes(searchLower) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
    project.author.name.toLowerCase().includes(searchLower)
  );
}

// Format numbers for display (e.g., 1200 -> 1.2k)
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  
  if (diffInHours < 24) {
    return Math.floor(diffInHours) + 'h ago';
  } else if (diffInHours < 24 * 7) {
    return Math.floor(diffInHours / 24) + 'd ago';
  } else if (diffInHours < 24 * 30) {
    return Math.floor(diffInHours / (24 * 7)) + 'w ago';
  } else {
    return Math.floor(diffInHours / (24 * 30)) + 'mo ago';
  }
}
