import { z } from "zod"

export const formSchema= z.object({
    firstName: z.string().min(2,{message:"name must be at least 2 characters"}),
    lastName: z.string().optional(),
    address: z.string().optional(),
    phone: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
  
  });
  
  export type TFormSchema= z.infer<typeof formSchema>