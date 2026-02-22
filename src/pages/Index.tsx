import { useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import TeamMember from "@/components/TeamMember";
import ServiceCard from "@/components/ServiceCard";
import {
    Smartphone,
    Globe,
    Monitor,
    Wrench,
    Code2,
    Palette,
    Cloud,
    ArrowRight,
    Github,
    Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

const techStack = [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Flutter", slug: "flutter" },
    { name: "Figma", slug: "figma" },
    { name: "Three.js", slug: "threedotjs" },
    { name: "Redux", slug: "redux" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "Django", slug: "django" },
    { name: "Python", slug: "python" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "Docker", slug: "docker" },
    { name: "AWS", slug: "amazonwebservices" },
    { name: "Firebase", slug: "firebase" },
];

const Index = () => {
    useLayoutEffect(() => {
        if (typeof window === "undefined") return;

        // Prevent browser restoring scroll on back/forward
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Remove hash to stop anchor auto-scroll
        if (window.location.hash) {
            window.history.replaceState(
                null,
                "",
                window.location.pathname + window.location.search
            );
        }

        // Force scroll before paint
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });

        return () => {
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "auto";
            }
        };
    }, []);
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div 
                        animate={{ 
                            x: [0, 30, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{ 
                            duration: 15, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        style={{ willChange: "transform" }}
                        className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" 
                    />
                    <motion.div 
                        animate={{ 
                            x: [0, -40, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{ 
                            duration: 20, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        style={{ willChange: "transform" }}
                        className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-accent/5 rounded-full blur-[110px]" 
                    />
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                style={{ willChange: "transform, opacity" }}
                            >
                                <img
                                    src="/nepalbyte-logo.png"
                                    alt="NepalByte"
                                    className="w-20 h-20 mb-8 rounded-2xl ring-2 ring-white shadow-xl shadow-primary/10 object-cover mx-auto lg:mx-0"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                style={{ willChange: "transform, opacity" }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-border text-primary text-sm font-mono font-medium mb-8 shadow-sm"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                                </span>
                                Open Source · Nepal
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45, duration: 0.5 }}
                                style={{ willChange: "transform, opacity" }}
                                className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-8 tracking-tighter"
                            >
                                Nepal<span className="text-primary">Byte</span>.
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55, duration: 0.5 }}
                                style={{ willChange: "transform, opacity" }}
                                className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-foreground/80 leading-[1.1] mb-8 tracking-tight"
                            >
                                Crafting <span className="text-accent underline decoration-primary/30 underline-offset-8">Digital</span> Excellence.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.65, duration: 0.5 }}
                                style={{ willChange: "transform, opacity" }}
                                className="text-xl sm:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                            >
                                We build scalable products that turn bold ideas into high-performance reality, <span className="text-foreground font-medium">one commit at a time.</span>
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.75, duration: 0.5 }}
                                style={{ willChange: "transform, opacity" }}
                                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                            >
                                <a
                                    href="https://github.com/NepalByte"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Github className="w-5 h-5" />
                                    View on GitHub
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.85, duration: 0.7 }}
                            style={{ willChange: "transform, opacity" }}
                            className="hidden lg:block relative"
                        >
                            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-[60px] -z-10" />
                            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/80 via-white/40 to-white/10 backdrop-blur-2xl border border-white/50 shadow-2xl overflow-hidden ring-1 ring-black/5">
                                <div className="bg-slate-950/90 rounded-[2rem] p-8 font-mono text-sm leading-relaxed shadow-inner border border-white/5">
                                    <div className="flex gap-2 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-gray-500 mb-2"># Perfecting the craft</p>
                                        <p className="text-purple-400">class <span className="text-blue-400">NepalByte</span>:</p>
                                        <p className="pl-4 text-gray-400">def <span className="text-blue-400">__init__</span>(self):</p>
                                        <p className="pl-8"><span className="text-blue-300">self</span>.<span className="text-blue-300">vision</span> = <span className="text-orange-300">"Digital Excellence"</span></p>
                                        <p className="pl-4 text-purple-400">@property</p>
                                        <p className="pl-4 text-gray-400">def <span className="text-blue-400">is_online</span>(self) -&gt; bool:</p>
                                        <p className="pl-8"><span className="text-pink-400">return</span> <span className="text-blue-300">True</span></p>
                                        <p className="pl-4 text-purple-400">async def <span className="text-blue-400">realize</span>(self, idea):</p>
                                        <p className="pl-8 text-pink-400">return <span className="text-gray-300">await</span> idea.<span className="text-blue-300">transform()</span></p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 px-6 relative">
                <div className="absolute inset-0 bg-card/40 pointer-events-none" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4">
                            <Code2 className="w-3 h-3" /> SERVICES
                        </div>
                        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-3">
                            What We Build
                        </h2>
                        <p className="text-muted-foreground">
                            End-to-end digital solutions for modern businesses
                        </p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={Smartphone}
                            title="Mobile Apps"
                            description="Premium iOS and Android applications with native performance and stunning fluid animations."
                        />
                        <ServiceCard
                            icon={Globe}
                            title="Web Systems"
                            description="Scalable, high-performance web applications built for complexity and designed for speed."
                        />
                        <ServiceCard
                            icon={Palette}
                            title="UI/UX Design"
                            description="User-centric design systems that balance aesthetic beauty with functional excellence."
                        />
                        <ServiceCard
                            icon={Monitor}
                            title="Desktop Software"
                            description="Enterprise-grade desktop applications for Windows, macOS, and Linux environments."
                        />
                        <ServiceCard
                            icon={Cloud}
                            title="Cloud Solutions"
                            description="Scalable architecture and API development to power your digital infrastructure."
                        />
                        <ServiceCard
                            icon={Wrench}
                            title="Custom Software"
                            description="Tailored digital solutions engineered to solve your most unique business challenges."
                        />
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono mb-4">
                            <Terminal className="w-3 h-3" /> TECHNOLOGIES
                        </div>
                        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-3">
                            Tech Stack
                        </h2>
                        <p className="text-muted-foreground">
                            The tools we work with every day
                        </p>
                    </motion.div>
                    {/* Simplified Single-Row Tech Stack */}
                    <div className="relative mt-12 py-10 overflow-hidden">
                        {/* Gradient Masks for smooth fade */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                        
                        <div className="flex group py-4">
                            <motion.div 
                                className="flex gap-16 items-center flex-nowrap min-w-full"
                                animate={{
                                    x: [0, "-50%"]
                                }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {[...techStack, ...techStack].map((tech, i) => (
                                    <div key={`${tech.slug}-${i}`} className="flex-shrink-0 group/icon relative px-4">
                                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
                                        <img 
                                            src={`https://cdn.simpleicons.org/${tech.slug}`} 
                                            alt={tech.name} 
                                            className="w-10 h-10 relative z-10 brightness-0 opacity-20 hover:brightness-100 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-125"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 px-6 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4">
                            👨 TEAM
                        </div>
                        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-3">
                            Meet the Team
                        </h2>
                        <p className="text-muted-foreground">
                            The visionaries behind NepalByte
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <TeamMember
                            name="Nur Pratap Karki"
                            github="https://github.com/nurpratapkarki"
                            githubUsername="nurpratapkarki"
                            portfolio="nurpratapkarki.com.np"
                        />
                        <TeamMember
                            name="Sankalp Tharu"
                            github="https://github.com/S4NKALP"
                            githubUsername="S4NKALP"
                            portfolio="sankalptharu.com.np"
                        />
                    </div>
                </div>
            </section>

            {/* Minimalist Centered Footer */}
            <footer className="pt-32 pb-12 px-6 border-t border-border relative bg-white">
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    {/* Brand Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center space-y-8 mb-20"
                    >
                        <img
                            src="/nepalbyte-logo.png"
                            alt="NepalByte"
                            className="w-20 h-20 rounded-2xl ring-2 ring-white shadow-xl shadow-primary/10 object-cover"
                        />
                        <div className="space-y-4">
                            <h3 className="font-heading font-black text-4xl sm:text-6xl tracking-tighter text-foreground">
                                Nepal<span className="text-primary">Byte</span>.
                            </h3>
                            <p className="text-muted-foreground text-lg sm:text-xl max-w-lg mx-auto leading-relaxed">
                                Crafting digital excellence through precise engineering and creative architecture.
                            </p>
                        </div>
                    </motion.div>

                    {/* Expertise Pills */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-20"
                    >
                        {["Mobility", "Scalable Systems", "AI Solutions", "UI/UX Theory", "Cloud Architecture"].map((tech) => (
                            <span key={tech} className="px-6 py-2.5 rounded-full bg-slate-50 border border-border text-[11px] font-mono font-black uppercase tracking-[0.2em] text-muted-foreground/80 hover:border-primary/30 hover:text-primary transition-all duration-300">
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    {/* Primary Action */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <a
                            href="https://github.com/NepalByte"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-10 py-5 rounded-2xl bg-slate-950 text-white font-bold text-xl transition-all duration-300 hover:bg-primary hover:shadow-[0_20px_40px_rgba(8,112,184,0.15)] hover:-translate-y-1 active:scale-95 flex items-center gap-4"
                        >
                            <Github className="w-6 h-6" />
                            Forge with us on GitHub
                        </a>
                    </motion.div>

                    {/* Refined Bottom Bar */}
                    <div className="mt-32 pt-10 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-8">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
                            © 2026 NepalByte Digital Creations
                        </p>
                        <div className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-border hover:border-accent/20 transition-colors">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60">
                                Handcrafted with <span className="text-accent inline-block animate-pulse group-hover:scale-125 transition-transform">❤️</span> in Nepal
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
