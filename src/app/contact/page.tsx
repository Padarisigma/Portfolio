"use client"
import React, { useEffect, useState } from 'react'
import { Github, InstagramIcon, Linkedin, Mail} from "lucide-react"
import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Meteors } from '@/components/magicui/meteors'
import { AnimatedList } from '@/components/magicui/animated-list'
import axios from 'axios'
import { ShineBorder } from '@/components/magicui/shine-border'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: '', isError: false })


  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendToTelegram = async (data: typeof formData) => {
    const botToken = '7588336997:AAGGJbsDMPuVX1EklFhAabKV__ZIW8IrMDU'
    const chatId = '1038701598'
    
    const text = `
      📩 Новое сообщение с сайта:
      👤 Имя: ${data.name}
      📧 Email: ${data.email}
      ✉️ Сообщение: ${data.message}
    `

    try {
      await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML'
        }
      )
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendToTelegram(formData)
      setNotification({
        show: true,
        message: 'Сообщение успешно отправлено!',
        isError: false
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setNotification({
        show: true,
        message: 'Ошибка при отправке сообщения',
        isError: true
      })
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setNotification({ show: false, message: '', isError: false }), 5000)
    }
  }

  if (!mounted) return null

  return <>
   {notification.show && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
        notification.isError ? 'bg-red-500' : 'bg-green-500'
      } text-white`}
    >
      {notification.message}
    </motion.div>
  )}  
        <section id="contact" className="w-[85%] relative overflow-hidden m-auto py-[100px]">
           <Meteors number={30} />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
              <p className="text-muted-foreground mb-6">
                I m currently available for freelance work and full-time positions. If you have a project that needs
                some creative touch, let s talk!
              </p>
              <AnimatedList>
              <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <span>doronshozoda.i@icloud.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <span>linkedin.com/in/yourname</span>
                </div> 
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-4 w-4" />
                   
                  </Button>
                  <span>github.com/padarisigma</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                  <InstagramIcon/>
                  </Button>
                  <span>instagram/padarisigma</span>
                </div>
              </AnimatedList>
              
            </div>
            
            <Card className='relative'>
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I ll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                       type="text"
                       required
                       value={formData.name}
                         onChange={handleChange}
                        placeholder="Your name"
                        className="w-full p-2 rounded-md border border-input bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                        id="email"
                        placeholder="Your email"
                        className="w-full p-2 rounded-md border border-input bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="w-full p-2 rounded-md border border-input bg-background resize-none"
                    />
                  </div>
                  <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-6 text-lg font-medium transition-all `}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Отправка...
                </span>
              ) : (
                'Отправить сообщение'
              )}
            </Button>
                </form>
              </CardContent>
            </Card>
           
          </div>
        </section>
  </>
 
  
}

export default Contact