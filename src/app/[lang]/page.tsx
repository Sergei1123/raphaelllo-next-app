import { getT } from '@/src/i18n/getT'

type Props = {
  params: Promise<{ lang: string }>
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params
  const { t } = await getT('common', lang)

  const itemCount = 5

  return (
    <main>
      <h1>{t('welcome', { name: 'User' })}</h1>
      <p>{t('items', { count: itemCount })}</p>
      <p dangerouslySetInnerHTML={{ 
        __html: t('description', { count: itemCount })
          .replace('<bold>', '<strong>')
          .replace('</bold>', '</strong>') 
      }} />
    </main>
  )
}