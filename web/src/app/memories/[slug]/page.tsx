'use client'

import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import Cookie from 'js-cookie'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'

dayjs.locale(ptBR)

interface MemoryParams {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

export default async function Memory() {
  const params = useParams()
  const memoryId = params.slug

  const token = Cookie.get('token')

  if (!token) {
    return <EmptyMemories />
  }

  const response = await api.get(`/memories/${memoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  console.log(response.data)
  const memory: MemoryParams = response.data

  return (
    <div className="flex flex-col gap-10 p-8">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <div key={memory.id} className="space-y-4">
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memory.createdAt).format('D [ de ]MMMM[, ]YYYY')}
        </time>

        <Image
          src={memory.coverUrl}
          alt=""
          width={592}
          height={280}
          className="aspect-video w-full rounded-lg object-cover"
        />

        <p className="text-lg leading-relaxed text-gray-100 ">
          {memory.content}
        </p>
      </div>
    </div>
  )
}
