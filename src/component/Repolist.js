import React from "react"

const Repolist = ({repolist})=>{
   return(

        <ul >
          {repolist.map((data, i) => {
            return(

              <li key={i}>
                 {data.name}
              </li>
            )
          })}
          </ul>  
   )
  
}


export default Repolist