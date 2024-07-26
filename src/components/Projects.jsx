"use client";
import React from 'react';
import ProjectTabs from './ProjectTabs';
import ProjectIndustries from './ProjectIndustries';
import ProjectDiscuss from './ProjectDiscuss';
import ProjectDevStages from './ProjectDevStages';
import ProjectTeam from './ProjectTeam';
import Faq from './Faq';

const Projects = () => {
  return (
    <div className='bg-graybackground min-h-screen pt-10'>
      <div className='px-20'>
        <ProjectIndustries/>
      </div>
      <div className='px-20'>
        <ProjectTabs/>
      </div>
      <div>
        <ProjectDiscuss/>
      </div>
      <div className='px-20 bg-white'>
        <ProjectDevStages/>
      </div>
      <div>
        <ProjectTeam/>
      </div>
      <div>
        <Faq/>
      </div>
    </div>
  );
}

export default Projects;
