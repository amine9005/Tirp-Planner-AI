import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/atoms/dropdown-menu/dropdown-menu";
import { User2Icon } from "lucide-react";
import Link from "next/link";
import { signOutAction } from "@/app/api/actions/auth/auth.controller";
import { getSession } from "@/helpers/authHelper.helper";
import { useEffect, useState } from "react";
import { User } from "better-auth";

export default function AdminIconMolecule() {
  const [user, setUser] = useState<User>();
  const urls = [
    {
      label: "View Projects",
      href: "/admin/project",
    },
    {
      label: "Add Project",
      href: "/admin/project/add",
    },
    ,
    {
      label: "View Requests",
      href: "/admin/requests",
    },
    {
      label: "Edit Hero Text",
      href: "/admin/hero/text",
    },
    {
      label: "Edit Hero Media",
      href: "/admin/hero/media",
    },
  ];

  useEffect(() => {
    async function getUser() {
      await getSession().then((session) => {
        setUser(session?.user);
      });
    }
    getUser();
  });

  if (!user) {
    return <div className="hidden"></div>;
  }
  return (
    <div className="flex items-center justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <User2Icon className="size-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuGroup>
            {urls.map((item, idx) => (
              <DropdownMenuItem key={idx}>
                <Link href={item!.href}>{item?.label}</Link>{" "}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem onClick={signOutAction}>Logout</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
