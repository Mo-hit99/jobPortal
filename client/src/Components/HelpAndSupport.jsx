import React from 'react'

export default function HelpAndSupport() {
 return (
    <div className="container mx-auto p-4">
    {/* <!-- FAQ Section --> */}
    <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div class="space-y-4">
            <details className="bg-white p-4 rounded shadow">
                <summary className="font-bold cursor-pointer">How do I reset my password?</summary>
                <p className="mt-2">You can reset your password by clicking on the 'Forgot Password' link on the login page.</p>
            </details>
            <details class="bg-white p-4 rounded shadow">
                <summary className="font-bold cursor-pointer">Where can I find my course materials?</summary>
                <p className="mt-2">Course materials are available in the 'Resources' section of your course page.</p>
            </details>
            {/* <!-- Add more FAQs as needed --> */}
        </div>
    </div>
    
    {/* <!-- Contact Section --> */}
    <div class="mt-8">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <p><strong>Email:</strong> support@example.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">Send us a message</h3>
                <form className='border border-solid border-gray-200 rounded p-2 shadow'>
                    <input type="text" placeholder="Name" className="p-2 rounded w-full mb-2" />
                    <input type="email" placeholder="Email" className="p-2 rounded w-full mb-2" />
                    <textarea placeholder="Message" className="p-2 rounded w-full mb-2"></textarea>
                    <button className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">Send</button>
                </form>
            </div>
        </div>
    </div>
    
    {/* <!-- Resources Section --> */}
    <div class="mt-8">
        <h2 className="text-xl font-bold mb-4">Helpful Resources</h2>
        <ul className="list-disc pl-5 space-y-2">
            <li><a href="#" className="text-blue-500 hover:underline">Study Tips for Students</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">How to Use the Library Resources</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Time Management Techniques</a></li>
        </ul>
    </div>
</div>
  )
}
