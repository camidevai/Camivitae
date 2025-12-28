export default function DesignSystemPage() {
    return (
        <main className="min-h-screen p-8 md:p-12 lg:p-24 space-y-16 max-w-7xl mx-auto">
            <header className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-2">
                    Design System
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Camivitae <span className="text-primary">Premium</span> Theme
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A showcase of our core design tokens, colors, typography, and components powered by Tailwind CSS v4 and HSL variables.
                </p>
            </header>

            {/* Colors Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-border pb-2">Color Palette</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ColorCard name="Primary" variable="bg-primary" text="text-primary-foreground" hex="#4f46e5" />
                    <ColorCard name="Secondary" variable="bg-secondary" text="text-secondary-foreground" hex="#ec4899" />
                    <ColorCard name="Background" variable="bg-background" text="text-foreground" hex="#0f172a" border />
                    <ColorCard name="Card" variable="bg-card" text="text-card-foreground" hex="#1e293b" border />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
                    {/* Opacity Scale Test */}
                    <div className="h-16 rounded-md bg-primary/10 flex items-center justify-center text-xs text-muted-foreground">10%</div>
                    <div className="h-16 rounded-md bg-primary/20 flex items-center justify-center text-xs text-muted-foreground">20%</div>
                    <div className="h-16 rounded-md bg-primary/40 flex items-center justify-center text-xs text-muted-foreground">40%</div>
                    <div className="h-16 rounded-md bg-primary/60 flex items-center justify-center text-xs text-white">60%</div>
                    <div className="h-16 rounded-md bg-primary/80 flex items-center justify-center text-xs text-white">80%</div>
                    <div className="h-16 rounded-md bg-primary flex items-center justify-center text-xs text-white">100%</div>
                </div>
            </section>

            {/* Typography Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-border pb-2">Typography</h2>
                <div className="glass p-8 rounded-2xl space-y-8">
                    <div className="space-y-2">
                        <span className="text-muted-foreground text-sm uppercase tracking-wider">Display</span>
                        <h1 className="text-5xl font-bold tracking-tight">The quick brown fox moves perfectly.</h1>
                    </div>
                    <div className="space-y-2">
                        <span className="text-muted-foreground text-sm uppercase tracking-wider">Heading 2</span>
                        <h2 className="text-3xl font-semibold">Clean and modern typography for the web.</h2>
                    </div>
                    <div className="space-y-2">
                        <span className="text-muted-foreground text-sm uppercase tracking-wider">Body</span>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Designed for readability and comfort. Our typographic scale ensures that your content is always legible and accessible, regardless of the screen size or device. We use Geist Sans for a technical yet human feel.
                        </p>
                    </div>
                </div>
            </section>

            {/* UI Components Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-border pb-2">Components & Glassmorphism</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Glass Card */}
                    <div className="glass glass-hover p-6 rounded-2xl space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 19.743l4.762-6.158-2.06-2.179 6.809-5.265-3.681-7.1zM16.5 12 12 16.5" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium">Glassmorphism</h3>
                        <p className="text-muted-foreground">
                            Our signature glass effect adds depth and context without cluttering the UI. Hover over me!
                        </p>
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                            Action Button
                        </button>
                    </div>

                    {/* Standard Card */}
                    <div className="bg-card border border-border p-6 rounded-2xl space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium">Standard Card</h3>
                        <p className="text-muted-foreground">
                            A solid fallback for when transparency isn't needed. Clean borders and subtle contrast.
                        </p>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors">
                                Secondary
                            </button>
                            <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/80 transition-colors">
                                Ghost
                            </button>
                        </div>
                    </div>

                    {/* Inputs */}
                    <div className="glass p-6 rounded-2xl space-y-4 flex flex-col justify-center">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                            <input type="email" placeholder="example@camivitae.com" className="w-full bg-background/50 border border-input rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all placeholder:text-muted-foreground/50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Password</label>
                            <input type="password" value="secretpassword" className="w-full bg-background/50 border border-input rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ColorCard({ name, variable, text, hex, border = false }: { name: string; variable: string; text: string; hex: string; border?: boolean }) {
    return (
        <div className={`p-4 rounded-xl ${variable} ${border ? 'border border-border' : ''} space-y-3`}>
            <div className="flex justify-between items-start">
                <span className={`text-sm font-medium ${text}`}>{name}</span>
            </div>
            <div className={`text-xs opacity-80 font-mono ${text}`}>{hex}</div>
        </div>
    );
}
