import React from 'react';

export default async function Projects() {
  // Fetch repos from GitHub API for Zenous07
  let repos = [];
  try {
    const res = await fetch('https://api.github.com/users/Zenous07/repos?sort=updated&per_page=100', {
      next: { revalidate: 3600 } // Cache for 1 hour to prevent rate limiting
    });
    
    if (res.ok) {
      repos = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch Github repos:", error);
  }

  return (
    <section className="w-full min-h-screen bg-[#050505] p-8 md:p-16 lg:p-24 text-white">
      <h2 className="text-3xl font-bold mb-8">GitHub Repositories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.length > 0 ? (
          repos.map((repo: any) => (
            <a 
              key={repo.id} 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 border border-gray-800 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {repo.description || 'No description provided.'}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                  {repo.language || 'Code'}
                </span>
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
            </a>
          ))
        ) : (
          <div className="text-gray-500">Loading or unable to fetch repositories...</div>
        )}
      </div>
    </section>
  );
}
