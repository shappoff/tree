export default function HomeButton() {
  return (
    <a href="/" className="home-button" aria-label="Домой — на главную страницу">
      <svg
        className="home-button__icon"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-7h6v7" />
      </svg>
      <span className="home-button__label">Домой</span>
    </a>
  );
}
