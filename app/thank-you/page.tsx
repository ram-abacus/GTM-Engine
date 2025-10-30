"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle, Calendar, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header/>

      {/* Thank You Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
          <div className="space-y-8">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="bg-green-500 rounded-full p-6">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </div>

            {/* Thank You Message */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Thank You!</h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Your GTM Consultation Request Has Been Received
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                We've successfully received your request for a free GTM consultation. Our team will review your
                information and get back to you within 24 hours.
              </p>
            </div>

            {/* Confirmation Details */}
            <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">What Happens Next?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 rounded-full p-1 mt-1">
                      <span className="text-white text-xs font-bold px-2">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Review & Analysis</p>
                      <p className="text-slate-300 text-sm">
                        Our GTM experts will analyze your business information and goals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 rounded-full p-1 mt-1">
                      <span className="text-white text-xs font-bold px-2">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Consultation Scheduling</p>
                      <p className="text-slate-300 text-sm">
                        We'll reach out within 24 hours to schedule your free consultation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 rounded-full p-1 mt-1">
                      <span className="text-white text-xs font-bold px-2">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Custom GTM Strategy</p>
                      <p className="text-slate-300 text-sm">
                        Receive a tailored go-to-market roadmap for your business
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => (window.location.href = "/")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Return to Homepage
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = "mailto:support@abacusdesk.co.in")}
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
              >
                Contact Us Directly
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">While You Wait...</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore more about how GTM Engine can transform your business growth strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 rounded-lg p-4 w-fit mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Free 45-Minute Session</h3>
                <p className="text-slate-600">
                  Get a comprehensive analysis of your current go-to-market strategy and identify key opportunities for
                  growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-lg p-4 w-fit mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Custom GTM Roadmap</h3>
                <p className="text-slate-600">
                  Receive a personalized roadmap with actionable strategies tailored specifically to your business
                  goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 rounded-lg p-4 w-fit mx-auto mb-6">
                  <Phone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">No Commitment Required</h3>
                <p className="text-slate-600">
                  This consultation is completely free with no strings attached. Learn about your options without any
                  pressure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Builders Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-600 mb-8">Trusted by growing businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/shopify-partner-new.jpg`}
                  alt="Shopify Partner"
                  width={150}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hubspot-certified.png`}
                  alt="HubSpot Certified Partner"
                  width={150}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/google-certified-publishing.png`}
                  alt="Google Certified Publishing Partner"
                  width={150}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/google-ads-meta.png`}
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
      <Footer/>
      
    </div>
  )
}
