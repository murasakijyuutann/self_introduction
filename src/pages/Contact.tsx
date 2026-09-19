import type { FormEvent } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/Reveal'

export default function Contact() {
  const { t } = useTranslation()
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.current) return

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      toast.success(t('contact.toast.success'))
      form.current?.reset()
    } catch (error) {
      console.error('Email send failed:', error)
      toast.error(t('contact.toast.error'))
    }
  }

  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            {t('contact.eyebrow')}
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            {t('contact.heading')}
          </h1>
        </Reveal>

        <Reveal index={2}>
          <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-muted">
            {t('contact.intro')}
          </p>
        </Reveal>

        <Reveal index={3} className="mt-10 max-w-[520px] md:mt-12">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <Input
              type="text"
              name="user_name"
              placeholder={t('contact.form.name')}
              required
              className="h-11 rounded-[4px] border-rule px-3"
            />
            <Input
              type="email"
              name="user_email"
              placeholder={t('contact.form.email')}
              required
              className="h-11 rounded-[4px] border-rule px-3"
            />
            <Input
              type="text"
              name="user_phone"
              placeholder={t('contact.form.phone')}
              className="h-11 rounded-[4px] border-rule px-3"
            />
            <Textarea
              name="message"
              placeholder={t('contact.form.message')}
              required
              rows={6}
              className="rounded-[4px] border-rule px-3 py-2"
            />
            <Button
              type="submit"
              className="mt-2 self-start rounded-[4px] font-mono text-xs uppercase tracking-[0.04em]"
            >
              {t('contact.form.submit')}
            </Button>
          </form>
        </Reveal>
      </section>
    </div>
  )
}
