import type { NextPage } from "next";
import React, {useEffect, useState} from 'react';

function Videos(){
const[videos,setVideos]= useState([]);
useEffect(()=>{
  const getVideos = async()=>{
    const res = await fetch('http://localhost/video/videos');
    const getdata = await res.json();
    setVideos(getdata);
    console.log(getdata);
  }
  getVideos();

},[]);
  return( 
    <React.Fragment>
<div>Videos Page</div>
 {videos.map((v)=>(
<tr key = {v.id}>{v.name}
<img src={v.images}/>
</tr>

 )
 )
}
  
    </React.Fragment> 
  );
}

export default Videos
