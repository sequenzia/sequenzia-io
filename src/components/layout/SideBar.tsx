'use client';

import Image from 'next/image';
import SideBarMenu from './SideBarMenu';
import SideBarFooter from './SideBarFooter';

export default function SideBar() {
  return (
    <div className="drawer-side z-40">
      <label htmlFor="my-drawer" className="drawer-overlay" aria-label="Close sidebar"></label>
      <aside className="px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col">
        <div className="w-fit mx-auto mt-5 mb-6">
          <a href="/">
            <div className="avatar transition ease-in-out hover:scale-[102%] block m-auto">
              <div className="w-[8.5rem]">
                <Image
                  className="mask mask-circle"
                  width={300}
                  height={300}
                  src="/profile.webp"
                  alt="Profile image"
                  priority
                />
              </div>
            </div>
          </a>
        </div>
        <SideBarMenu />
        <SideBarFooter />
      </aside>
    </div>
  );
}
