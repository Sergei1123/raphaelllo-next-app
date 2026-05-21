import { LANGUAGES } from '@/src/i18n/config'

type Props = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }))
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}