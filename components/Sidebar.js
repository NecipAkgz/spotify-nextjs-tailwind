import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

function Sidebar() {
  const { data: session, status } = useSession()

  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white "
          onClick={() => signOut()}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Cik Git</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white ">
          <SearchIcon className="h-5 w-5" />
          <p>Ara</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white ">
          <LibraryIcon className="h-5 w-5" />
          <p>Kitaplığın</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white ">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Çalma Listesi Oluştur</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white ">
          <HeartIcon className="h-5 w-5" />
          <p>Beğenilen Şarkılar</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white ">
          <RssIcon className="h-5 w-5" />
          <p>Yayınla</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* PlayList */}
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
        <p className="cursor-pointer hover:text-white">Çalma Listesi isim</p>
      </div>
    </div>
  )
}

export default Sidebar
