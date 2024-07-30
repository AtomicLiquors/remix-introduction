export interface ProjectProps {
    title: string;
    period: string;
    teamSize: number;
    description: string;
    technologies: string[];
    role: string;
    responsibilities: string[];
    achievements: string[];
    links: {
        code?: string;
        demo?: string;
    };
}