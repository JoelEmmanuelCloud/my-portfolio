'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, User, Mail, Building, MessageSquare } from 'lucide-react'
import { isValidEmail } from '@/lib/utils'

export default function ContactForm({
  title = "Send a Message",
  subtitle = "Have a project or opportunity? Let's discuss how we can work together.",
  showCompanyField = true,
  buttonText = "Send Message",
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
      message: 'Sending message...'
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
          message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
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
          message: errorData.error || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    }
  }

  const isLoading = status.type === 'loading'
  const isSuccess = status.type === 'success'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${className}`}
    >
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Success State */}
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600 mb-6">
              {status.message}
            </p>
            <button
              onClick={() => setStatus({ type: '', message: '' })}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name and Email Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
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
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Your name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="name-error"
                    className="mt-1 text-sm text-red-600 flex items-center"
                  >
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
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
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="email-error"
                    className="mt-1 text-sm text-red-600 flex items-center"
                  >
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Company Field */}
            {showCompanyField && (
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="inline h-4 w-4 mr-1" />
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Your company (optional)"
                />
              </div>
            )}

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline h-4 w-4 mr-1" />
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isLoading}
                className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:cursor-not-allowed resize-none ${
                  errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Tell me about your project or opportunity..."
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  id="message-error"
                  className="mt-1 text-sm text-red-600 flex items-center"
                >
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.message}
                </motion.p>
              )}
              <div className="mt-1 text-xs text-gray-500">
                {formData.message.length}/500 characters
              </div>
            </div>

            {/* Status Message */}
            {status.message && status.type !== 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center ${
                  status.type === 'error' 
                    ? 'bg-red-50 text-red-700 border border-red-200' 
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                {status.type === 'error' ? (
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                ) : (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2 flex-shrink-0" />
                )}
                {status.message}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || Object.keys(errors).length > 0}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  {buttonText}
                </div>
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 text-center">
              Your information is secure and will only be used to respond to your inquiry.
            </p>
          </form>
        )}
      </div>
    </motion.div>
  )
}

// Inline compact version for embedding in other components
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
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <input
        type="email"
        required
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        placeholder="Your email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <textarea
        required
        rows={3}
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        placeholder="Quick message..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}