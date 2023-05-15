import React, { FC } from 'react';
import { ProjectWrapper } from './project.styled';

interface ProjectProps {}

const Project: FC<ProjectProps> = () => (
 <ProjectWrapper data-testid="Project">
    Project Component
 </ProjectWrapper>
);

export default Project;
