'use client'

import React, { useEffect, useState } from 'react'
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from './ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { ChevronDown } from 'lucide-react'
import { Level, LevelGroup } from '@/payload-types'

type Group = {
  name: string;
  viewOrder: number;
  levels: Level[];
}

const AppSidebar = () => {
  const [groupedLevels, setGroupedLevels] = useState<Group[]>([]);

  useEffect(() => {
    const fetchGradeLevels = async () => {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/levels?limit=100`).then((res) => res.json());
        const levels: Level[] = data.docs;
        const sortedLevels = levels.sort((a, b) => a.viewOrder - b.viewOrder);

        let groupedLevels: Group[] = [];

        sortedLevels.forEach(level => {
          const levelGroup = level.group as LevelGroup;
          const groupName = levelGroup.name;

          if(!groupedLevels.some((group) => group.name === groupName)) {
            groupedLevels.push({
              name: groupName,
              viewOrder: levelGroup.viewOrder,
              levels: []
            })
          }

          const currentGroupIndex = groupedLevels.findIndex(group => group.name === groupName);

          groupedLevels[currentGroupIndex].levels.push(level);
        })

        const sortedGroupedLevels = groupedLevels.sort((a, b) => a.viewOrder - b.viewOrder);

        setGroupedLevels(sortedGroupedLevels);
      } catch (error) {
        console.error('AppSidebar:useEffect;' + error);
      }
    }

    fetchGradeLevels();
  }, []);

  useEffect(() => {
    console.log(groupedLevels);
  }, [groupedLevels])

  return (
    <Sidebar>
      <SidebarGroup>
        <SidebarGroupLabel>Grade Levels</SidebarGroupLabel>
        <SidebarGroupContent>
          {groupedLevels.map((group, index) => (
            <SidebarMenu key={index}>
              <Collapsible className='group/collapsible'>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {group.name}
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {group.levels.map((level, index) => (
                      <SidebarMenuSub key={index}>
                        <SidebarMenuSubItem>
                          <SidebarMenuButton>
                            {level.name}
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  )
}

export default AppSidebar