'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { COMPUTERNETWORKS_TOPICS } from '@/lib/private/computernetworksTopics'

export default function Page() {
  const pathname = usePathname()
  const slug = pathname.split('/').filter(Boolean).pop()

  const sectionIndex = COMPUTERNETWORKS_TOPICS.indexOf(slug || '')
  const sectionNumber = sectionIndex >= 0 ? sectionIndex + 1 : 1

  const num = (sub: number) => `${sectionNumber}.${sub}`

  return (
    <main className='pt-32 bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#AA00FF] bg-black'>
            Histroy of Networks
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(1)}</b> What is the History of Computer Networks
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The History of Computer Networks is the chronological evolution of technologies, protocols, and infrastructure that enabled computers to communicate over distance — beginning with early experimental systems and leading to today&apos;s global Internet. <br />
            <br />
            It traces the journey from: <br />
            <b>•</b> Isolated mainframes <br />
            <b>•</b> Military research networks <br />
            <b>•</b> Academic collaboration systems <br />
            <b>•</b> Commercial expansion <br />
            <b>•</b> The modern Internet and cloud era <br />
            <br />
            Understanding networking history explains <b>why modern protocols, architectures, and standards exist the way they do today</b>.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(2)}</b> Subtle Information
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Networking did not evolve for social media or streaming. <br />
            <br />
            It evolved because of: <br />
            <b>•</b> <b>Military survivability concerns</b> <br />
            <b>•</b> <b>Academic collaboration needs</b> <br />
            <b>•</b> <b>Resource sharing limitations</b> <br />
            <b>•</b> <b>Cold War urgency</b> <br />
            <br />
            Important hidden truths: <br />
            <b>•</b> The Internet was designed to <b>survive partial failure</b>, not to be fast. <br />
            <b>•</b> Early networking focused on <b>reliability and decentralization</b>, not user interfaces. <br />
            <b>•</b> Many modern limitations (IPv4 exhaustion, legacy protocols) are side effects of early design decisions. <br />
            <b>•</b> Commercialization drastically changed priorities from research openness to profitability. <br />
            <br />
            The Internet&apos;s DNA is military + academic, not corporate.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(3)}</b> Pre-Network Era (1950s-1960s)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Before networking: <br />
            <b>•</b> Computers were massive mainframes. <br />
            <b>•</b> Users interacted via punch cards. <br />
            <b>•</b> No real-time remote communication existed. <br />
            <br />
            Major limitations: <br />
            <b>•</b> One computer = one isolated system. <br />
            <b>•</b> Extremely expensive hardware. <br />
            <b>•</b> No resource sharing. <br />
            <br />
            This inefficiency triggered the idea of connecting computers.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(4)}</b> ARPANET (1969)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The breakthrough came with <b>ARPANET</b>, funded by the U.S. Department of Defense under ARPA. <br />
            <br />
            First Connection:<br />
            <b>•</b> 1969 <br />
            <b>•</b> Between UCLA and Stanford Research Institute <br />
            <br />
            Key Innovation: <br />
            <b>•</b> Packet switching instead of circuit switching. <br />
            <br />
            Why Packet Switching Was Revolutionary: <br />
            <b>•</b> Data divided into small packets <br />
            <b>•</b> Packets travel independently <br />
            <b>•</b> Network survives even if parts fail <br />
            <br />
            The first message sent was: <br />
            &quot;LO&quot; (intended: LOGIN — system crashed) <br />
            <br />
            ARPANET became the foundation of the Internet.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(5)}</b> The Birth of TCP/IP (1970s)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Two researchers changed everything: <br />
            <b>•</b> Vint Cerf <br />
            <b>•</b> Bob Kahn <br />
            <br />
            They developed: <br />
            <b>•</b> <b>Transmission Control Protocol (TCP)</b> <br />
            <b>•</b> <b>Internet Protocol (IP)</b> <br />
            <br />
            In 1983, ARPANET officially adopted TCP/IP. <br />
            <br />
            This moment is considered: <br />
            The true birth of the modern Internet. <br />
            <br />
            TCP/IP allowed different networks to interconnect — creating a &quot;network of networks.&quot;
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(6)}</b> NSFNET and Academic Expansion (1980s)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The <b>National Science Foundation</b> funded <b>NSFNET</b> to connect universities. <br />
            <br />
            Impact: <br />
            <b>•</b> Expanded networking beyond military use. <br />
            <b>•</b> Enabled research collaboration. <br />
            <b>•</b> Increased backbone speeds significantly. <br />
            <br />
            NSFNET became the core backbone before commercialization. <br />
            This was the Internet&apos;s academic golden age.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(7)}</b> The World Wide Web (1991)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            In 1991, <b>Tim Berners-Lee</b> introduced: <br />
            <b>•</b> HTTP <br />
            <b>•</b> HTML <br />
            <b>•</b> Web browsers <br />
            <b>•</b> The concept of URLs <br />
            <br />
            Important distinction: <br />
            The Web ≠ The Internet. <br />
            <br />
            The Internet is infrastructure. <br />
            The Web is a service running on top of it. <br />
            <br />
            The Web made networking usable for ordinary people. <br />
            <br />
            This triggered global adoption.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(8)}</b> Commercialization of the Internet (1990s)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            In the mid-1990s: <br />
            <b>•</b> Restrictions on commercial traffic were lifted. <br />
            <b>•</b> ISPs began offering public access. <br />
            <b>•</b> Private companies entered the ecosystem. <br />
            <br />
            Major outcomes: <br />
            <b>•</b> Dot-com boom <br />
            <b>•</b> E-commerce growth <br />
            <b>•</b> Corporate data centers <br />
            The Internet shifted from research network to global marketplace.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(9)}</b> Broadband and Wireless Revolution (2000s)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Dial-up gave way to: <br />
            <b>•</b> DSL <br />
            <b>•</b> Cable broadband <br />
            <b>•</b> Fiber optics <br />
            <br />
            Wireless expanded through: <br />
            <b>•</b> Wi-Fi <br />
            <b>•</b> Cellular networks (3G, 4G, 5G) <br />
            <br />
            Impact: <br />
            <b>•</b> Always-on connectivity <br />
            <b>•</b> Mobile computing <br />
            <b>•</b> Smartphones as network devices <br />
            <br />
            Networking is rule-driven communication.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(10)}</b> Cloud Computing and Modern Networking (2010s)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The rise of: <br />
            <b>•</b> Virtualization <br />
            <b>•</b> Data centers <br />
            <b>•</b> Software-defined networking (SDN) <br />
            <b>•</b> Cloud providers <br />
            <br />
            Networking became: <br />
            <b>•</b> Virtual <br />
            <b>•</b> Automated <br />
            <b>•</b> Programmable <br />
            <br />
            Massive platforms emerged, relying heavily on distributed networking architecture. <br />
            <br />
            The scale of traffic exploded due to: <br />
            <b>•</b> Streaming <br />
            <b>•</b> Social media <br />
            <b>•</b> IoT <br />
            <b>•</b> AI systems
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(11)}</b> IPv4 Exhaustion and IPv6 Adoption
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            IPv4 provided ~4.3 billion addresses. <br />
            <br />
            Problem: <br />
            <b>•</b> Not enough for global expansion. <br />
            <br />
            Solution: <br />
            <b>•</b> IPv6 (128-bit addressing) <br />
            <br />
            Adoption is ongoing because: <br />
            <b>•</b> Legacy systems resist change <br />
            <b>•</b> Migration complexity is high <br />
            <br />
            This shows how early design decisions affect decades of technology.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(12)}</b> The Future of Networking
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Emerging trends: <br />
            <b>•</b> Quantum networking <br />
            <b>•</b> Satellite Internet constellations <br />
            <b>•</b> Edge computing <br />
            <b>•</b> AI-driven traffic optimization <br />
            <b>•</b> Zero-trust security architectures <br />
            <br />
            Networking is evolving toward: <br />
            <b>•</b> Lower latency <br />
            <b>•</b> Higher automation <br />
            <b>•</b> Global coverage <br />
            <b>•</b> Stronger encryption <br />
            <br />
            The history of networking is still being written.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(13)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Computer networks evolved from isolated mainframes to a global Internet. <br />
            <b>•</b> ARPANET introduced packet switching. <br />
            <b>•</b> TCP/IP enabled interoperability between networks. <br />
            <b>•</b> The Web made the Internet user-friendly. <br />
            <b>•</b> Commercialization transformed networking economics. <br />
            <b>•</b> Wireless and broadband expanded global access. <br />
            <b>•</b> IPv6 addresses long-term scalability issues. <br />
            <b>•</b> Modern networking is programmable and cloud-driven.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, }}
          className='shadow-[#AA00FF] border border-[#AA00FF]/15 rounded-2xl shadow-lg p-8 transition-shadow duration-150 ease-out bg-black hover:shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-100'>
            <b className='text-[#AA00FF]'>{num(14)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> The first ARPANET message crashed the system after two letters. <br />
            <b>•</b> Email was invented before the World Wide Web. <br />
            <b>•</b> The term &quot;surfing the web&quot; became popular in the 1990s. <br />
            <b>•</b> IPv6 can support more addresses than there are atoms in many planetary-scale comparisons. <br />
            <b>•</b> Early modems made robotic screaming noises during connection.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
