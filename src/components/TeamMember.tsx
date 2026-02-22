import { Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  github?: string;
  githubUsername?: string;
  portfolio?: string;
}

const TeamMember = ({ name, github, githubUsername, portfolio }: TeamMemberProps) => {
  const avatarUrl = githubUsername ? `https://github.com/${githubUsername}.png` : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="relative z-10 w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-lg group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-500">
              <span className="text-primary font-bold font-mono text-xl">
                {name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">{name}</h3>
          {githubUsername && (
            <p className="text-sm text-muted-foreground font-mono opacity-80">@{githubUsername}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {portfolio && (
            <a 
              href={`https://${portfolio}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-white/80 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-md transition-all duration-300 border border-border/50"
              title="Portfolio"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-white/80 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-md transition-all duration-300 border border-border/50"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
