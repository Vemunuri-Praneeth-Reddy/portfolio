
import { useState } from 'react'

interface FormData {
    name: string
    email: string
    message: string
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error'
    message: string
}

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.name.trim()) {
            setStatus({ type: 'error', message: 'Please enter your name.' })
            return
        }
        if (!formData.email.trim()) {
            setStatus({ type: 'error', message: 'Please enter your email.' })
            return
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' })
            return
        }
        setStatus({ type: 'loading', message: '' })

        // We will connect this to Go backend later
        console.log('Form submitted:', formData)
        setStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' })
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section heading */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
                    <div className="w-16 h-1 bg-accent mt-3 rounded-full"></div>
                </div>

                <div className="max-w-2xl">
                    <p className="text-gray-600 text-lg mb-8">
                        Have an opportunity or just want to say hi? Fill out the form below and I'll get back to you.
                    </p>

                    <div className="flex flex-col gap-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors duration-200"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors duration-200"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message..."
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                            />
                        </div>

                        {/* Status message */}
                        {status.type === 'success' && (
                            <p className="text-green-600 font-medium">{status.message}</p>
                        )}
                        {status.type === 'error' && (
                            <p className="text-red-600 font-medium">{status.message}</p>
                        )}

                        {/* Submit button */}
                        <button
                            onClick={handleSubmit}
                            disabled={status.type === 'loading'}
                            className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 w-fit"
                        >
                            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact