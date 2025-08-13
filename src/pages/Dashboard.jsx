export default function Dashboard() {
  const token = localStorage.getItem("token");
  const email = token ? JSON.parse(atob(token.split('.')[1])).sub : null;
  const firstName = email
    ? email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
    : "Guest";

  const StatusStep = ({ status, label, date, color }) => {
    return (
      <div className="flex items-start relative">
        {/* Circle */}
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${color} z-10`}
        >
          {status === "completed" ? "✔" : "○"}
        </div>
        {/* Vertical line */}
        <div className="absolute left-3 top-6 w-0.5 h-full bg-gray-300"></div>
        {/* Label */}
        <div className="ml-4">
          <p className="font-semibold">{label}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    );
  };

  const StatusTracker = ({ steps }) => (
    <div className="relative space-y-6">
      {steps.map((step, idx) => (
        <div key={idx} className="relative">
          <StatusStep {...step} />
          {idx === steps.length - 1 && (
            <div className="absolute left-3 top-6 w-0.5 h-full bg-transparent"></div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3] p-6 flex flex-col">
      <div className="max-w-5xl mx-auto flex-grow">
        <h1 className="text-3xl font-extrabold mb-6 text-white">
          Welcome back, {firstName} 👋
        </h1>

        {/* GST Registration Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#4169E1] mb-6">
          <h2 className="text-xl font-bold text-[#2a2f45] mb-6">
            GST Registration <span className="text-sm text-gray-500">(ID: 8923-A)</span>
          </h2>
          <StatusTracker
            steps={[
              {
                status: "completed",
                label: "Submitted",
                date: "13 Aug 2025",
                color: "bg-green-100 text-green-600 border-green-500",
              },
              {
                status: "active",
                label: "Under Review",
                date: "20 Aug 2025",
                color: "border-[#4169E1] text-[#4169E1]",
              },
              {
                status: "pending",
                label: "Approved",
                date: "27 Aug 2025",
                color: "border-gray-400 text-gray-400",
              },
            ]}
          />
        </div>

        {/* Shop & Establishment License Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#43CD80]">
          <h2 className="text-xl font-bold text-[#2a2f45] mb-6">
            Shop & Establishment License <span className="text-sm text-gray-500">(ID: 7155-B)</span>
          </h2>
          <StatusTracker
            steps={[
              {
                status: "completed",
                label: "Submitted",
                date: "13 Aug 2025",
                color: "bg-green-100 text-green-600 border-green-500",
              },
              {
                status: "active",
                label: "Under Review",
                date: "20 Aug 2025",
                color: "border-[#43CD80] text-[#43CD80]",
              },
              {
                status: "pending",
                label: "Approved",
                date: "27 Aug 2025",
                color: "border-gray-400 text-gray-400",
              },
            ]}
          />
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
