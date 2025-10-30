import Image from "next/image"
import { useState } from "react"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Link href="/">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/abacusdesk-logo.svg`}
                alt="Abacus Desk Logo"
                width={200}
                height={80}
                className="h-20 w-auto opacity-80"
              />
            </Link>
          </div>
          <p className="text-slate-400 mb-6">Your Launch Partner for Smart Growth</p>
          <Button onClick={openForm} className="bg-blue-600 hover:bg-blue-700 text-white">
            Start Your GTM Journey Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}