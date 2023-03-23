const Subsciptions = (props) => {

   /* let month = "Jan";
    let name = "Lovkush";
    let appName = "Netflix"; */

  return (
    <>
    <h2 className="subscription_title">{props.passedtitle}</h2>
    <div className="subscription_price"> {props.passedamount} </div>
    </>
  )
}

export default Subsciptions;
