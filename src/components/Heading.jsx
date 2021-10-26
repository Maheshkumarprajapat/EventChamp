import React from 'react'
import { FaRegFolder } from "react-icons/fa";

export default function Heading({desc, ttl1, ttl2}) {
    return (
        <>
           <div className="section-title">
            <div className="title-heading">
              {ttl1} <span>{ttl2}</span>
            </div>
            <div className="title-border">
              <div className="title-icon">
                <FaRegFolder />
              </div>
            </div>
            <div className="title-text">{desc}</div>
          </div>

        </>
    )
}
