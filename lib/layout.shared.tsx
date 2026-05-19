import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import Image from 'next/image';
import { i18n } from './i18n';
import { appName, gitConfig } from './shared';

export const i18nUI = defineI18nUI(i18n, {
  zh: {
    displayName: '简体中文',
    search: '搜索文档',
  },
  en: {
    displayName: 'English',
  },
});

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      url: locale === i18n.defaultLanguage ? '' : `/${locale}`,
      title: (
        <>
          <Image src="/logo.png" alt={appName} width={28} height={28} className="rounded-full" unoptimized />
          <span className="font-medium">{appName}</span>
        </>
      ),
    },
    i18n: true,
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
