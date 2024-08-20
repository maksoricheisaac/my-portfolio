import Link from 'next/link'
import styles from '../contact.module.css'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section id="contact" className="my-20 space-y-3 flex flex-col items-center justify-center">
        <div className="inline-block rounded-lg text-primary-foreground bg-primary px-3 py-1 text-sm">Contact</div>
        <h2 className="text-4xl font-bold dark:text-primary tracking-tighter sm:text-5xl">Contact Me</h2>
        <p className='text-gray-500 text-center'>Leave me a message on WhatsApp</p>
        <div className="group relative">
    <Link href="https://wa.me/242056073456?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services.%20Pouvez-vous%20me%20donner%20plus%20d'informations,%20s'il%20vous%20pla%C3%AEt%20?%0A">
        <svg

            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="w-10 hover:scale-125 duration-200 hover:stroke-blue-500"
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.52 3.51A10.1 10.1 0 0012.042 1a10.052 10.052 0 00-8.84 14.747L2 22l6.388-1.674A9.999 9.999 0 0012.042 21c5.536 0 10.037-4.465 10.037-9.953a9.871 9.871 0 00-1.558-5.335zm-8.48 16.154a8.273 8.273 0 01-4.222-1.145l-.303-.18-3.786 1 1.008-3.693-.198-.306a8.296 8.296 0 01-1.26-4.384c0-4.594 3.753-8.331 8.363-8.331a8.237 8.237 0 014.677 1.467 8.315 8.315 0 012.726 3.66 8.245 8.245 0 01.653 3.203c0 4.595-3.753 8.33-8.363 8.33z"
            />
            <path
                d="M17.04 14.315c-.286-.144-1.703-.842-1.966-.936-.265-.095-.459-.144-.654.144-.198.286-.752.936-.921 1.13-.17.197-.34.222-.625.076-.286-.144-1.213-.446-2.308-1.42-.853-.759-1.43-1.697-1.598-1.982-.17-.285-.018-.438.128-.582.13-.13.286-.34.43-.51.144-.17.192-.286.288-.476.096-.191.048-.361-.025-.505-.073-.144-.654-1.576-.895-2.155-.236-.567-.474-.49-.654-.49h-.552a1.06 1.06 0 00-.748.36c-.256.286-.978.956-.978 2.31s1.001 2.674 1.14 2.86c.144.191 1.965 2.996 4.759 4.185.666.287 1.185.459 1.592.637.67.284 1.28.244 1.761.148.536-.08 1.703-.7 1.944-1.375.239-.673.239-1.251.167-1.375-.072-.125-.265-.191-.552-.336z"
            />
        </svg>
    </Link>
    <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
    z-20 origin-left scale-0 px-3 rounded-lg border 
    border-gray-300 bg-white py-2 text-sm font-bold
    shadow-md transition-all duration-300 ease-in-out 
    group-hover:scale-100">WhatsApp<span>
    </span></span>
</div>

     
        



         
    </section>
    
  )
}

export default Contact