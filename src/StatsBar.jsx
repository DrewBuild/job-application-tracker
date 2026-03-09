function StatsBar({jobs,filter,setFilter}){

const interviews = jobs.filter(j=>j.status==="Interview").length
const offers = jobs.filter(j=>j.status==="Offer").length
const rejected = jobs.filter(j=>j.status==="Rejected").length

function card(status){

if(filter===status) return "stat-card active"

return "stat-card"

}

return(

<div className="stats-bar">

<div
className={card("All")}
onClick={()=>setFilter("All")}
>

<span className="stat-number">{jobs.length}</span>

<p className="stat-label">Applications</p>

</div>

<div
className={card("Interview")}
onClick={()=>setFilter("Interview")}
>

<span className="stat-number">{interviews}</span>

<p className="stat-label">Interviews</p>

</div>

<div
className={card("Offer")}
onClick={()=>setFilter("Offer")}
>

<span className="stat-number">{offers}</span>

<p className="stat-label">Offers</p>

</div>

<div
className={card("Rejected")}
onClick={()=>setFilter("Rejected")}
>

<span className="stat-number">{rejected}</span>

<p className="stat-label">Rejected</p>

</div>

</div>

)

}

export default StatsBar