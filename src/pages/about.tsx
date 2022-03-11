import useTranslation from 'next-translate/useTranslation';

import { Main, Meta } from '@/components/common';

const About = () => {
  const { t } = useTranslation();
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <p>{t('about:title')}</p>
    </Main>
  );
};

export default About;
