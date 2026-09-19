/** Static résumé / CV files under `public/files/`. */
export const RESUME_DOWNLOADS = [
  {
    id: 'resume',
    href: `/files/${encodeURIComponent('WooSunmyung様_履歴書 0428.pdf')}`,
    labelKey: 'home.downloadResume',
  },
  {
    id: 'cv',
    href: `/files/${encodeURIComponent('禹 善明 (ウ ソンミョン)_職務経歴書_0827.pdf')}`,
    labelKey: 'home.downloadCv',
  },
] as const
