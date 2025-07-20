import React from 'react'

export default function JobApplicationTracker() {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">My Job Applications</h1>
            <div className="flex gap-4 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                    <input type="text" placeholder="Search jobs..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Interview">Interview</option>
                    <option value="Shortlisted">Shortlisted</option>
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=64&h=64&fit=crop" alt="Google" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 className="text-lg font-semibold text-blue-600">Software Engineer Intern</h3>
                        <p className="text-gray-600">Google</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Applied Date:</span>
                        <span className="text-sm font-medium">Oct 15, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Status:</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">Details</button>
                        <button className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">Withdraw</button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=64&h=64&fit=crop" alt="Microsoft" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 className="text-lg font-semibold text-blue-600">Frontend Developer</h3>
                        <p className="text-gray-600">Microsoft</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Applied Date:</span>
                        <span className="text-sm font-medium">Oct 12, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Status:</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">Accepted</span>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">Details</button>
                        <button className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">Withdraw</button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=64&h=64&fit=crop" alt="Amazon" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 className="text-lg font-semibold text-blue-600">Data Scientist</h3>
                        <p className="text-gray-600">Amazon</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Applied Date:</span>
                        <span className="text-sm font-medium">Oct 10, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Status:</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">Interview</span>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">Details</button>
                        <button className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">Withdraw</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
            <p className="text-gray-600">Showing 1-3 of 10 entries</p>
            <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
            </div>
        </div>
    </div>
  )
}
