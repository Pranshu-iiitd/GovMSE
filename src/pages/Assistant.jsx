import { useState } from "react";

export default function Assistant() {
  const [startedAI, setStartedAI] = useState(false);
  const [startedCompliance, setStartedCompliance] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");

  const documents = [
    "GST Certificate",
    "UDYAM Certificate",
    "LICENSE Certificate",
    "PAN Certificate",
    "MSME Certificate",
    "TRADE Certificate",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3]">
      <div className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left - AI Assistant */}
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col">
          <h1 className="text-3xl font-extrabold text-[#2a2f45] mb-6 text-center">
            GOVMSE+ AI 🤖
          </h1>

          {!startedAI ? (
            <div className="text-lg space-y-6 text-center flex-1 flex flex-col justify-center">
              <p>👋 Hi! I’m your AI assistant for MSME compliance and business guidance.</p>
              <button
                onClick={() => setStartedAI(true)}
                className="bg-[#4169E1] text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                Start AI
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
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col">
          <h1 className="text-3xl font-extrabold text-[#2a2f45] mb-6 text-center">
            Your Compliance Report 📄
          </h1>

          {!startedCompliance ? (
            <div className="text-lg space-y-6 text-center flex-1 flex flex-col justify-center">
              <p>🛡 Start your compliance check by selecting the document and entering your business details.</p>
              <button
                onClick={() => setStartedCompliance(true)}
                className="bg-[#4169E1] text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                Start Compliance
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Dropdown */}
              <select
                value={selectedDoc}
                onChange={(e) => setSelectedDoc(e.target.value)}
                className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-[#4169E1]"
              >
                <option value="">Select a Document</option>
                {documents.map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>

              {/* Business Number */}
              <input
                type="text"
                placeholder="Enter Business Number"
                value={businessNumber}
                onChange={(e) => setBusinessNumber(e.target.value)}
                className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-[#4169E1]"
              />

              {/* Button */}
              <button
                onClick={() => alert(`Compliance Report:\nDocument: ${selectedDoc}\nBusiness Number: ${businessNumber}`)}
                className="bg-[#4169E1] text-white py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Generate Compliance Report
              </button>
            </div>
          )}
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
