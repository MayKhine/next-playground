import LinkButton from "@/components/LinkButton"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center p-10 gap-5">
      <p className="text-xl w-full break-words text-center">
        Opps. This page is not found! Let's go somewhere fun!
      </p>

      <LinkButton href="/" label="Home" width="w-50/100" />
    </div>
  )
}
