import './ContactInput.css'

const ContactInput = ({ title, placeholder,handleChangeInput,field,value, svg, type }) => {

  const handleChange = (e)=>{

    handleChangeInput(field,e.target.value)

  }


  return (
    <div className="aj-contact-email">
      <h3 className="aj-contact-input-title">{title}</h3>
      <div className="aj-contact-email-input">
        <input type={type} placeholder={placeholder} value={value} onChange={handleChange}/>
        {svg}
      </div>
    </div>
  )
}

export default ContactInput