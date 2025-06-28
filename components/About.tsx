"use client";

export default function About() {
  const tools = [
    "Python",
    "SQL",
    "Power BI",
    "Tableau",
    "React",
    "Wireshark",
    "Kali Linux",
    "TryHackMe",
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-rose-600 dark:bg-rose-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My journey began with data — analyzing trends, building dashboards,
              and unlocking insights through Python and SQL. But as I explored further,
              I became fascinated with how systems are protected and how data can
              be compromised.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Now, I’m expanding my skill set into cybersecurity. I am hands-on with
              platforms like TryHackMe, learning about threats, vulnerabilities, and
              how to defend against them. I’m looking to grow at the intersection of
              data and security — making smart systems safer.
            </p>

            <h4 className="text-lg font-semibold text-indigo-500 dark:text-cyan-300 mb-4">
              Tools I Use
            </h4>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-rose-100 dark:bg-gray-700 text-rose-600 dark:text-rose-300 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
