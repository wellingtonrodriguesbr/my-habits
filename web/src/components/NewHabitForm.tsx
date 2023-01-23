import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="mt-6">
      <label htmlFor="title" className="text-white font-semibold mb-3 block">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="w-full p-4 rounded-lg bg-zinc-800 placeholder:text-zinc-400 border border-transparent focus:border focus:border-zinc-500 outline-0 text-white"
        placeholder="Ex: Exercícios, dormir cedo, etc..."
        autoFocus
      />

      <label htmlFor="" className="text-white font-semibold mt-4 block">
        Qual a recorrência?
      </label>

      <button
        type="submit"
        className="w-full flex items-center justify-center uppercase gap-3 text-white font-bold bg-green-600 p-4 mt-6 hover:bg-green-500 rounded-lg"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
