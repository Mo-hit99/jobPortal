import React from 'react'

export default function RecruiterHandleJobApplication() {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Applications Dashboard</h1>
                <div className="mt-2 flex gap-4">
                    <div className="text-sm">
                        <span className="text-gray-500">Total Applications:</span>
                        <span className="font-semibold">45</span>
                    </div>
                    <div className="text-sm">
                        <span className="text-gray-500">Pending Review:</span>
                        <span className="font-semibold text-yellow-600">12</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                    <input type="text" placeholder="Search applicants..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">All Status</option>
                    <option value="Pending">Pending Review</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Interview">Interview Stage</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Hired">Hired</option>
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop" alt="Applicant Photo" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">John Davidson</h3>
                        <p className="text-gray-600">Software Engineer Position</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Applied Date:</span>
                        <span className="text-sm font-medium">Oct 15, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Experience:</span>
                        <span className="text-sm font-medium">3 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Current Status:</span>
                        <select className="text-sm px-2 py-1 rounded-lg border border-gray-300">
                            <option>Pending Review</option>
                            <option>Shortlisted</option>
                            <option>Interview Stage</option>
                            <option>Rejected</option>
                            <option>Hired</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg">View Profile</button>
                        <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg">Schedule Interview</button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop" alt="Applicant Photo" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Sarah Miller</h3>
                        <p className="text-gray-600">Frontend Developer Position</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Applied Date:</span>
                        <span className="text-sm font-medium">Oct 12, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Experience:</span>
                        <span className="text-sm font-medium">2 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Current Status:</span>
                        <select className="text-sm px-2 py-1 rounded-lg border border-gray-300">
                            <option>Interview Stage</option>
                            <option>Shortlisted</option>
                            <option>Pending Review</option>
                            <option>Rejected</option>
                            <option>Hired</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg">View Profile</button>
                        <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg">Schedule Interview</button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop" alt="Applicant Photo" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Michael Chen</h3>
                        <p className="text-gray-600">Data Scientist Position</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Applied Date:</span>
                        <span className="text-sm font-medium">Oct 10, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Experience:</span>
                        <span className="text-sm font-medium">4 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Current Status:</span>
                        <select className="text-sm px-2 py-1 rounded-lg border border-gray-300">
                            <option>Shortlisted</option>
                            <option>Interview Stage</option>
                            <option>Pending Review</option>
                            <option>Rejected</option>
                            <option>Hired</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg">View Profile</button>
                        <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg">Schedule Interview</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
            <p className="text-gray-600">Showing 1-3 of 45 applications</p>
            <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
            </div>
        </div>
    </div>
  )
}
