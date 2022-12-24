import * as React from 'react';
import IconComponent from '../icon_container_component/IconContainerComponent';
import LinkedinIcon from '/public/icons/linkedin-svgrepo-com.svg';
import GithubIcon from '/public/icons/github-svgrepo-com.svg';
import EmailIcon from '/public/icons/email-svgrepo-com.svg';
import UseModal from '../../utils/hooks/useModal';
import ContactForm from '../contact_form/ContactForm';
const StickyContactComponent = () => {
  const [openModal, RenderModalSection, openModalToScreen] = UseModal();
  return (
    <>
      {RenderModalSection(
        openModal,
        () => (
          <ContactForm />
        ),
        { title: 'Hablemos', showFooter: false }
      )}
      <div className="sm:h-[100vh]  sm:w-[220px] center-verticaly  w-[56px]">
        <div className="center-verticaly h-3/6  gap-6">
          <IconComponent path="https://www.linkedin.com/in/sergio-pablo-salgado/">
            <LinkedinIcon />
          </IconComponent>
          <IconComponent path="https://github.com/Pablosal">
            <GithubIcon />
          </IconComponent>
          <IconComponent>
            <EmailIcon onClick={openModalToScreen} />
          </IconComponent>
        </div>
      </div>
    </>
  );
};

export default StickyContactComponent;
