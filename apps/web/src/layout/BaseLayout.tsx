import { Outlet, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/router';
import { DashboardOutlined } from '@ant-design/icons';
import { NavButton } from '@repo/ui/components';

export default function BaseLayout() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen">
      <header className="h-[70px] flex justify-between items-center px-6 sticky top-0 left-0">
        <button className="font-semibold" onClick={() => nav(ROUTE_PATH.ROOT)}>
          Poly Lingo
        </button>
        <nav>
          <ul>
            <li>
              <NavButton className="">
                <DashboardOutlined />
                <span>Dashboard</span>
              </NavButton>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}
