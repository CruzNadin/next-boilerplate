import useTranslation from 'next-translate/useTranslation';

import { Main, Meta } from '@/components/common';
import styles from '@/styles/pages/Home.module.css';

const Index = () => {
  const { t } = useTranslation();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div>
        <span className={styles.span}>
          {t('home:title', { name: 'Developer' })}
        </span>

        <ul>
          <li>⚙️ React Redux</li>
          <li>🌎 Axios</li>
          <li>🔥 Next.js for Static Site Generator</li>
          <li>🎨 Integrate with Tailwind CSS</li>
          <li>
            💅 PostCSS for processing Tailwind CSS and integrated to styled-jsx
          </li>
          <li>🎉 Type checking TypeScript</li>
          <li>✅ Strict Mode for TypeScript and React 17</li>
          <li>
            ✏️ Linter with ESLint (default NextJS, NextJS Core Web Vitals,
            Tailwind CSS and Airbnb configuration)
          </li>
          <li>💡 Absolute Imports</li>
          <li>🛠 Code Formatter with Prettier</li>
          <li>🦊 Husky for Git Hooks</li>
          <li>🚫 Lint-staged for running linters on Git staged files</li>
          <li>
            🗂 VSCode configuration: Debug, Settings, Tasks and extension for
            PostCSS, ESLint, Prettier, TypeScript
          </li>
          <li>🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO</li>
          <li>⚙️ Bundler Analyzer</li>
          <li>
            🖱️ One click deployment with Vercel or Netlify (or manual deployment
            to any hosting services)
          </li>
          <li>🌈 Include a FREE minimalist theme</li>
          <li>💯 Maximize lighthouse score</li>
          <li>Built-in feature from Next.js:</li>
          <li>☕ Minify HTML & CSS</li>
          <li>💨 Live reload</li>
          <li> ✅ Cache busting Philosophy Minimal code SEO-friendly</li>{' '}
          <li>🚀 Production-ready</li>
        </ul>
      </div>
    </Main>
  );
};

export default Index;
