import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Use Navigate instead of Redirect
import { useState } from "react";
import Level1 from "./Levels/Level1";
import Level2 from "./Levels/Level2"; // Assuming you have these components
import Level3 from "./Levels/Level3";
import Level4 from "./Levels/Level4";
import Level5 from './Levels/Level5';
import Level6 from './Levels/Level6';
import Level7 from './Levels/Level7';
import Level8 from './Levels/Level8';
import Level9 from './Levels/Level9';
import Level10 from './Levels/Level10';
import Level11 from './Levels/Level11';
import Level12 from './Levels/Level12';
import Level13 from './Levels/Level13';
import Level14 from './Levels/Level14';
import Level15 from './Levels/Level15';
import Level16 from './Levels/Level16';

function App() {
  // Initialize completedLevels from local storage
  const [completedLevels, setCompletedLevels] = useState(() => {
    const savedLevels = localStorage.getItem("completedLevels");
    return savedLevels
      ? JSON.parse(savedLevels)
      : { level1: false, level2: false };
  });

  // Define the ProtectedRoute function
  const ProtectedRoute = ({ completed, redirectTo, children }) => {
    return completed ? children : <Navigate to={redirectTo} />;
  };

  return (
    <Router>
      <Routes>
        {/* Route for Level 1 */}
        <Route
          path="/level1"
          element={<Level1 setCompletedLevels={setCompletedLevels} />}
        />

        {/* Protected Route for Level 2 */}
        <Route
          path="/level2"
          element={
            <ProtectedRoute
              completed={completedLevels.level1}
              redirectTo="/level1"
            >
              <Level2 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/level3"
          element={
            <ProtectedRoute
              completed={completedLevels.level2}
              redirectTo="/level2"
            >
              <Level3 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level4"
          element={
            <ProtectedRoute
              completed={completedLevels.level3}
              redirectTo="/level3"
            >
              <Level4 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level5"
          element={
            <ProtectedRoute
              completed={completedLevels.level4}
              redirectTo="/level4"
            >
              <Level5 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level6"
          element={
            <ProtectedRoute
              completed={completedLevels.level5}
              redirectTo="/level5"
            >
              <Level6 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level7"
          element={
            <ProtectedRoute
              completed={completedLevels.level6}
              redirectTo="/level6"
            >
              <Level7 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level8"
          element={
            <ProtectedRoute
              completed={completedLevels.level7}
              redirectTo="/level7"
            >
              <Level8 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level9"
          element={
            <ProtectedRoute
              completed={completedLevels.level8}
              redirectTo="/level8"
            >
              <Level9 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level10"
          element={
            <ProtectedRoute
              completed={completedLevels.level9}
              redirectTo="/level9"
            >
              <Level10 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level11"
          element={
            <ProtectedRoute
              completed={completedLevels.level10}
              redirectTo="/level10"
            >
              <Level11 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level12"
          element={
            <ProtectedRoute
              completed={completedLevels.level11}
              redirectTo="/level11"
            >
              <Level12 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level13"
          element={
            <ProtectedRoute
              completed={completedLevels.level12}
              redirectTo="/level12"
            >
              <Level13 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level14"
          element={
            <ProtectedRoute
              completed={completedLevels.level13}
              redirectTo="/level13"
            >
              <Level14 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level15"
          element={
            <ProtectedRoute
              completed={completedLevels.level14}
              redirectTo="/level14"
            >
              <Level15 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/level16"
          element={
            <ProtectedRoute
              completed={completedLevels.level15}
              redirectTo="/level15"
            >
              <Level16 setCompletedLevels={setCompletedLevels} />
            </ProtectedRoute>
          }
        />

        {/* Fallback route to Level 1 */}
        <Route path="*" element={<Navigate to="/level1" />} />
      </Routes>
    </Router>
  );
}

export default App;
