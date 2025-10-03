import { Input } from "@/components/ui/input";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Nav() {
  return (
    <>
      <nav className="flex justify-between items-center h-[59px]">
        <div className="flex gap-2 items-center">
          <svg
            className="content-center"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M5.83366 2.16675V18.8334M14.167 2.16675V18.8334M1.66699 10.5001H18.3337M1.66699 6.33341H5.83366M1.66699 14.6667H5.83366M14.167 14.6667H18.3337M14.167 6.33341H18.3337M3.48366 2.16675H16.517C17.5203 2.16675 18.3337 2.9801 18.3337 3.98341V17.0167C18.3337 18.0201 17.5203 18.8334 16.517 18.8334H3.48366C2.48034 18.8334 1.66699 18.0201 1.66699 17.0167V3.98341C1.66699 2.9801 2.48034 2.16675 3.48366 2.16675Z"
              stroke="#4338CA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[#4338CA] content-center text-[16px] font-bold">
            Movie Z
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Comedy</SelectItem>
              <SelectItem value="dark">Horror</SelectItem>
              <SelectItem value="system">Action</SelectItem>
              <SelectItem value="animation">Animation</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="  Search" />
        </div>

        <Switch className="" />
      </nav>
    </>
  );
}
