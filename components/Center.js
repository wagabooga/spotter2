import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react"

function Center() {
  const { data: session } = useSession();
  return (
    <div className="flex-grow ">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacitiy-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 bg-white">
          {/* TODO: add check if user does not have an image to use a default image */}
          <img className="rounded-full w-10 h-10" src={session?.user.image} alt=""/>
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black from-green-500 h-80 text-white padding-8`}>
        <img />
        <h1>hasda</h1>
      </section>
    </div>
  )
}

export default Center
