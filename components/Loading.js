import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Loading({ notionSlug }) {
  const { locale } = useRouter()
  const [showNotion, setshowNotion] = useState(false)

  if (notionSlug) {
    setTimeout(() => {
      setshowNotion(true)
    }, 3000)
  }

  const t = lang[locale]
  return (
    <div className='py-6 sm:py-8 lg:py-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='inline-flex items-center gap-2.5 mb-8'>
 <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 512 512"
    width="24"
    height="24"
    {...props}
  >
    <path d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0Zm-12.378 396.654c22.505-.001 41.884-4.001 58.137-12.003 16.254-8.002 28.631-19.066 37.133-33.194 8.502-14.128 12.752-30.194 12.752-48.197 0-13.753-3.25-26.318-9.752-37.696-6.501-11.377-15.815-20.566-27.943-27.568-12.127-7.001-26.068-10.752-41.821-11.252l78.016-111.398H171.983v36.758h103.521L206.49 259.376c9.502-1.501 21.129-2.251 34.882-2.251 19.754 0 35.445 4.501 47.072 13.503 11.627 9.002 17.441 20.879 17.441 35.632 0 34.757-21.379 52.136-64.138 52.136-12.002 0-23.755-2.188-35.257-6.564-11.502-4.376-21.004-9.565-28.506-15.566l-17.628 35.632c7.251 7.252 18.941 13.191 35.069 17.817 16.128 4.626 32.194 6.938 48.197 6.939Z" />
  </svg>
            {t.ERROR.LOADING}
          </p>
          {showNotion &&
            <Link
              passHref
              href={`https://${BLOG.notionDomain}/${notionSlug}`} scroll={false}
              className='text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition duration-100'
            >
              <ExternalLinkIcon className='inline-block mb-1 h-5 w-5' />
              <span className='m-1'>{t.ERROR.TIMEOUT_TEXT}</span>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

// export default Loading
