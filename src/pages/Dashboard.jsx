export default function Dashboard() {
  const token = localStorage.getItem("token");
  const email = token ? JSON.parse(atob(token.split('.')[1])).sub : null;
  const firstName = email ? email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1) : "Guest";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3] p-6 flex flex-col">
      <div className="max-w-5xl mx-auto flex-grow">
        <h1 className="text-3xl font-extrabold mb-6 text-white">
          Welcome back, {firstName} 👋
        </h1>

        {/* GST Registration Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#4169E1] mb-6">
          <h2 className="text-xl font-bold text-[#2a2f45] mb-4">
            GST Registration <span className="text-sm text-gray-500">(ID: 8923-A)</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">✔</span>
              <div>
                <p className="font-semibold">Submitted</p>
                <p className="text-sm text-gray-500">28 Jul 2025</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#4169E1] text-[#4169E1] mr-3">○</span>
              <div>
                <p className="font-semibold">Under Review</p>
                <p className="text-sm text-gray-500">Est. 04 Aug 2025</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 mr-3">○</span>
              <div>
                <p className="font-semibold">Approved</p>
                <p className="text-sm text-gray-500">Est. 10 Aug 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shop & Establishment License Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#43CD80]">
          <h2 className="text-xl font-bold text-[#2a2f45] mb-4">
            Shop & Establishment License <span className="text-sm text-gray-500">(ID: 7155-B)</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">✔</span>
              <div>
                <p className="font-semibold">Submitted</p>
                <p className="text-sm text-gray-500">28 Jul 2025</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#43CD80] text-[#43CD80] mr-3">○</span>
              <div>
                <p className="font-semibold">Under Review</p>
                <p className="text-sm text-gray-500">Est. 04 Aug 2025</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 mr-3">○</span>
              <div>
                <p className="font-semibold">Approved</p>
                <p className="text-sm text-gray-500">Est. 10 Aug 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-400 mt-6">
          <h2 className="text-xl font-bold mb-4 text-[#2a2f45]">What Can You Do Today?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>🎯 Check your GovScore to identify missing documents.</li>
            <li>🤖 Ask the AI Assistant for license/NOC help specific to Delhi MSMEs.</li>
            <li>📄 Download your compliance Vault report for funding/tender use.</li>
            <li>💡 Keep your profile updated for more accurate assistance.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white text-sm py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} GovMSE. All rights reserved.</div>
          <div>
            Contact us:{" "}
            <a href="mailto:support@govmse.in" className="underline">
              support@govmse.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
