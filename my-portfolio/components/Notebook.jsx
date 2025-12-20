import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function Notebook(){
const [open, setOpen] = useState(false)
return (
<div>
<div className="flex items-center gap-4">
<img src="/images/placeholder-notebook.png" alt="notebook" className="w-36 rounded-md shadow" />
<div>
<h3 className="text-deepbrown font-semibold">Notebook</h3>
<p className="text-sm text-gray-700">About / Journey</p>
<button onClick={()=>setOpen(true)} className="mt-2 px-3 py-1 bg-white rounded border">Open</button>
</div>
</div>


<AnimatePresence>
{open && (
<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
<motion.div initial={{scale:0.9}} animate={{scale:1}} exit={{scale:0.95}} className="bg-white rounded-lg p-6 w-[520px] shadow-2xl">
<div className="flex justify-between items-start">
<h2 className="text-xl font-bold">About Me</h2>
<button onClick={()=>setOpen(false)} className="text-gray-400">Close</button>
</div>
<div className="mt-4 text-sm text-gray-700 space-y-3">
<p><strong>Who I am:</strong> I am Priyanshu, a B.Tech CSE (Data Science) student at AKGEC, passionate about data, AI and building things.</p>
<p><strong>Education:</strong> AKGEC — B.Tech CSE (Data Science)</p>
<p><strong>Goals:</strong> Build an AI + blockchain OS, create impactful data science projects, grow my YouTube channel 'OurMemeWorld'.</p>
</div>
</motion.div>
</motion.div>
)}
</AnimatePresence>
</div>
)
}