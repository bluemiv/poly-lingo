import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { DashboardOutlined, TranslationOutlined } from '@ant-design/icons';
import { NavButton } from '@repo/ui/components';
import { ROUTE_PATH } from '@/router';
import dayjs from 'dayjs';

export default function BaseLayout() {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white h-[70px] flex justify-between items-center px-6 sticky top-0 left-0">
        <button className="font-semibold" onClick={() => nav(ROUTE_PATH.ROOT)}>
          Poly Lingo
        </button>
        <nav>
          <ul className="flex items-center gap-4">
            {[
              { icon: <DashboardOutlined />, label: 'Dashboard', link: ROUTE_PATH.ROOT },
              {
                icon: <TranslationOutlined />,
                label: 'Translation',
                link: ROUTE_PATH.TRANSLATIONS,
              },
            ].map(({ icon, label, link }) => {
              const pathname = location.pathname;
              const isActive =
                link === ROUTE_PATH.ROOT
                  ? link === pathname
                  : new RegExp(`^${link}`).test(pathname);
              return (
                <li key={label}>
                  <NavButton icon={icon} onClick={() => nav(link)} isActive={isActive}>
                    {label}
                  </NavButton>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <div className="min-h-[calc(100vh-140px)]">
        <Outlet />
      </div>
      <footer className="h-[70px] text-sm flex items-center justify-center text-slate-400">
        © bluemiv {dayjs().year()}. All Rights Reserved.
      </footer>
    </div>
  );
}
