export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="eyebrow">Open to Internships</p>
          <h2>Let’s build something impactful.</h2>
          <p className="lead">
            {profile.hero.name} · {profile.hero.title}
          </p>
        </div>
        <a className="btn ghost" href="#top">
          Back to Top
        </a>
      </div>
    </footer>
  );
}
