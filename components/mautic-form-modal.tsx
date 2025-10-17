"use client"
import { useEffect } from "react"

interface HubSpotFormProps {
  portalId?: string
  formId?: string
}

export function HubSpotForm({ portalId = "20204648", formId = "b9421588-efbe-490e-b6d0-14d64c0899ca" }: HubSpotFormProps) {
  useEffect(() => {
    const scriptId = "hubspot-form-script"

    // Load HubSpot script only once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.src = "https://js.hsforms.net/forms/embed/20204648.js"
      script.defer = true
      script.id = scriptId
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="hs-form-frame" data-region="na1" data-portal-id={portalId} data-form-id={formId}></div>
  )
}
