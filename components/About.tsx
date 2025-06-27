"use client";

export default function About() {
  const tools = [
    "Python",
    "R",
    "SQL",
    "Power BI",
    "Tableau",
    "React",
    "JavaScript",
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
          {/* <div>
            <img 
              src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Abstract data visualization and technology patterns" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div> */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My passion for data began during my academic journey where I
              discovered the power of transforming raw information into
              actionable insights. I have spent countless hours mastering the
              art of data analysis, visualization, and web development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Currently seeking a full-time data analyst role where I can
              contribute to data-driven decision making and continue growing in
              the field of analytics and visualization.
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
