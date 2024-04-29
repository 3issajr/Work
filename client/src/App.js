import AdminIndex from './admin/AppAdmin';
import UserIndex from './user/AppUser';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
        <Routes>
            <Route path="/Admin/*" element={<AdminIndex/>} />
            <Route path="/*" element={<UserIndex/>} />
        </Routes>
  );
}

export default App;
