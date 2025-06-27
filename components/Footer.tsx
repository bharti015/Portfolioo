"use client";

export default function Footer() {
  const socialLinks = [
    {
      icon: "fab fa-github",
      href: "https://github.com/bharti015",
      color: "hover:text-rose-600 dark:hover:text-rose-300"
    },
    {
      icon: "fab fa-linkedin",
      href: "https://linkedin.com/in/bharti12",
      color: "hover:text-indigo-500 dark:hover:text-cyan-300"
    },
    {
      icon: "fas fa-envelope",
      href: "mailto:bharti.work2@gmail.com",
      color: "hover:text-emerald-400 dark:hover:text-purple-500"
    }
  ];

  return (
    <footer className="theme-transition bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">© 2023 Bharti. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`theme-transition text-gray-600 dark:text-gray-300 ${link.color}`}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={`Visit ${link.href}`}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
