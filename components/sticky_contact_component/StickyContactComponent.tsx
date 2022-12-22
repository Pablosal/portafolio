import * as React from 'react';
import IconComponent from '../icon_container_component/IconContainerComponent';
import LinkedinIcon from '/public/icons/linkedin-svgrepo-com.svg';
import GithubIcon from '/public/icons/github-svgrepo-com.svg';
import EmailIcon from '/public/icons/email-svgrepo-com.svg';
const StickyContactComponent = () => {
  return (
    <div className="h-[100vh] rounded-[12px] w-[220px] center-verticaly">
      <div className="center-verticaly h-3/6  gap-6">
        <IconComponent path="https://www.linkedin.com/in/sergio-pablo-salgado/">
          <LinkedinIcon />
        </IconComponent>
        <IconComponent path="https://github.com/Pablosal">
          <GithubIcon  />
        </IconComponent>
        <IconComponent path="https://www.linkedin.com/in/sergio-pablo-salgado/" >
          <EmailIcon/>
        </IconComponent>
      </div>
    </div>
  );
};

export default StickyContactComponent;
