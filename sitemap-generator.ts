import axios from 'axios';

export default async function getProjectRoutes() {
  try {
    // const response = await axios.get('https://api.sibisiddharth.me/api/projects?limit=1000');
    // const projects = response.data.data;
    
    // Hardcoded projects instead of fetching from API
    const projects = [
      { id: 'project1' },
      { id: 'project2' },
      { id: 'project3' },
      // add more if needed
    ];

    if (!Array.isArray(projects)) {
      return [];
    }

    // THIS IS THE FIX: We add the '/#' prefix to every project route.
    return projects.map(project => `/#/projects/${project.id}`);
  } catch (error) {
    console.warn('Sitemap: Failed to fetch dynamic routes.', error.message);
    return [];
  }
}
