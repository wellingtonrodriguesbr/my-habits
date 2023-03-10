import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useState } from "react";
import { NewHabitForm } from "./NewHabitForm";

export function CreateHabitDialog() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog.Root open={openDialog}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          onClick={() => setOpenDialog(true)}
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 text-white flex gap-3 items-center hover:border-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-background"
        >
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 w-screen h-screen bg-black/80"
          onClick={() => setOpenDialog(false)}
        />
        <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close
            className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200"
            onClick={() => setOpenDialog(false)}
          >
            <X size={24} aria-label="Fechar" />
          </Dialog.Close>
          <Dialog.Title className="text-3xl leading-tight font-extrabold text-white">
            Criar hábito
          </Dialog.Title>
          <NewHabitForm setOpenDialog={setOpenDialog} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
