'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import i18next from './index'

export function useT(ns?: string) {
  const lang = useParams().lang

  useEffect(() => {
    if (!lang || typeof lang !== 'string') return
    if (i18next.resolvedLanguage === lang) return
    i18next.changeLanguage(lang)
  }, [lang])

  if (typeof lang !== 'string') {
    throw new Error('useT is only available inside [lang]')
  }

  return useTranslation(ns)
}