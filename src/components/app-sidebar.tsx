'use client'

import React, { useEffect, useState } from 'react'
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from './ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { ChevronDown } from 'lucide-react'
import { Level, LevelGroup } from '@/payload-types'

type GroupedLevels = {
  [groupName: string]: Level[];
}

const AppSidebar = () => {
  const [levels, setLevels] = useState<GroupedLevels>({});

  useEffect(() => {
    const fetchGradeLevels = async () => {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/levels`).then((res) => res.json());
        const levels: Level[] = data.docs;

        const grouped = levels.reduce<GroupedLevels>((acc, level) => {
          const group = level.group as LevelGroup;
          const groupName = group.name;

          if (!acc[groupName]) {
            acc[groupName] = [];
          }
  
          // Push the level into the appropriate group
          acc[groupName].push(level);
          return acc;
        }, {});

        setLevels(grouped);
      } catch (error) {
        console.error('AppSidebar:useEffect;' + error);
      }
    }

    fetchGradeLevels();
  }, []);

  useEffect(() => {
    console.log(levels)
  }, [levels])

  return (
    <Sidebar>
      <SidebarGroup>
        <SidebarGroupLabel>Grade Levels</SidebarGroupLabel>
        <SidebarGroupContent>
          
          {/* <SidebarMenu>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Elementary
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton>Grade 1</SidebarMenuButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu> */}
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  )
}

export default AppSidebar