export default function Home() {
  return (
    <main className="coming-soon">
      <div className="coming-soon-image">
        <img
          src="/lumyun-serum.png"
          alt="LUMYUN Vitamin C Serum"
        />
      </div>

      <div className="coming-soon-content">
        <p className="eyebrow">LUMYUN OFFICIAL</p>

        <h1>
          Something
          <br />
          beautiful is coming.
        </h1>

        <p className="description">
          Thoughtful skincare, beautifully simplified.
          <br />
          Our first ritual is almost here.
        </p>

        <a href="mailto:hello@lumyun.com" className="notify-button">
          STAY IN THE KNOW
        </a>
      </div>

      <footer className="coming-soon-footer">
        <span>© 2026 LUMYUN</span>
        <span>VITAMIN C SERUM</span>
      </footer>
    </main>
  );
}