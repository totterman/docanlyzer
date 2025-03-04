/* eslint-disable jsx-a11y/anchor-is-valid */
import { LANGUAGES } from '../locales';
import { useTranslation } from 'react-i18next';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

/*
 * Header includes functions for user login/logout and language selection
 */
export function Header() {
  const { i18n, t } = useTranslation();

  function onChangeLang(e: React.ChangeEvent<HTMLSelectElement>) {
    const langcode = e.target.value;
    i18n.changeLanguage(langcode);
  }

  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center sticky top-0 h-12 bg-sky-700">
        <div className="flex-shrink-0 ml-24 px-4 pt-2 h-12 bg-sky-700 cursor-pointer">
          <a data-tooltip-id='header-tt' data-tooltip-content={t("ttHomepage")}>
          <Link to="">
            <span className=" font-medium text-2xl text-amber-500">{t('title')}</span>
            </Link>
            </a>
        </div>

        <nav className="flex items-baseline mr-2">
          <MenuItem to="schema">{t('schema')}</MenuItem>
          <MenuItem to="explain">{t('explain')}</MenuItem>

          <div className="text-white no-underline p-1 pb-0.5">

            <select
              className="appearance-none text-white border border-sky-700  bg-sky-700 hover:cursor-pointer"
              defaultValue={i18n.language}
              onChange={onChangeLang}
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </nav>
        <Tooltip id="header-tt" />
      </header>
    </div>
  );
}
 