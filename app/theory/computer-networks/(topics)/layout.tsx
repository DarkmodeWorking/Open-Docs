'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPUTERNETWORKS_TOPICS } from '@/lib/private/computernetworksTopics'

export default function TopicsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const groupedTopics = [
    {
      header: 'Introduction',
      topics: [
        { slug: 'introduction', title: 'Introduction' },
        { slug: 'history', title: 'History of Networks' },
        { slug: 'network-types', title: 'Network Types' },
        { slug: 'network-topologies', title: 'Network Topologies' },
        { slug: 'network-components', title: 'Network Components' },
      ],
    }
  ]

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (header: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [header]: !prev[header],
    }))
  }

  return (
    <div className='flex bg-black min-h-screen'>
      <aside className='w-64 hidden md:flex bg-black pt-20 text-white border-r-2 border-[#AA00FF]/50 sticky top-0 h-screen md:flex-col'>
        <div className='p-5'>
          <Link href='/theory/computer-networks'>
            <h2 className='text-3xl font-bold text-center text-[#AA00FF]'>Computer Networks</h2>
          </Link>
        </div>

        <div className='flex-1 overflow-y-auto p-5 sidebar-scroll'>
          {groupedTopics.map(({ header, topics }) => {
            const isOpen = openSections[header]

            return (
              <div key={header} className='mb-4'>
                <button
                  onClick={() => toggleSection(header)}
                  className='flex justify-between items-center w-full text-left text-[#AA00FF] text-lg font-semibold mb-1 border-b border-[#AA00FF]/30 pb-1 hover:text-[#cc67ff] transition cursor-pointer'
                >
                  {header}
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronRight className='w-5 h-5 text-[#AA00FF]' />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key='content'
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className='overflow-hidden'
                    >
                      <ul className='space-y-1 mt-2'>
                        {topics.map(({ slug, title }) => {
                          const href = `/theory/computer-networks/${slug}`
                          const active = pathname === href

                          return (
                            <li key={slug}>
                              <Link
                                href={href}
                                className={`block px-3 py-2 rounded-lg transition ${active ? 'bg-neutral-800' : 'hover:bg-neutral-700'
                                  }`}
                              >
                                {title}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </aside>

      <main className='flex-1 bg-black text-white p-0 overflow-y-auto'>
        {children}

        {(() => {
          const segments = pathname.split('/').filter(Boolean)
          const currentSlug = segments[segments.length - 1]
          const basePath = '/' + segments.slice(0, -1).join('/')

          const currentIndex = COMPUTERNETWORKS_TOPICS.indexOf(currentSlug)

          const prevSlug =
            currentIndex > 0 ? COMPUTERNETWORKS_TOPICS[currentIndex - 1] : null

          const nextSlug =
            currentIndex >= 0 && currentIndex < COMPUTERNETWORKS_TOPICS.length - 1
              ? COMPUTERNETWORKS_TOPICS[currentIndex + 1]
              : null

          return (
            <motion.div
              className='flex justify-center gap-6 pt-20'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {prevSlug && (
                <Link href={`${basePath}/${prevSlug}`}>
                  <button
                    className='cursor-pointer font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:-translate-x-2'
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid #AA00FF',
                    }}
                  >
                    ← View Previous
                  </button>
                </Link>
              )}

              {nextSlug && (
                <Link href={`${basePath}/${nextSlug}`}>
                  <button
                    className='cursor-pointer font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:translate-x-2'
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid #AA00FF',
                    }}
                  >
                    View Next →
                  </button>
                </Link>
              )}
            </motion.div>
          )
        })()}
      </main>

    </div>
  )
}
