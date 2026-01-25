import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import MainNav from "./main-nav";
import { SidebarCloseIcon } from "./sidebar-close-icon";
import getCategories from "@/actions/get-categories";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const categories = await getCategories();
  return (
    <Sidebar {...props} variant="floating">
      <SidebarHeader className=" ml-7">
        <SidebarMenu>
          <SidebarMenuItem className="relative h-12">
            <SidebarCloseIcon />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-5 ml-7">
        <SidebarGroupLabel>
          <span className="text-lg font-medium">Navigation</span>
        </SidebarGroupLabel>

        <SidebarGroup>
          <SidebarGroupContent>
            <MainNav data={categories} className="flex-col" />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-col justify-center items-center pb-10"></SidebarFooter>
    </Sidebar>
  );
}
