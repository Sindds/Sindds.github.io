import React from 'react';
import TodoApp from '../components/TodoApp';
import WeatherApp from '../components/WeatherApp';
import PasswordGenerator from '../components/PasswordGenerator';

const Portfolio = () => {
  const projects = [
    { 
      id: 1, 
      component: <TodoApp />
    },
    { 
      id: 2, 
      component: <WeatherApp />
    },
    { 
      id: 3, 
      component: <PasswordGenerator />
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Портфолио</h1>
        
        <div className="flex flex-col gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="">
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="p-4 w-full">
                {project.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;