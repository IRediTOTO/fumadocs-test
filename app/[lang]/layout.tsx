import { RootProvider } from 'fumadocs-ui/provider/next';
import { CredentialInitializer } from '@/components/credential-initializer';
import { i18nUI } from '@/lib/layout.shared';
import type { Metadata } from 'next';
import '../global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://collectui.youquxing.com'),
  icons: '/logo.png',
};

export default async function Layout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider i18n={i18nUI.provider(lang)}>
          <CredentialInitializer>{children}</CredentialInitializer>
        </RootProvider>
      </body>
    </html>
  );
}
