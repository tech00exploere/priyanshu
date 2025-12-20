import React from 'react'
import Laptop from './Laptop'
import Notebook from './Notebook'
import StickyNotes from './StickyNotes'
import Polaroids from './Polaroids'
import CoffeeCup from './CoffeeCup'
import Calendar from './Calendar'
import FloatingMenu from './FloatingMenu'


export default function Workspace() {
return (
<div className="relative bg-desk p-8 rounded-2xl shadow-xl" style={{backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))'}}>
{/* Desk layout grid */}
<div className="grid grid-cols-12 gap-6">
<div className="col-span-4">
<Notebook />
<div className="mt-6"><Polaroids /></div>
</div>


<div className="col-span-4 flex items-center justify-center">
<Laptop />
</div>


<div className="col-span-4">
<StickyNotes />
<div className="mt-6"><CoffeeCup /></div>
</div>
</div>


<div className="mt-8 flex justify-center">
<Calendar />
</div>


<FloatingMenu />
</div>
)
}