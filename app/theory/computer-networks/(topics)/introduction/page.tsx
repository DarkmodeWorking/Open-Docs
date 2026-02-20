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
            Introduction
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
            <b className='text-[#AA00FF]'>{num(1)}</b> What is Computer Networking
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Computer Networking is the practice of connecting multiple computing devices so they can communicate, share resources, exchange data, and coordinate tasks over wired or wireless media. <br />
            <br />
            A computer network enables: <br />
            <b>•</b> Data communication (messages, files, streams) <br />
            <b>•</b> Resource sharing (printers, storage, internet) <br />
            <b>•</b> Remote access (SSH, RDP, cloud access) <br />
            <b>•</b> Distributed computing (clusters, cloud systems) <br />
            <br />
            At its core, networking answers one question: <br />
            How do devices talk to each other reliably and efficiently? <br />
            <br />
            Modern networking powers everything from small home Wi-Fi setups to the global infrastructure of the internet.
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
            Computer networking is not just &quot;connecting cables&quot;. <br />
            <br />
            Some important hidden truths: <br />
            <b>•</b> <b>Networking is layered complexity</b>. You rarely see everything happening under the hood (routing, ARP, DNS resolution, encryption, congestion control). <br />
            <b>•</b> <b>Performance ≠ Speed alone</b>. Latency, jitter, packet loss, and throughput all matter. <br />
            <b>•</b> <b>Security is foundational, not optional</b>. Every connected device is a potential attack surface. <br />
            <b>•</b> <b>Scalability changes design</b>. A network for 10 devices is fundamentally different from one serving millions. <br />
            <b>•</b> <b>Physical limitations still matter</b>. Bandwidth, interference, signal attenuation, and distance are real constraints. <br />
            <br />
            Networking is both software logic and physical infrastructure.
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
            <b className='text-[#AA00FF]'>{num(3)}</b> Why Computer Networks Exist
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Networks exist to solve key problems: <br />
            <br />
            <b>1. Communication</b> <br />
            Email, messaging, VoIP, video conferencing. <br />
            <br />
            <b>2. Resource Sharing</b> <br />
            Multiple users sharing: <br />
            <b>•</b> Printers <br />
            <b>•</b> Storage <br />
            <b>•</b> Databases <br />
            <b>•</b> Internet access <br />
            <br />
            <b>3. Centralization</b> <br />
            Organizations centralize: <br />
            <b>•</b> Authentication <br />
            <b>•</b> Data storage <br />
            <b>•</b> Backups <br />
            <b>•</b> Monitoring <br />
            <br />
            <b>4. Distributed Systems</b> <br />
            Large-scale systems (cloud platforms, microservices) rely entirely on networking. <br />
            <br />
            Without networks, modern computing collapses.
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
            <b className='text-[#AA00FF]'>{num(4)}</b> Types of Computer Networks
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Networks are classified by size and scope. <br />
            <br />
            <b>1. LAN (Local Area Network)</b> <br />
            <b>•</b> Small geographical area <br />
            <b>•</b> Offices, schools, homes <br />
            <b>•</b> High speed, low latency <br />
            <br />
            <b>2. WAN (Wide Area Network)</b> <br />
            <b>•</b> Large geographical area <br />
            <b>•</b> Connects multiple LANs <br />
            <b>•</b> The Internet is the largest WAN <br />
            <br />
            <b>3. MAN (Metropolitan Area Network)</b> <br />
            <b>•</b> City-wide network <br />
            <br />
            <b>4. PAN (Personal Area Network)</b> <br />
            <b>•</b> Very small range <br />
            <b>•</b> Bluetooth devices <br />
            <br />
            Each type affects: <br />
            <b>•</b> Speed <br />
            <b>•</b> Cost <br />
            <b>•</b> Infrastructure complexity
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
            <b className='text-[#AA00FF]'>{num(5)}</b> Network Components
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Every network contains core building blocks: <br />
            <br />
            <b>1. End Devices</b> <br />
            <b>•</b> Computers <br />
            <b>•</b> Servers <br />
            <b>•</b> Smartphones <br />
            <b>•</b> IoT devices <br />
            <br />
            <b>2. Intermediary Devices</b> <br />
            <b>•</b> Routers <br />
            <b>•</b> Switches <br />
            <b>•</b> Firewalls <br />
            <b>•</b> Access Points <br />
            <br />
            <b>3. Transmission Media</b> <br />
            <b>•</b> Ethernet cables <br />
            <b>•</b> Fiber optics <br />
            <b>•</b> Radio waves (Wi-Fi) <br />
            <br />
            Remove any one of these — communication breaks.
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
            <b className='text-[#AA00FF]'>{num(6)}</b> Basic Network Architecture Models
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Two major architectural approaches exist: <br />
            <br />
            <b>1. Client-Server Model</b> <br />
            <b>•</b> Central server provides services <br />
            <b>•</b> Clients request resources <br />
            <b>•</b> Used in enterprises and web systems <br />
            <br />
            <b>2. Peer-to-Peer (P2P)</b> <br />
            <b>•</b> No dedicated central server <br />
            <b>•</b> Devices share directly <br />
            <b>•</b> Used in file sharing systems <br />
            <br />
            Architecture determines: <br />
            <b>•</b> Scalability <br />
            <b>•</b> Security <br />
            <b>•</b> Maintenance effort
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
            <b className='text-[#AA00FF]'>{num(7)}</b> How Data Travels in a Network (High-Level View)
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            Data doesn&apos;t travel as one continuous stream. <br />
            <br />
            It moves in: <br />
            <b>•</b> <b>Packets</b> (small chunks of data) <br />
            <b>•</b> Each packet contains: <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Source address <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Destination address <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Payload <br />
            &nbsp;&nbsp;&nbsp;<b>•</b> Error-checking information <br />
            <br />
            Steps: <br />
            <b>1.</b> Data is broken into packets <br />
            <b>2.</b> Packets are routed <br />
            <b>3.</b> Packets are reassembled <br />
            <b>4.</b> Errors are checked <br />
            <b>5.</b> Missing packets are retransmitted <br />
            <br />
            Networking is controlled chaos — but highly engineered.
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
            <b className='text-[#AA00FF]'>{num(8)}</b> Key Networking Concepts You Must Know
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            These are foundational: <br />
            <b>•</b> IP Address <br />
            <b>•</b> MAC Address <br />
            <b>•</b> Bandwidth <br />
            <b>•</b> Latency <br />
            <b>•</b> Protocol <br />
            <b>•</b> Topology <br />
            <b>•</b> Port Number <br />
            <b>•</b> Firewall <br />
            <b>•</b> DNS <br />
            <b>•</b> Gateway <br />
            <br />
            Each of these becomes its own major topic later.
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
            <b className='text-[#AA00FF]'>{num(9)}</b> The Role of Protocols
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            A protocol is a rulebook. <br />
            <br />
            Without protocols, devices wouldn&apos;t understand each other. <br />
            <br />
            Examples include: <br />
            <b>•</b> HTTP <br />
            <b>•</b> TCP <br />
            <b>•</b> UDP <br />
            <b>•</b> FTP <br />
            <b>•</b> SMTP <br />
            <br />
            Protocols define: <br />
            <b>•</b> Message format <br />
            <b>•</b> Timing <br />
            <b>•</b> Error handling <br />
            <b>•</b> Security rules <br />
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
            <b className='text-[#AA00FF]'>{num(10)}</b> The Internet as the Largest Network
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            The Internet is a massive network of networks. <br />
            <br />
            It connects: <br />
            <b>•</b> Billions of devices <br />
            <b>•</b> Millions of servers <br />
            <b>•</b> Data centers worldwide <br />
            <br />
            It relies on: <br />
            <b>•</b> Routers <br />
            <b>•</b> Submarine cables <br />
            <b>•</b> Satellites <br />
            <b>•</b> Fiber backbones <br />
            <br />
            It is decentralized — no single entity owns it entirely.
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
            <b className='text-[#AA00FF]'>{num(11)}</b> Key Takeaways
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> Computer networking connects devices for communication and resource sharing. <br />
            <b>•</b> Networking involves both physical infrastructure and logical protocols. <br />
            <b>•</b> Networks are classified by size: LAN, WAN, MAN, PAN. <br />
            <b>•</b> Data travels in packets, not continuous streams. <br />
            <b>•</b> Protocols are the rulebooks of communication. <br />
            <b>•</b> Performance is more than just speed — latency and reliability matter. <br />
            <b>•</b> The Internet is the largest and most complex network ever built.
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
            <b className='text-[#AA00FF]'>{num(12)}</b> Fun Facts 😄
          </h2>
          <div className='max-w-3xl mx-auto text-gray-300'>
            <b>•</b> The first message ever sent over ARPANET (the predecessor to the Internet) was supposed to be &quot;LOGIN&quot; — the system crashed after &quot;LO&quot;. <br />
            <b>•</b> The average person uses networking hundreds of times per day without realizing it. <br />
            <b>•</b> Undersea fiber cables carry most of the world&apos;s internet traffic — not satellites. <br />
            <b>•</b> A small home router performs billions of operations per second. <br />
            <b>•</b> Even your smart fridge might now be part of a network.
          </div>
        </motion.div>
      </div>
    </main>
  )
}
