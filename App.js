
import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">CanYouA4rd</h1>
        <p className="text-center text-lg mb-12">
          Get a personalised AI-generated financial plan to see if you can truly afford that car, house, holiday or lifestyle. One-time payment. Clear answers. Aussie-friendly.
        </p>
        <div className="bg-white shadow rounded p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Get Started</h2>
          <form className="space-y-4">
            <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Your Name" required />
            <input className="w-full p-2 border border-gray-300 rounded" type="email" placeholder="Email Address" required />
            <input className="w-full p-2 border border-gray-300 rounded" type="number" placeholder="Weekly Income ($)" required />
            <input className="w-full p-2 border border-gray-300 rounded" type="number" placeholder="Weekly Expenses ($ incl. rent, petrol, food)" required />
            <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="What do you want to afford? (e.g. Mustang GT, $75k, by Feb 2026)" required></textarea>
            <button className="w-full p-2 bg-blue-600 text-white rounded" type="submit">Proceed to Payment ($20)</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
