import { FormEvent, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";

import { Check } from "phosphor-react";
import { api } from "../lib/axios";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

interface NewHbitFormProps {
  setOpenDialog: (state: boolean) => void;
}

export function NewHabitForm({ setOpenDialog }: NewHbitFormProps) {
  const [title, setTitle] = useState("");

  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabiit(event: FormEvent) {
    event.preventDefault();
    if (!title || weekDays.length === 0) {
      return;
    }

    await api.post("habits", {
      title,
      weekDays,
    });
    setOpenDialog(false);
    setTitle("");
    setWeekDays([]);
    alert("Hábito criado com sucesso!");
  }

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      const weekDaysWithRemovedOne = weekDays.filter(
        (weekDay) => weekDay !== weekDayIndex
      );
      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddOne = [...weekDays, weekDayIndex];
      setWeekDays(weekDaysWithAddOne);
    }
  }

  return (
    <form onSubmit={createNewHabiit} className="mt-6">
      <label htmlFor="title" className="text-white font-semibold mb-3 block">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        name="title"
        id="title"
        required
        className="w-full p-4 rounded-lg bg-zinc-800 placeholder:text-zinc-400 border border-transparent focus:border focus:border-zinc-500 outline-0 text-white"
        placeholder="Ex: Exercícios, dormir cedo, etc..."
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="" className="text-white font-semibold mt-4 block">
        Qual a recorrência?
      </label>

      <div className="flex flex-col mt-3 gap-2">
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox.Root
            key={weekDay}
            className="flex items-center gap-3 group"
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:border-green-700 group-data-[state=checked]:bg-green-500 transition-colors">
              <Checkbox.Indicator>
                <Check size={20} weight="bold" className="text-white" />
              </Checkbox.Indicator>
            </div>
            <span className="text-white leading-tight">{weekDay}</span>
          </Checkbox.Root>
        ))}
      </div>

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
