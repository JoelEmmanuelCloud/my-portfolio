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
      <div className="mb-12">
        <h2 className="text-4xl font-light text-gray-900 mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 font-light">
            {subtitle}
          </p>
        )}
      </div>

      {/* Success State */}
      {isSuccess ? (
        <div className="py-12">
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Thank you
          </h3>
          <p className="text-gray-600 mb-8">
            {status.message}
          </p>
          <button
            onClick={() => setStatus({ type: '', message: '' })}
            className="text-gray-900 hover:text-gray-600 transition-colors font-light"
          >
            Send another message →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600 mb-2 font-light">
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
                className={`w-full px-0 py-3 border-0 border-b-2 bg-transparent transition-all duration-200 focus:outline-none focus:border-gray-900 disabled:opacity-50 ${
                  errors.name ? 'border-red-400' : 'border-gray-200'
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 font-light">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-2 font-light">
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
                className={`w-full px-0 py-3 border-0 border-b-2 bg-transparent transition-all duration-200 focus:outline-none focus:border-gray-900 disabled:opacity-50 ${
                  errors.email ? 'border-red-400' : 'border-gray-200'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 font-light">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Company Field */}
          {showCompanyField && (
            <div>
              <label htmlFor="company" className="block text-sm text-gray-600 mb-2 font-light">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent transition-all duration-200 focus:outline-none focus:border-gray-900 disabled:opacity-50"
                placeholder="Your company (optional)"
              />
            </div>
          )}

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm text-gray-600 mb-2 font-light">
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
              className={`w-full px-0 py-3 border-0 border-b-2 bg-transparent transition-all duration-200 focus:outline-none focus:border-gray-900 disabled:opacity-50 resize-none ${
                errors.message ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600 font-light">
                {errors.message}
              </p>
            )}
          </div>

          {/* Status Message */}
          {status.message && status.type !== 'success' && (
            <div className={`text-sm font-light ${
              status.type === 'error' 
                ? 'text-red-600' 
                : 'text-gray-600'
            }`}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading || Object.keys(errors).length > 0}
              className="text-gray-900 hover:text-gray-600 transition-colors font-light disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : buttonText} →
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
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <input
        type="email"
        required
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        placeholder="Your email"
        className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-gray-900"
      />
      <textarea
        required
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        placeholder="Quick message..."
        className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-gray-900 resize-none"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="text-gray-900 hover:text-gray-600 transition-colors font-light disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send message'} →
      </button>
    </form>
  )
}