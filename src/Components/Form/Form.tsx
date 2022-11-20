import React from 'react';

const Form = () => {
  return (
    <div className=''>
      <form className="d-flex flex-column ps-3 pe-3">
        <div className="d-flex justify-content-center mt-4  mb-4">
          <input type="text" placeholder="Your username" className="rounded-4"/>
        </div>
        <textarea cols={100} rows={3} placeholder="Your message" style={{resize:"none"}} className="rounded-4"></textarea>
        <div className="d-flex justify-content-center mt-3 mb-4">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;