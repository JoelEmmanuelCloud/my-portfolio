'use client'
import { useState } from 'react'
import { isValidEmail } from '@/lib/utils'

export default function ContactForm({
  title = "Get in touch",
  subtitle = "— Let's discuss your project",
  showCompanyField = true,
  buttonText = "Send message",
  className = ""
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    type: '', // 'loading', 'success', 'error'
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // Validate individual field
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        return !isValidEmail(value) ? 'Please enter a valid email address' : ''
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : ''
      default:
        return ''
    }
  }

  // Validate entire form
  const validateForm = () => {
    const newErrors = {}
    
    newErrors.name = validateField('name', formData.name)
    newErrors.email = validateField('email', formData.email)
    newErrors.message = validateField('message', formData.message)
    
    // Remove empty error messages
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key]
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }

    // Show error after user stops typing (for touched fields)
    if (touched[name]) {
      const error = validateField(name, value)
      if (error) {
        setErrors(prev => ({
          ...prev,
          [name]: error
        }))
      }
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const error = validateField(name, value)
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please fix the errors above'
      })
      return
    }

    setStatus({
      type: 'loading',
      message: 'Sending...'
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully.'
        })
        
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        })
        
        setTouched({})
        setErrors({})
      } else {
        const errorData = await response.json()
        setStatus({
          type: 'error',
          message: errorData.error || 'Failed to send message.'
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      })
    }
  }

  const isLoading = status.type === 'loading'
  const isSuccess = status.type === 'success'

  return (
    <div className={`bg-white ${className}`}>
      {/* Header */}
      <div className="mb-8 sm:mb-12 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-2 sm:mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg lg:text-xl text-black font-light">
            {subtitle}
          </p>
        )}
      </div>

      {/* Success State */}
      {isSuccess ? (
        <div className="py-8 sm:py-12 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-4">
            Thank you
          </h3>
          <p className="text-black mb-6 sm:mb-8 text-base sm:text-lg">
            {status.message}
          </p>
          <button
            onClick={() => setStatus({ type: '', message: '' })}
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base font-medium w-full sm:w-auto"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8" noValidate>
          {/* Name and Email Row */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base text-black mb-2 font-medium">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isLoading}
                className={`w-full px-0 py-3 sm:py-4 border-0 border-b-2 bg-transparent transition-all duration-200 focus:outline-none focus:border-blue-600 disabled:opacity-50 text-base sm:text-lg text-black ${
                  errors.name ? 'border-red-500' : 'border-black'
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm sm:text-base text-black mb-2 font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isLoading}
                className={`w-full px-0 py-3 sm:py-4 border-0 border-b-2 bg-transparent transition-all duration-200 focus:outline-none focus:border-blue-600 disabled:opacity-50 text-base sm:text-lg text-black ${
                  errors.email ? 'border-red-500' : 'border-black'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Company Field */}
          {showCompanyField && (
            <div>
              <label htmlFor="company" className="block text-sm sm:text-base text-black mb-2 font-medium">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-0 py-3 sm:py-4 border-0 border-b-2 border-black bg-transparent transition-all duration-200 focus:outline-none focus:border-blue-600 disabled:opacity-50 text-base sm:text-lg text-black"
                placeholder="Your company (optional)"
              />
            </div>
          )}

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm sm:text-base text-black mb-2 font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isLoading}
              className={`w-full px-0 py-3 sm:py-4 border-0 border-b-2 bg-transparent transition-all duration-200 focus:outline-none focus:border-blue-600 disabled:opacity-50 resize-none text-base sm:text-lg text-black ${
                errors.message ? 'border-red-500' : 'border-black'
              }`}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-500 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          {/* Status Message */}
          {status.message && status.type !== 'success' && (
            <div className={`text-sm sm:text-base font-medium text-center sm:text-left ${
              status.type === 'error' 
                ? 'text-red-500' 
                : 'text-black'
            }`}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading || Object.keys(errors).length > 0}
              className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {isLoading ? 'Sending...' : buttonText}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

// Inline compact version
export function ContactFormInline({ onSuccess, className = "" }) {
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Quick Contact',
          ...formData
        }),
      })

      if (response.ok) {
        onSuccess?.()
        setFormData({ email: '', message: '' })
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 sm:space-y-6 ${className}`}>
      <input
        type="email"
        required
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        placeholder="Your email"
        className="w-full px-0 py-3 sm:py-4 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-600 text-base sm:text-lg text-black"
      />
      <textarea
        required
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        placeholder="Quick message..."
        className="w-full px-0 py-3 sm:py-4 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-600 resize-none text-base sm:text-lg text-black"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base font-medium disabled:opacity-50 w-full sm:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}