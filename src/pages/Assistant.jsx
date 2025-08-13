import { useState } from "react";

export default function Assistant() {
  const [started, setStarted] = useState(false);
  const [selectedDocs, setSelectedDocs] = useState([]);

  const documents = [
    "GST Certificate",
    "UDYAM Certificate",
    "LICENSE Certificate",
    "PAN Certificate",
    "MSME Certificate",
    "TRADE Certificate",
  ];

  const toggleDoc = (doc) => {
    setSelectedDocs((prev) =>
      prev.includes(doc) ? prev.filter((d) => d !== doc) : [...prev, doc]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3]">
      <div className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - AI Assistant */}
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col">
          <h1 className="text-3xl font-extrabold text-[#2a2f45] mb-6 text-center">
            GOVMSE+ AI 🤖
          </h1>
          {!started ? (
            <div className="text-lg space-y-6 text-center flex-1 flex flex-col justify-center">
              <p>👋 Hi! I’m your AI assistant for MSME compliance and business guidance.</p>
              <button
                onClick={() => setStarted(true)}
                className="bg-[#4169E1] text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                Start Guidance
              </button>
            </div>
          ) : (
            <div className="w-full h-[600px] shadow-lg border rounded-lg overflow-hidden">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/eN-yBmvj2aUu_7jdNh0kx"
                width="100%"
                style={{ height: "100%", minHeight: "600px" }}
                frameBorder="0"
                title="GOVMSE+ AI Chat"
              ></iframe>
            </div>
          )}
        </div>

        {/* Right - Compliance Report */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-[#2a2f45] mb-6 text-center">
            Your Compliance Report
          </h1>
          <p className="text-gray-600 mb-4 text-center">
            Select the documents you have to generate your compliance PDF.
          </p>
          <div className="space-y-4">
            {documents.map((doc) => (
              <label
                key={doc}
                className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedDocs.includes(doc)}
                  onChange={() => toggleDoc(doc)}
                  className="w-5 h-5 text-[#4169E1] focus:ring-[#4169E1]"
                />
                <span>{doc}</span>
              </label>
            ))}
          </div>
          <button
            onClick={() => alert(`Generate PDF for: ${selectedDocs.join(", ")}`)}
            className="mt-6 w-full bg-[#4169E1] text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Generate PDF
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white text-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} GOVMSE+. All rights reserved.</div>
          <div>
            <p>
              Contact us:{" "}
              <a href="mailto:support@govmse.in" className="underline">
                support@govmse.in
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
