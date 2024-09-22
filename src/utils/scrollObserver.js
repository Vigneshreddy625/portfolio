export function setupScrollObservers(sections, callback) {
    const observers = [];
  
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              callback(section);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });
  
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }