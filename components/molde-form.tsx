"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HubSpotForm } from "./mautic-form-modal"

interface HubSpotFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HubSpotFormModal({ isOpen, onClose }: HubSpotFormModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Get Your Free GTM Audit</h2>
            <p className="text-slate-600 mt-1">Book a consultation and get a tailored GTM roadmap</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <HubSpotForm />
        </div>
      </div>
    </div>
  )
}
