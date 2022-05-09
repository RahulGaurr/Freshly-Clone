import './category.css';
function Category1({image, label, label2}) {
    return <div className='category1'> 
        <img src={image} width={140} height={150} alt="" />
      <h2>  {label} <br /> </h2>
        {label2}
    </div>
}
function Category2({image, title,label1, label2,link}) {
  return <div className='category2'> 
      <img src={image} width={470} height={260} alt="" />
      <div className='cat2Text'> 
    <p className='title'>   {title} </p>
    <div className='label-1'>{label1}</div> 
<div className='label-2'> {label2} <br /></div>  <br />
<br /> 
     
    <a className='link-more' href="">{link}</a> 

    </div>  
  </div>
}

function Category3 ({image,title}) {
  return <div className='category3'>
    <img src={image} width={260} height={160} alt="" />
    <h3 className='h33'>{title}</h3>
  </div>
}


export {Category1}
export {Category2}
export {Category3}