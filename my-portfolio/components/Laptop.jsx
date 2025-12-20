import React from 'react'
import { motion } from 'framer-motion'


export default function Laptop() {
return (
<div className="w-80 h-56 flex items-center justify-center relative">
<motion.div
initial={{ y: 10, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ type: 'spring', stiffness: 80 }}
className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col overflow-hidden"
>
<div className="flex-1 flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
<div className="text-center p-4">
<h1 className="text-2xl font-semibold text-deepbrown">Priyanshu</h1>
<p className="text-sm text-gray-600 mt-1">Data Science Engineer • Web Developer</p>
<div className="mt-4 flex gap-3 justify-center">
<button className="px-3 py-1 rounded-md bg-warmorange text-white text-sm">View Resume</button>
<button className="px-3 py-1 rounded-md border border-gray-200 text-sm">Explore Workspace</button>
</div>
</div>
</div>
<div className="h-10 bg-gray-100 flex items-center justify-center text-xs text-gray-500">MacBook-style hinge</div>
</motion.div>
</div>
)
}