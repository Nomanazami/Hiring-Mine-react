import React from 'react';

function JobDetail() {
  return (
  
    <>
    <div style={{
      display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",
    }}>
      <button style={{
        
        color:"#6e41eb",backgroundColor:"#6851ff",color:"white",borderRadius:"50px"
      }} >  Find Jobs</button>
      <h3 style={{
        color:"#6e41eb"
      }} >Popular Searches</h3>
    <Button/>
    </div>

    <div>
    <h3>Get Hired In 4 <span>Quick Easy Steps (Coming Soon)</span></h3>
    <p></p>
    </div>
    </>
  );
}

export default JobDetail;

export function Button() {
    return(
        <div>
            <button>React</button>
            <button>Software</button>
            <button>Backend</button>
            <button>Developer</button>
            <button>Node</button>
            <button>React Native</button>
            <button>Flutter</button>
            <button>UI/UX</button>
            <button>Web</button>
            <button>SEO</button>
            <button>Marketing</button>
            <button>Writer</button>
        </div>
    )
}