export default function App() {
    const skills = ["HTML", "CSS", "Java", "TypeScript", "Node", "Spring Boot"];

    return (
        <div>
            <header className="site-header">
                <div className="container">
                    <h1 className="name">Elie Faniar</h1>
                    <p className="tag">HTML • CSS • Java • TypeScript • Node • Spring Boot</p>
                    <nav className="nav">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>

            <main>
                <section id="about" className="section">
                    <div className="container grid-2">
                        <div>
                            <h2>About</h2>
                            <p>
                               jag är student i STI.
                            </p>
                        </div>
                        <div className="card stats">
                            <div>
                                <span className="stat-num">6</span>
                                <span className="stat-label">Skills</span>
                            </div>
                            <div>
                                <span className="stat-num">3</span>
                                <span className="stat-label">Sample projects</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="section alt">
                    <div className="container">
                        <h2>Skills</h2>
                        <ul className="skills">
                            {skills.map(s => <li key={s}>{s}</li>)}
                        </ul>
                    </div>
                </section>

                <section id="projects" className="section">
                    <div className="container">
                        <h2>Projects</h2>
                        <div className="grid-3">
                            <article className="card">
                                <h3>Starter Page</h3>
                                <p>Minimal responsive static site.</p>
                                <a className="btn" href="#" aria-disabled="true">View</a>
                            </article>
                            <article className="card">
                                <h3>API Service</h3>
                                <p>Spring Boot REST skeleton with health check.</p>
                                <a className="btn" href="#" aria-disabled="true">View</a>
                            </article>
                            <article className="card">
                                <h3>CLI Tool</h3>
                                <p>Node + TypeScript command line scaffold.</p>
                                <a className="btn" href="#" aria-disabled="true">View</a>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section alt">
                    <div className="container">
                        <h2>Contact</h2>
                        <p>Email: <a href="mailto:eliefeniar11@gmail.com">eliefeniar11@gmail.com</a></p>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container">
                    <small>© {new Date().getFullYear()} Elie Faniar</small>
                </div>
            </footer>
        </div>
    );
}
