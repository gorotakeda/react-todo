import { useState } from "react";

export const useTodoToggle = () => {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}
