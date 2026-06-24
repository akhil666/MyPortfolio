import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="kp-footer">
      <span>© 2026 {profile.name}</span>
      <span>Built in Kerala, India</span>
    </footer>
  );
}
