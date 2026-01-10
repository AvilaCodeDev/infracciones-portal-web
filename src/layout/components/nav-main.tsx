"use client"

import { ChevronRight } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import type { Menu } from "@/modules/auth/interfaces"
import { srtSinAcentos } from "@/helpers/srtSinAcentos"
import { Link } from "react-router-dom"

interface Props{
    items: Menu[]
}

export function NavMain( { items }:Props) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.nombreMenu}
                        asChild
                        // defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.nombreMenu}>
                                    {/* {item.icon && <item.icon />} */}
                                    <span>{item.nombreMenu}</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.submenus?.map((subItem) => (
                                        <SidebarMenuSubItem key={subItem.nombreSubmenu}>
                                            <SidebarMenuSubButton asChild>
                                                <Link to={
                                                    `./${srtSinAcentos(item.nombreMenu).toLowerCase().replace(' ','')}/${srtSinAcentos(subItem.nombreSubmenu).toLowerCase().replace(' ','')}`
                                                }>
                                                    <span>{subItem.nombreSubmenu}</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
