import React from 'react'
import { NavLink } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="flex items-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<NavLink rel="noopener noreferrer" to={'/'} className="px-8 py-3 font-semibold rounded hover:bg-blue-600 hover:text-white ">Back to homepage</NavLink>
		</div>
	</div>
</section>
  )
}
