import { useState } from "react";

export default function Assistant() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3]">
      <div className="flex-grow p-6 flex flex-col items-center justify-center gap-10">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-[#2a2f45] mb-6 text-center">
            GOVMSE+ AI 🤖
          </h1>

          {!started ? (
            <div className="text-lg space-y-6 text-center">
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
      </div>

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
