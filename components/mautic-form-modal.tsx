"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MauticFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MauticFormModal({ isOpen, onClose }: MauticFormModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Get Your Free GTM Audit</h2>
            <p className="text-slate-600 mt-1">Book a consultation and get a tailored GTM roadmap</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Mautic Form */}
        <div className="p-6">
          <div id="mauticform_wrapper_abacusgtmengine" className="mauticform_wrapper">
            <form
              autoComplete="false"
              role="form"
              method="post"
              action="https://mautic.abacusdesk.co.in/form/submit?formId=12"
              id="mauticform_abacusgtmengine"
              data-mautic-form="abacusgtmengine"
              encType="multipart/form-data"
            >
              <div className="mauticform-error" id="mauticform_abacusgtmengine_error"></div>
              <div className="mauticform-message" id="mauticform_abacusgtmengine_message"></div>

              <div className="mauticform-innerform">
                <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                  <div
                    id="mauticform_abacusgtmengine_f_name"
                    className="mauticform-row mauticform-text mauticform-field-1 mauticform-required"
                    data-validate="f_name"
                    data-validation-type="text"
                  >
                    <input
                      type="text"
                      name="mauticform[f_name]"
                      defaultValue=""
                      id="mauticform_input_abacusgtmengine_f_name"
                      placeholder="Your Name"
                      className="mauticform-input"
                    />
                    <span className="mauticform-errormsg" style={{ display: "none" }}>
                      This field is required
                    </span>
                  </div>

                  <div
                    id="mauticform_abacusgtmengine_company"
                    className="mauticform-row mauticform-text mauticform-field-2 mauticform-required"
                    data-validate="company"
                    data-validation-type="text"
                  >
                    <input
                      type="text"
                      name="mauticform[company]"
                      defaultValue=""
                      id="mauticform_input_abacusgtmengine_company"
                      placeholder="Company"
                      className="mauticform-input"
                    />
                    <span className="mauticform-errormsg" style={{ display: "none" }}>
                      This field is required
                    </span>
                  </div>

                  <div
                    id="mauticform_abacusgtmengine_email"
                    className="mauticform-row mauticform-email mauticform-field-3 mauticform-required"
                    data-validate="email"
                    data-validation-type="email"
                  >
                    <input
                      type="email"
                      name="mauticform[email]"
                      defaultValue=""
                      id="mauticform_input_abacusgtmengine_email"
                      placeholder="Your Email"
                      className="mauticform-input"
                    />
                    <span className="mauticform-errormsg" style={{ display: "none" }}>
                      This field is required
                    </span>
                  </div>

                  <div
                    id="mauticform_abacusgtmengine_website"
                    className="mauticform-row mauticform-url mauticform-field-4 mauticform-required"
                    data-validate="website"
                    data-validation-type="url"
                  >
                    <input
                      type="url"
                      name="mauticform[website]"
                      defaultValue=""
                      id="mauticform_input_abacusgtmengine_website"
                      placeholder="Website URL"
                      className="mauticform-input"
                    />
                    <span className="mauticform-errormsg" style={{ display: "none" }}>
                      This field is required
                    </span>
                  </div>

                  <div
                    id="mauticform_abacusgtmengine_f_message1"
                    className="mauticform-row mauticform-text mauticform-field-5"
                  >
                    <textarea
                      placeholder="Main business challenge or GTM goal"
                      name="mauticform[f_message1]"
                      id="mauticform_input_abacusgtmengine_f_message1"
                      className="mauticform-textarea"
                    ></textarea>
                    <span className="mauticform-errormsg" style={{ display: "none" }}></span>
                  </div>

                  <div
                    id="mauticform_abacusgtmengine_submit"
                    className="mauticform-row mauticform-button-wrapper mauticform-field-6"
                  >
                    <button
                      className="btn btn-ghost mauticform-button"
                      name="mauticform[submit]"
                      value="1"
                      id="mauticform_input_abacusgtmengine_submit"
                      type="submit"
                    >
                      Book My Free Consultation
                    </button>
                  </div>
                </div>
              </div>

              <input type="hidden" name="mauticform[formId]" id="mauticform_abacusgtmengine_id" defaultValue="12" />
              <input type="hidden" name="mauticform[return]" id="mauticform_abacusgtmengine_return" defaultValue="" />
              <input
                type="hidden"
                name="mauticform[formName]"
                id="mauticform_abacusgtmengine_name"
                defaultValue="abacusgtmengine"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
