'use client'

const page = () => {
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-6 my-3">Counter = 0</div>
        <div className="col-6">
          <button className = "btn btn-primary px-5 mx-5 my-3">Increase</button>
          <button className = "btn btn-warning px-5 mx-5 my-3">decrease</button>
        </div>
      </div>
     </div>
      
    </>
  )
}

export default page;
