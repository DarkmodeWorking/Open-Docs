'use client'

import React from 'react'
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitch,
  IconBrandReddit,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'

export function Footer() {
  const socialLinks = [
    { icon: IconBrandGithub, href: 'https://github.com', color: 'text-white' },
    { icon: IconBrandInstagram, href: 'https://instagram.com', color: 'text-pink-400' },
    { icon: IconBrandLinkedin, href: 'https://linkedin.com', color: 'text-blue-500' },
    { icon: IconBrandX, href: 'https://x.com', color: 'text-teal-400' },
    { icon: IconBrandYoutube, href: 'https://youtube.com', color: 'text-red-400' },
    { icon: IconBrandDiscord, href: 'https://discord.com', color: 'text-indigo-400' },
    { icon: IconBrandTwitch, href: 'https://twitch.tv', color: 'text-purple-400' },
    { icon: IconBrandReddit, href: 'https://reddit.com', color: 'text-orange-400' },
  ]

  return (
    <footer className='bg-black text-white pt-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 pb-20'>
        <div>
          <h3 className='text-lg font-semibold mb-2'>Organization</h3>
          <ul className='space-y-1 text-sm text-neutral-400'>
            <li><a href='/about' className='hover:text-indigo-400'>About</a></li>
            <li><a href='/blog' className='hover:text-indigo-400'>Blog</a></li>
            <li><a href='/team' className='hover:text-indigo-400'>Team</a></li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-2'>Community</h3>
          <ul className='space-y-1 text-sm text-neutral-400'>
            <li><a href='#' className='hover:text-indigo-400'>Community</a></li>
            <li><a href='#' className='hover:text-indigo-400'>Forum</a></li>
            <li><a href='#' className='hover:text-indigo-400'>Chat</a></li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-2'>Contribute</h3>
          <ul className='space-y-1 text-sm text-neutral-400'>
            <li><a href='#' className='hover:text-indigo-400'>Write Docs</a></li>
            <li><a href='#' className='hover:text-indigo-400'>Open an Issue</a></li>
            <li><a href='#' className='hover:text-indigo-400'>GitHub Repository</a></li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-2'>More</h3>
          <ul className='space-y-1 text-sm text-neutral-400'>
            <li><a href='#' className='hover:text-indigo-400'>Changelog</a></li>
            <li><a href='#' className='hover:text-indigo-400'>Roadmap</a></li>
            <li><a href='#' className='hover:text-indigo-400'>License</a></li>
          </ul>
        </div>

        <div className='hidden md:flex flex-col items-end justify-center text-xs text-neutral-500'>
          <div className='flex flex-col items-center'>
            <span className='mb-2'>Made using</span>
            <div className='flex gap-2'>
              <img src='/icons/web/next.svg' alt='Next.js' className='h-4' />
              <img src='/icons/web/tailwind.svg' alt='Tailwind CSS' className='h-4' />
              <img src='/icons/web/shadcn.svg' alt='ShadCN UI' className='h-4' />
              <img src='/icons/web/vercel.svg' alt='Vercel' className='h-4' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <div className='p-4 bg-neutral-900 rounded-3xl'>
          <div className='flex gap-4'>
            {socialLinks.map(({ icon: Icon, href, color }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -5 }}
                className='lg:w-10 lg:h-10 w-5 h-5 bg-neutral-800 rounded-full flex items-center justify-center'
              >
                <Icon size={20} className={color} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className='text-center text-neutral-500 text-xs py-6 border-t border-neutral-800 mt-8'>
        © {new Date().getFullYear()} OpenDocs by OpenNova. All rights reserved.
      </div>
    </footer>
  )
}

