import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Stats from './components/Stats';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: 'Cubic',
      description: 'A romantic-drama novel that is uniquely fun in its own way, often revolving around the relationships of characters with different life experiences. The story follows the heroine, who is often the most talked-about.',
    },
    {
      title: 'Cubic II',
      description: 'The story follows a unique heroine with a strong personality and problem-solving skills, who gets involved in the world of Hong Kong\'s high society and must overcome challenges.',
    },
    {
      title: 'Cubic III',
      description: 'A romantic-drama novel that explores the complexities of relationships and personal growth, featuring a determined protagonist navigating through life\'s unexpected turns.',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <Stats />
          <div>
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;