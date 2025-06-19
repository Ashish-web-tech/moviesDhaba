import React from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";

function App() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="/img/bg.jpg"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 z-10"></div>

      {/* Overlay Content */}
      <div className="relative z-20 px-4">
        <Header />
        <InputField />
      </div>
    </div>
  );
}

export default App;
