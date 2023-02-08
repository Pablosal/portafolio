import * as React from 'react';
import languages from '../../utils/data/languages.json';
const ExperienceLayout = () => {
  return (
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full">
      {languages.english.experience.map((job) => (
        <div key={job.title} className="p-6 space-y-6">
          <h3 className="mb-4 font-extrabold tracking-tight leading-none text-gray-900 text-2xl dark:text-white">
            {job.title}
          </h3>
          <h4 className="mb-4 font-bold tracking-tight leading-none text-gray-900 text-lg dark:text-white">
            {job.subtitle}
          </h4>
          <h5 className="mb-4 font-bold tracking-tight leading-none text-gray-900 text-md dark:text-white">
            Responsabilities
          </h5>
          <ul>
            {job.responsabilities.map((responsability) => (
              <li
                className="text-base leading-relaxed text-gray-100 dark:text-gray-400"
                key={responsability}
              >
                {responsability}
              </li>
            ))}
          </ul>
          <h5 className="mb-4 font-bold tracking-tight leading-none text-gray-900 text-md dark:text-white">
            Key Archivements
          </h5>
          <ul>
            {job.keyPoints.map((keyPoint) => (
              <li
                className="text-base leading-relaxed text-gray-100 dark:text-gray-400"
                key={keyPoint}
              >
                {keyPoint}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceLayout;
