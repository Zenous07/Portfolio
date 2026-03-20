import React from 'react';
import ProjectsClient from './projects-client';

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

  return <ProjectsClient repos={repos} />;
}
