
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  highlights: string[];
}

export interface PipelineStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

// Added Experience interface to support ExperienceSlider component
export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  period: string;
}

// Added FAQItem interface to support FAQ component
export interface FAQItem {
  question: string;
  answer: string;
}
