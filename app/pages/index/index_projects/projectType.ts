export interface ProjectProps {
    emoji: string;
    title: string;
    subtitle: string;
    period: string;
    teamSize: number;
    description: string;
    stacks: string[];
    role: string;
    responsibilities: string[];
    achievements: string[];
    links: {
        code?: string;
        demo?: string;
    };
    screenshot: string;
}