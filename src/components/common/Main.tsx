import { ReactNode } from 'react';

import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const { t } = useTranslation();

  const changeLanguage = async (langCode: string) => {
    await setLanguage(langCode);
  };

  return (
    <div className="px-1 w-full antialiased text-gray-700">
      {props.meta}

      <div className="mx-auto max-w-screen-md">
        <div className="border-b border-gray-300">
          <div className="pt-16 pb-8">
            <div className="text-3xl font-bold text-gray-900">
              {AppConfig.title}
            </div>
            <div className="text-xl">{AppConfig.description}</div>
          </div>
          <div>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link href="/">
                  <a className="text-gray-700 hover:text-gray-900 border-none">
                    {t('common:tab-home')}
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/about/">
                  <a className="text-gray-700 hover:text-gray-900 border-none">
                    {t('common:tab-about')}
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/pokemon/">
                  <a className="text-gray-700 hover:text-gray-900 border-none">
                    {t('common:tab-pokemon')}
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <a
                  className="text-gray-700 hover:text-gray-900 border-none"
                  href="https://github.com/ixartz/Next-js-Boilerplate"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <ul className="flex justify-end text-sml">
              {AppConfig.locales?.map((el: string, index: number) => (
                <li className="ml-2" key={index}>
                  <a href="#" onClick={() => changeLanguage(el)}>
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-5 text-xl content">{props.children}</div>

        <div className="py-8 text-sm text-center border-t border-gray-300">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by{' '}
          <a
            href="https://github.com/CruzNadin"
            target="_blank"
            rel="noreferrer"
          >
            CruzNadin - Kadir Barcın
          </a>
        </div>
      </div>
    </div>
  );
};

export { Main };
