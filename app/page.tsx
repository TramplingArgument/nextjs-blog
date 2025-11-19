import Image from "next/image";
import * as React from "react"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
// import { useIsMobile } from "@/hooks/use-mobile"
import CourseList from "@/components/CourseList";
import CourseForm from "@/components/CourseForm";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

// interface Matkul {
//   id: string,
//   nama: string,
//   deskripsi: string,
//   sks: number,
//   createdAt: Date,
//   updatedAt: Date,
//   tugas: Array<Record<string, unknown>>;
//   }

// export default function Home() {
//   // const [data, setData] = useState<Matkul[]>([]);

//   // async function fetchData() {
//   //     const res = await fetch("https://pekris-webdev.vercel.app/api/matkul", {
//   //   method: "GET",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     Authorization: `Bearer LCHGwJBoSTbNET9RycM4bOofFCkZLaqR`,
//   //   },
//   // });
//   // const data: Matkul[] = await res.json();
//   // setData(data);
//   // }
//   return (
//     <main className="py-2">
//       {/* Navigation */}
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}><Link href="page.tsx">Home</Link></NavigationMenuLink>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}><Link href="page.tsx">Tugas</Link></NavigationMenuLink>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </main>
//   );
// }

export default function App() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Tugas Tracker</h1>

      <CourseForm />

      <div className="mt-4">
        <CourseList />
      </div>
    </div>
  )
}