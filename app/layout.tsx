import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";
import "./styles.css";
import type {ReactNode} from "react";
export const metadata={title:"CultureRoute",description:"Discover a cultural shortlist from public books, films and artists with the Qloo evidence attached."};
export default function Layout({children}:{children:ReactNode}){return <html lang="en"><body className="lab"><TooltipProvider>{children}</TooltipProvider></body></html>;}
