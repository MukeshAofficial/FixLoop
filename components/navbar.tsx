import Link from "next/link"
import { 
    NavigationMenu ,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "./ui/navigation-menu"
import { Button } from "@/components/ui/button"

export default function Navbar(){
    return (
<div className="fixed top-5 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Left - Project Name */}
        <Link href="/" className="text-2xl font-bold text-primary">
          FixLoop
        </Link>
        <NavigationMenu className="flex gap-60 justify-center">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                       <NavigationMenuLink asChild>
                        <Link href='/Generate'>Generate With AI</Link>
                       </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href='/1'>Home</Link>
                    </NavigationMenuLink>             
                </NavigationMenuItem>

                 <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href='/2'>Pricing</Link>
                    </NavigationMenuLink>             
                </NavigationMenuItem>

                 <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href='/3'>About</Link>
                    </NavigationMenuLink>             
                </NavigationMenuItem>


                 <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href='/1'>Contact</Link>
                    </NavigationMenuLink>             
                </NavigationMenuItem>
                

            </NavigationMenuList>

        </NavigationMenu>

             <div className="flex gap-3 ml-6">
                <Link href="/login">
                    <Button variant="outline" >
                        Log In
                    </Button>
                </Link>
                <Link href="/signup">
                    <Button 
                    >
                        Sign Up
                    </Button>
                </Link>
            </div>
        </div>
    </div>
    )
}