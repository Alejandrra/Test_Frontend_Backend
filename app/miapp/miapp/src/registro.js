import React from 'react';

const registro = () => {
  return (
    <div className="container">
      <h2>Registro</h2>
      <form>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Registro</button>
      </form>
    </div>
  );
}

export default registro;
