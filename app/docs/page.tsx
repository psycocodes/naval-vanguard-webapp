import React from "react";

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-3">
            Maritime Surveillance Dashboard
          </h1>
          <div className="h-1 w-20 bg-blue-600 mb-4" />
          <p className="text-gray-400">User Guide & Documentation</p>
        </header>

        {/* Introduction */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-blue-500">01</span> Introduction
          </h2>
          <div className="space-y-4">
            <p className="leading-relaxed">
              Welcome to the Maritime Surveillance Dashboard, a real-time
              monitoring platform designed to enhance maritime security and
              situational awareness. This dashboard provides an intuitive
              interface for tracking vessels, monitoring maritime zones, and
              gaining insights into ongoing activities in specific regions.
            </p>
            <p className="leading-relaxed">
              The platform assists users in identifying and managing patrol
              vessels, surveillance zones, and other maritime assets. Whether
              overseeing routine patrols, responding to incidents, or monitoring
              the maritime landscape, the dashboard equips you with essential
              tools.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Patrol Vessel Tracking",
                    desc: "Monitor the movements of patrol vessels, including location, speed, heading, and operational status.",
                  },
                  {
                    title: "Communication Network",
                    desc: "Broadcast communication messages and extract relevant information from incoming and outgoing transmission.",
                  },
                  {
                    title: "Alert System",
                    desc: "Receive alerts based on priority of communication messages.",
                  },
                  {
                    title: "Zone Surveillance",
                    desc: "Track maritime zones, with detailed information on security status and alerts.",
                  },
                  {
                    title: "Customizable Views",
                    desc: "Tailor the map to display specific vessels, vessel contacts, communication messages, zones, or both.",
                  },
                  {
                    title: "User-Friendly Controls",
                    desc: "Utilize simple search, zoom, and hover functionalities for efficient information retrieval.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 bg-gray-900/50 p-4 rounded-lg"
                  >
                    <h4 className="font-medium text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-blue-500">02</span> Getting Started
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Accessing the Dashboard
              </h3>
              <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg space-y-4">
                <p className="font-medium text-white">Opening the Dashboard:</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">•</span>
                    Open a web browser and navigate to the provided web link for
                    the Maritime Surveillance Dashboard.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">•</span>
                    Once loaded, the interactive map showcasing maritime zones
                    and patrol vessels will appear.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Interface Components
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Interactive Map",
                    desc: "The central feature displays real-time maritime zones and patrol vessels with interactive markers.",
                  },
                  {
                    title: "Sidebar Information Panel",
                    desc: "Located on the right, it updates with detailed data for selected vessels or zones.",
                  },
                  {
                    title: "Search Bar",
                    desc: "At the top, it allows quick location of vessels or zones using keywords.",
                  },
                  {
                    title: "Zoom and Fullscreen Controls",
                    desc: "In the top-left corner, buttons adjust your view or expand the map for detailed visibility.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 bg-gray-900/50 p-4 rounded-lg"
                  >
                    <h4 className="font-medium text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                View Customization
              </h3>
              <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg">
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium text-white mb-2">Vessels</h4>
                    <p className="text-gray-400">
                      Display or hide patrol vessels based on your focus.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium text-white mb-2">Zones</h4>
                    <p className="text-gray-400">
                      Toggle visibility of specific maritime zones, such as the
                      Lakshadweep Islands.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium text-white mb-2">
                      Contact Reports
                    </h4>
                    <p className="text-gray-400">
                      View vessel contacts and surveillance reports in real time
                      on the map.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium text-white mb-2">
                      Combined View
                    </h4>
                    <p className="text-gray-400">
                      Choose to display both vessels and zones or only one type
                      as needed.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-blue-500">03</span> Dashboard Overview
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Interactive Map
              </h3>
              <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg space-y-4">
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium text-white mb-2">
                      Patrol Vessels
                    </h4>
                    <p className="text-gray-400">
                      Represented by colored markers; clicking a vessel reveals
                      its name, location, heading, speed, and last report
                      timestamp.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium text-white mb-2">
                      Maritime Zones
                    </h4>
                    <p className="text-gray-400">
                      Highlighted areas such as the Lakshadweep Islands.
                      Hovering or selecting a zone reveals additional details
                      like name, coordinates, and surveillance type.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Information Panel
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-white mb-3">
                    Vessel Details
                  </h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Vessel Name: Identifier of the patrol vessel</li>
                    <li>
                      Routine/Current Activity: Describes the vessel's current
                      operation
                    </li>
                    <li>
                      Location Information: Latitude and longitude coordinates
                    </li>
                    <li>Speed and Heading: Current speed and direction</li>
                    <li>Timestamp: Last report time</li>
                  </ul>
                </div>

                <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-white mb-3">
                    Zone Information
                  </h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Zone Name: Designation of the maritime zone</li>
                    <li>Type: Purpose of the zone (e.g., surveillance)</li>
                    <li>Coordinates: Geographic boundaries</li>
                    <li>Description: Additional operational details</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Additional Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Search Functionality",
                    items: [
                      "Real-Time Filtering: The map dynamically updates results as you type",
                      "Search Criteria: Search by vessel name, zone name, or relevant maritime keywords",
                    ],
                  },
                  {
                    title: "Map Controls",
                    items: [
                      "Zoom Controls: Use the zoom in (+) and zoom out (-) buttons for map adjustments",
                      "Full Screen Mode: Expands the map for an immersive experience",
                    ],
                  },
                ].map((section, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg"
                  >
                    <h4 className="font-medium text-white mb-3">
                      {section.title}
                    </h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-500">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support & Maintenance */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-blue-500">04</span> Support & Maintenance
          </h2>

          <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-500">📧</span>
                <span>agnijdutta413@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">📱</span>
                <span>8583848726</span>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-blue-500">05</span> Conclusion
          </h2>

          <div className="space-y-8">
            <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Summary of Benefits
              </h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium text-white mb-2">
                    Real-Time Tracking
                  </h4>
                  <p className="text-gray-400">
                    Gain immediate insights into vessel movements and maritime
                    zone statuses.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium text-white mb-2">
                    Enhanced Situational Awareness
                  </h4>
                  <p className="text-gray-400">
                    Make informed decisions with comprehensive data at your
                    fingertips.
                  </p>
                </li>
              </ul>
            </div>

            <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Future Enhancements
              </h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium text-white mb-2">
                    Advanced Analytics
                  </h4>
                  <p className="text-gray-400">
                    Introducing machine learning capabilities for predictive
                    analytics and trend forecasting.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium text-white mb-2">
                    Integration with Other Systems
                  </h4>
                  <p className="text-gray-400">
                    Expanding compatibility with third-party maritime systems
                    for a more holistic view of maritime operations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DocsPage;
