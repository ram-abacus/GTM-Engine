"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Target, Zap, Users, TrendingUp, CheckCircle, Mail, Brain, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HubSpotForm } from "@/components/mautic-form-modal"
import { HubSpotFormModal } from "@/components/molde-form"

export default function GTMEngineLanding() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="images/abacusdesk-logo.svg"
                alt="Abacus Desk Logo"
                width={200}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <Button onClick={openForm} className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button onClick={openForm} className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Meet GTM Engine —{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Your Launch Partner
                  </span>{" "}
                  for Smart Growth
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  GTM Engine combines AI-powered audience insights, outbound targeting, and inbound magnetism to drive
                  qualified leads, faster.
                </p>
              </div>

              <div className="flex justify-start">
                <Button
                  size="lg"
                  onClick={openForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Book a Free GTM Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>No commitment required</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">

<video 
    className="img-fluid w-full h-auto rounded-2xl"
    autoPlay 
    loop 
    muted 
    playsInline
  >
    <source src="Hero Image.mp4" type="video/mp4" />
  </video>

                {/* <Image
                  src="images/gtm-hero-new.png"
                  alt="GTM Engine - AI-powered marketing dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is GTM Engine Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">What Is GTM Engine?</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              GTM Engine is a full-stack Go-To-Market solution that starts with understanding your business goals and
              ends with delivering warm, ready-to-convert leads. We blend strategy, AI tools, content creation, cold
              outreach, SEO, and performance marketing into one seamless launch system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Business Goal Discovery & GTM Consulting",
                description: "Strategic planning tailored to your unique market position",
              },
              {
                icon: Brain,
                title: "AI-Based Audience Research & Data Sourcing",
                description: "Intelligent insights to identify your ideal customers",
              },
              {
                icon: MessageSquare,
                title: "Content & Messaging Development",
                description: "Compelling narratives that resonate with your audience",
              },
              {
                icon: Zap,
                title: "High-Converting Landing Page Design",
                description: "Optimized pages that turn visitors into leads",
              },
              {
                icon: Mail,
                title: "Cold Outreach via Smart Email Campaigns",
                description: "Personalized sequences that get responses",
              },
              {
                icon: TrendingUp,
                title: "SEO, Social Ads & Social Media Engagement",
                description: "Multi-channel approach for maximum reach",
              },
            ].map((component, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                    <component.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{component.title}</h3>
                  <p className="text-slate-600 text-sm">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Push + Pull Model Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Push + Pull Model Explained</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We activate both outbound push and inbound pull — engineered to reach the right person with the right
              message, on the right channel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 rounded-lg p-3">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Push Strategy</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-slate-700">Cold Email Sequences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-slate-700">Direct Outreach Campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-slate-700">Smart Retargeting</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 rounded-lg p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Pull Strategy</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">SEO-optimized Content</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Social Media Campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Paid Performance Ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GTM Engine Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose GTM Engine?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We don't just run ads. We build a GTM engine tuned for conversion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "All-in-one solution: Strategy + Execution",
              "AI-powered audience and content insights",
              "Built by a seasoned 360° digital agency",
              "Proven performance marketing experience",
              "Transparent lead reporting and follow-up support",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Performance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Proof of Performance</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "300%",
                description: "increase in MQLs for a Fintech SMB in 8 weeks",
              },
              {
                metric: "47%",
                description: "Cost-per-lead reduced for a B2B SaaS company",
              },
              {
                metric: "10%+",
                description: "reply rate across 20+ cold outreach sequences",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <p className="text-slate-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Build Your Go-To-Market Engine</h2>
              <p className="text-xl text-blue-100 mb-8">
                Book a free consultation and get a tailored GTM roadmap for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">Free 45-minute strategy session</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">Custom GTM roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">No obligation or commitment</span>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-slate-900 ms-10">Get My Free GTM Audit</h3>
                <HubSpotForm />

                {/* <div id="mauticform_wrapper_abacusgtmengine" className="mauticform_wrapper">
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
                        <div className="form-grid">
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
                            placeholder="Email Address"
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
                            rows={4}
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
                            Book My Free Consultation →
                          </button>
                        </div>
                      </div>
                    </div>

                    <input
                      type="hidden"
                      name="mauticform[formId]"
                      id="mauticform_abacusgtmengine_id"
                      defaultValue="12"
                    />
                    <input
                      type="hidden"
                      name="mauticform[return]"
                      id="mauticform_abacusgtmengine_return"
                      defaultValue=""
                    />
                    <input
                      type="hidden"
                      name="mauticform[formName]"
                      id="mauticform_abacusgtmengine_name"
                      defaultValue="abacusgtmengine"
                    />
                  </form>
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Builders Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-600 mb-8">Trusted by growing businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src="images/shopify-partner-new.jpg"
                  alt="Shopify Partner"
                  width={150}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src="images/hubspot-certified.png"
                  alt="HubSpot Certified Partner"
                  width={150}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src="images/google-certified-publishing.png"
                  alt="Google Certified Publishing Partner"
                  width={150}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src="images/google-ads-meta.png"
                  alt="Google Ads and Meta Partner"
                  width={150}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="images/abacusdesk-logo.svg"
                alt="Abacus Desk Logo"
                width={200}
                height={80}
                className="h-20 w-auto opacity-80"
              />
            </div>
            <p className="text-slate-400 mb-6">Your Launch Partner for Smart Growth</p>
            <Button onClick={openForm} className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Your GTM Journey Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>

      {/* Mautic Form Modal */}
      <HubSpotFormModal isOpen={isFormOpen} onClose={closeForm} />
    </div>
  )
}
