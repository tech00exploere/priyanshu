import React from 'react'
import { motion } from 'framer-motion'


const notes = [
{color: 'bg-yellow-200', title: 'Python', items: ['Pandas','NumPy','scikit-learn']},
{color: 'bg-pink-200', title: 'ML', items: ['Regression','Classification','EDA']},
{color: 'bg-green-200', title: 'Web', items: ['Django','Next.js','Tailwind']},
{color: 'bg-blue-200', title: 'Tools', items: ['Git','AWS ML','SQL']}
]


export default function StickyNotes(){
return (
<div>
<h3 className="text-deepbrown font-semibold mb-2">Skills</h3>
<div className="flex flex-wrap gap-3">
{notes.map((n, i)=> (
<motion.div key={i} whileHover={{ y: -6, rotate: [0, -2, 1, 0] }} className={`${n.color} p-3 rounded shadow-md w-36`}>
<h4 className="font-semibold text-sm">{n.title}</h4>
<ul className="text-xs mt-1 text-gray-700">
{n.items.map((it, idx)=> <li key={idx}>• {it}</li>)}
</ul>
</motion.div>
))}
</div>
</div>
)
}