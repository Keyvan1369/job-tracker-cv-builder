import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Jobs from "./pages/Jobs.jsx";
import Layout from "./components/Layout.jsx";
import Landing from "./pages/Landing.jsx";
import CVBuilder from "./pages/CVBuilder.jsx";
import MyCVs from "./pages/MyCVs.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
path="/cv-builder/:id?"
  element={
    <ProtectedRoute>
      <Layout>
        <CVBuilder />
      </Layout>

    </ProtectedRoute>
  }
/>
<Route
  path="/my-cvs"
  element={
    <ProtectedRoute>
      <Layout>
      <MyCVs />
      </Layout>

    </ProtectedRoute>
  }
/>
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Layout>
        <Dashboard />
      </Layout>
    </ProtectedRoute>
  }
/>

<Route
  path="/jobs"
  element={
    <ProtectedRoute>
      <Layout>
        <Jobs />
      </Layout>
    </ProtectedRoute>
  }
/>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;