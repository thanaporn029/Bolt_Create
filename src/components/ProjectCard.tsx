import React from 'react';
import { FileText } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <FileText className="w-8 h-8 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ProjectCard;