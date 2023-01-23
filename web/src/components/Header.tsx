import { CreateHabitDialog } from "./CreateHabitDialog";
import logoImage from "../assets/logo.svg";

export function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="" />
      <CreateHabitDialog />
    </header>
  );
}
