import type { FormEvent } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/Reveal'

export default function Contact() {
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
      toast.success("Thanks for reaching out — I'll get back to you soon.")
      form.current?.reset()
    } catch (error) {
      console.error('Email send failed:', error)
      toast.error('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            Case File No. 05 — Contact
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            Get in touch
          </h1>
        </Reveal>

        <Reveal index={2}>
          <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-muted">
            Have a role, a project, or just a question? Send a message and I&apos;ll reply
            directly.
          </p>
        </Reveal>

        <Reveal index={3} className="mt-10 max-w-[520px] md:mt-12">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <Input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className="h-11 rounded-[4px] border-rule px-3"
            />
            <Input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
              className="h-11 rounded-[4px] border-rule px-3"
            />
            <Input
              type="text"
              name="user_phone"
              placeholder="Your phone (optional)"
              className="h-11 rounded-[4px] border-rule px-3"
            />
            <Textarea
              name="message"
              placeholder="Write your message here..."
              required
              rows={6}
              className="rounded-[4px] border-rule px-3 py-2"
            />
            <Button
              type="submit"
              className="mt-2 self-start rounded-[4px] font-mono text-xs uppercase tracking-[0.04em]"
            >
              Send message
            </Button>
          </form>
        </Reveal>
      </section>
    </div>
  )
}
