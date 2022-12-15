import * as React from 'react';
import IconComponent from '../icon_container_component/IconContainerComponent';
import LinkedinIcon from '/public/icons/linkedin-svgrepo-com.svg';
import GithubIcon from '/public/icons/github-svgrepo-com.svg';
import EmailIcon from '/public/icons/email-svgrepo-com.svg';
const StickyContactComponent = () => {
  return (
    <div className="h-[90vh] rounded-[12px] w-[220px] ">
      <div className="flex items-center flex-col h-3/6 justify-start gap-4" >
        <IconComponent path="https://www.linkedin.com/in/sergio-pablo-salgado/">
          <LinkedinIcon />
        </IconComponent>
        <IconComponent path="https://github.com/Pablosal">
          <GithubIcon />
        </IconComponent>
        <IconComponent path="https://www.linkedin.com/in/sergio-pablo-salgado/">
          <EmailIcon />
        </IconComponent>
      </div>
    </div>
  );
};

export default StickyContactComponent;
