"use client";

export default function Projects() {
  const projects = [
    {
      title: "Anomaly Detection using Isolation Forest (Aug 2024)",
      description:
        "Built an ML pipeline using Isolation Forest to detect unusual traffic behavior. Cleaned and analyzed over 20K records, improving anomaly detection accuracy with feature selection.",
      image: "/anomaly.png",
      tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      links: {
        notebook: "https://www.kaggle.com/code/ei0oei/network-anomaly",
        code: "https://github.com/bharti015/Anomaly-detection-using-Isolation-Forest",
      },
    },
    {
      title: "Employee Retention Analysis (Jun – Jul 2024)",
      description:
        "Built a predictive model to classify employee retention likelihood using HR data. Visualized key indicators like satisfaction and performance rating.",
      image:"/employee.png",
      tags: ["Python", "Kaggle", "Seaborn"],
      links: {
        notebook: "https://www.kaggle.com/code/ei0oei/capstone-project1",
        code: "https://github.com/bharti015/projects/blob/main/capstone-project1.ipynb",
      },
    },
    // {
    //   title: "React Analytics App",
    //   description: "Full-stack web application for data visualization with interactive charts and real-time updates.",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   tags: ["React", "D3.js", "Node.js"],
    //   links: {
    //     demo: "#",
    //     code: "#"
    //   }
    // },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-dot-grid-light dark:bg-dot-grid-dark portfolio-bg-light portfolio-bg-dark"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-rose-600 dark:bg-rose-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my key projects that showcase my skills in data
            analysis, visualization, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="theme-transition bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-cyan-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {/* {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-transition flex-1 text-center py-2 bg-emerald-400 dark:bg-purple-500 text-white rounded-lg hover:shadow-md text-sm font-medium"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>Demo
                    </a>
                  )} */}
                  {project.links.notebook && (
                    <a
                      href={project.links.notebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-transition flex-1 text-center py-2 bg-emerald-400 dark:bg-purple-500 text-white rounded-lg hover:shadow-md text-sm font-medium"
                    >
                      <i className="fas fa-book mr-1"></i>Notebook
                    </a>
                  )}
                  {/* <a 
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-transition flex-1 text-center py-2 border border-rose-600 dark:border-rose-300 text-rose-600 dark:text-rose-300 rounded-lg hover:bg-rose-600 dark:hover:bg-rose-300 hover:text-white dark:hover:text-gray-900 text-sm font-medium"
                  >
                    <i className="fas fa-GitHub mr-1"></i>Repo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
